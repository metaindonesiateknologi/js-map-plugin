# MIT Geocode/Reverse-Geocode JS Plugin

MIT Geocode/Reverse-Geocode plugin for JS.

## Installation

To use this package in other Node.js projects, you can install it directly from the Git repository:

```sh
npm install git+https://github.com/metaindonesiateknologi/js-map-plugin.git
```

Then, import and use the package as you would with any other Node.js module:

```sh
const wasm = require('js-map-plugin');

// init the plugin
await wasm.init('your-registered-active-token');

// searching address and the coordinates from string
const address_location = await wasm.search_address_by_name("tugu jogja");
console.log(address_location);

// searching for address from coordinates
const address_name = await wasm.search_address_by_coord("-6.3125659999999995", "106.8620154");
console.log(address_name);
```
