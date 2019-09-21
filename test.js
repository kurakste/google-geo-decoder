const dotenv = require('dotenv');
const geoDecoder = require('./src');

dotenv.config();

const key = process.env.GGKEY;

if (!key) throw new Error('Google map key doesn\'t found.');


const locations = [
  { name: 'nizhnekamsk', loc: [55.635270, 51.808362] },
  { name: 'kazan', loc: [55.819027, 49.050113] },
  { name: 'road tatarstan', loc: [55.664437, 49.854521] },
  { name: 'road tatarstan', loc: [55.229049, 50.898795] },
  { name: 'ufa city', loc: [54.798129, 56.040179] },
  { name: 'ufa forest', loc: [54.791566, 55.992392] }
];

const [lon, lat] = locations[1].loc;

async function main() {
  const resp = await geoDecoder(lon, lat, key);
  console.log(resp.data.results[1].formatted_address);
}

main();
