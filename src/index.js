const getAddressObject = require('./getAddressObject');
const getRequest = require('./getRequest');

async function geoDecoder(lat, lon, key) {
  if (!key) throw new Error('Google API key is required.');
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${key}`;
  const data = await getRequest(url);
  if (data.error_message) throw new Error(data.error_message);
  return getAddressObject(data);
}

module.exports = geoDecoder;
