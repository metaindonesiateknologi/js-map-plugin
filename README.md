# MIT Geocode/Reverse-Geocode JS Plugin

MIT Geocode/Reverse-Geocode plugin for JS.

## Installation

To use this package in other Node.js projects, you can install it directly from the Git repository:

```sh
npm install git+https://github.com/metaindonesiateknologi/js-map-plugin.git
```

Then, import and use the package as you would with any other Node.js module.
Example for nodejs apps:

```sh

// Import the plugin
const mitMapPlugin = require("mit_map_plugin");

(async () => {
    // Initialize the WASM module
    mitMapPlugin.init('your-registered-active-token');

    // searching address and the coordinates from string
    const address_location = await mitMapPlugin.search_address_by_name("tugu jogja");
    console.log(address_location);

    // searching for address from coordinates
    const address_name = await mitMapPlugin.search_address_by_coord("-6.3125659999999995", "106.8620154");
    console.log(address_name);
})();

```

Example for reactjs:

```sh

import React, { useEffect, useState } from "react";
import { init, search_address_by_name, search_address_by_coord } from "mit_map_plugin";

const App = () => {
    const [initialized, setInitialized] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            await init('your-registered-active-token');
            setInitialized(true);

            const coordResult = await search_address_by_coord(40.7128, -74.0060);
            console.log("Search by Coordinates:", coordResult);
        })();
    }, []);

    const get_address = async (search) => {
        const result = await search_address_by_name(search);
        setData(result);
    };

    return (
        <div>
            <h1>Search Address</h1>
            {!initialized ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <button onClick={() => getAddress('monas')}>Get Address</button>
                    {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
                </div>
            )}
        </div>
    );
};

export default App;

```