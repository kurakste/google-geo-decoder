
const axios = require('axios');


async function geoDecoder(lat, lon, key) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${key}`;
  const resp = await axios(url);
  return resp;
}

module.exports = geoDecoder;
