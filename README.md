# MIT Geocode/Reverse-Geocode JS Plugin

MIT Geocode/Reverse-Geocode plugin for JS.

## Installation

To use this package in other Node.js projects, you can install it directly from the Git repository:

```sh
npm install git+https://github.com/metaindonesiateknologi/js-map-plugin.git
```

Then, import and use the package as you would with any other Node.js module.

in your server side:
```sh
...
const { proxyHandler } = require("mit_map_plugin");

...
// this is for read wasm file in browser
app.use(
  "/mit_map_plugin",
  express.static(path.join(__dirname, "node_modules/mit_map_plugin"), {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith(".wasm")) {
        res.setHeader("Content-Type", "application/wasm");
      }
    },
  }),
);

...
// you can change the name of this route, in this example we use '/proxy'
app.get("/proxy", async (req, res) => {
  try {
    const response = await proxyHandler(req);
    res.send(response.body);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
...

```

in your client side:
```sh

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= title %></title>
</head>
<body>
    <h1><%= message %></h1>

    <h1>Wasm Example</h1>
    <p id="list-address">Loading...</p>
    <p id="address">Loading...</p>

    <script type="module">
        import { init, search_location, search_address } from '/mit_map_plugin/browser.js';

        (async () => {
            await init('your-registered-token','proxy'); // proxy is route name in server side, you can change it

            const listaddress = await search_location("tugu jogja");
            document.getElementById('list-address').textContent = `List Address: ${listaddress}`;

            const address = await search_address("-6.3125659999999995", "106.8620154");
            document.getElementById('address').textContent = `Address Name: ${address}`;

        })();
    </script>
</body>
</html>

```
