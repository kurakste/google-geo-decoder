const geoDecoder = require('./src');
(async function () {
  const resp = await geoDecoder(40.714224,-73.961452, null);
  console.log(resp.data);
})();
