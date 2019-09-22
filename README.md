# Simple google geo decoder.
  Just helper for google geo decoder.
  It gets coordinate and returns address object.

## Installation

$ npm install google-geo-decoder

## Getting started

```
const decoder = require('google-geo-decoder');

const [lon, lat] = [55.635270, 51.808362];
const key = process.env.GGKEY; // You google API key.
const res = geoDecoder(lon, lat, key));

returns: 
  {
    postalCode: '420033',
    country: 'Russia',
    lev1: 'Respublika Tatarstan',
    lev2: "Gorod Kazan'",
    lev3: 'Kirovskiy',
    route: "Ulitsa Muzykal'naya",
    streetNumber: '49',
  }
```