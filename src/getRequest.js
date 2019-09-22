const https = require('https');

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

module.exports = getRequest;
