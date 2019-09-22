function extractByType(type, googleGeoResp) {
  const out = googleGeoResp.results[0].address_components
    .filter(el => el
      .types.indexOf(type) !== -1);
  if (out.length === 0) return null;

  return out[0].long_name;
}

module.exports = extractByType;
