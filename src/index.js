const https = require('https');

function extractByType(type, googleGeoResp) {
  const out = googleGeoResp.results[0].address_components
    .filter(el => el
      .types.indexOf(type) !== -1);
  if (out.length === 0) return null;

  return out[0].long_name;
}

function getAddressObject(googleResp) {
  return {
    postalCode: extractByType('postal_code', googleResp),
    country: extractByType('country', googleResp),
    lev1: extractByType('administrative_area_level_1', googleResp),
    lev2: extractByType('administrative_area_level_2', googleResp),
    lev3: extractByType('administrative_area_level_3', googleResp),
    route: extractByType('route', googleResp),
    streetNumber: extractByType('street_number', googleResp),
  };
}

function getRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, resp => {
      let data = '';
      resp.on('data', chunk => {
        data += chunk;
      });
      resp.on('end', () => {
        try {
          const out = JSON.parse(data);
          resolve(out);
        } catch (err) {
          reject(err);
        }
      });
      resp.on('error', (err) => reject(err));
    });
  });
}

async function geoDecoder(lat, lon, key) {
  if (!key) throw new Error('Google API key is required.');
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${key}`;
  const data = await getRequest(url);
  if (data.error_message) throw new Error(data.error_message);
  return getAddressObject(data);
}

module.exports = geoDecoder;
