let wasm;
let wasmReady = null; // Promise to track WASM initialization

if (typeof window === "undefined") {
    // Node.js environment
    wasm = require("../pkg-node/mit_map_plugin");
    wasmReady = Promise.resolve(wasm); // Node.js module is already loaded
} else {
    // Web environment
    wasmReady = import("../pkg-web/mit_map_plugin.js").then((module) => {
        wasm = module;
        return wasm;
    });
}

// Ensure WASM is initialized before any function is called
async function ensureWasmInitialized() {
    if (!wasmReady) {
        throw new Error("WASM module initialization failed.");
    }
    await wasmReady;
}

// Initialize the WASM module
async function init(token) {
    await ensureWasmInitialized();
    if (!wasm?.init) {
        throw new Error("WASM module does not expose an init function.");
    }
    wasm.init(token);
}

// Initialize the WASM module
async function get_host() {
    await ensureWasmInitialized();
    if (!wasm?.get_host) {
        throw new Error("WASM module does not expose an get_host function.");
    }
    try {
        return await wasm.get_host();   
    } catch (error) {
        return "";
    }
}

// Search address by name
async function search_address_by_name(name) {
    await ensureWasmInitialized();
    if (!wasm?.search_address_by_name) {
        throw new Error("WASM module does not expose a search_address_by_name function.");
    }
    try {
        return await wasm.search_address_by_name(name);    
    } catch (error) {
        return "";
    }
}

// Search address by coordinates
async function search_address_by_coord(lat, lon) {
    await ensureWasmInitialized();
    if (!wasm?.search_address_by_coord) {
        throw new Error("WASM module does not expose a search_address_by_coord function.");
    }
    try {
        return await wasm.search_address_by_coord(lat, lon);   
    } catch (error) {
        return [];
    }
}

// Map route between two points
async function map_route(start, start_lat, start_lon, dest, dest_lat, dest_lon) {
    await ensureWasmInitialized();
    if (!wasm?.map_route) {
        throw new Error("WASM module does not expose a map_route function.");
    }
    try {
        return await wasm.map_route({ start, start_lat, start_lon, dest, dest_lat, dest_lon });   
    } catch (error) {
        return [];
    }
}

// Export functions for CommonJS
module.exports = {
    init,
    get_host,
    search_address_by_name,
    search_address_by_coord,
    map_route,
};
