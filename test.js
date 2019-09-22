const dotenv = require('dotenv');
const geoDecoder = require('./src');

dotenv.config();

const key = process.env.GGKEY;

if (!key) throw new Error('Google map key doesn\'t found.');

const locations = [
  { name: 'nizhnekamsk', loc: [55.635270, 51.808362] },
  // { name: 'kazan', loc: [55.819027, 49.050113] },
  // { name: 'road tatarstan', loc: [55.664437, 49.854521] },
  // { name: 'road tatarstan', loc: [55.229049, 50.898795] },
  // { name: 'ufa city', loc: [54.798129, 56.040179] },
  // { name: 'ufa forest', loc: [54.791566, 55.992392] },
  // { name: 'Norilsk city', loc: [69.355930, 88.187606] },
  // { name: 'Norilsk road', loc: [69.348066, 88.033996] },
  // { name: 'Arkhangelsk', loc: [64.537432, 40.576690] },
  // { name: 'Volgograd city', loc: [48.720049, 44.538024] },
];

async function main() {
  const respBunch = locations.map(el => {
    const [lon, lat] = el.loc;
    return geoDecoder(lon, lat, key);
  });
  const result = await Promise.all(respBunch);
  console.log(result);
}

main();
