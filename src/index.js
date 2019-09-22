
const axios = require('axios');

function extractByType(type, googleGeoResp) {
  const out = googleGeoResp.data.results[0].address_components
    .filter(el => el
      .types.indexOf(type) !== -1);
  if (out.length === 0) return null;

  return out[0].long_name;
}

function getAddressObject(googleResp) {
  const out = {};
  out.postalCode = extractByType('postal_code', googleResp);
  out.country = extractByType('country', googleResp);
  out.lev1 = extractByType('administrative_area_level_1', googleResp);
  out.lev2 = extractByType('administrative_area_level_2', googleResp);
  out.lev3 = extractByType('administrative_area_level_3', googleResp);
  out.route = extractByType('route', googleResp);
  out.streetNumber = extractByType('street_number', googleResp);
  return out;
}

async function geoDecoder(lat, lon, key) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${key}`;
  const resp = await axios(url);
  return getAddressObject(resp);
}

module.exports = geoDecoder;
