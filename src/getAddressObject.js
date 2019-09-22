const extractByType = require('./extractByType');

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

module.exports = getAddressObject;
