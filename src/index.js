
https = require('https');

async function geoDecoder(lat, lon, key) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&${key}`;
  const resp = await https.get(url);
  return resp;
}

module.exports = geoDecoder;
