let wasm;
let wasmReady = null;

if (typeof window === "undefined") {
    wasm = await import("../pkg-node/mit_map_plugin.js");
    wasmReady = Promise.resolve(wasm);
} else {
    wasmReady = import("../pkg-web/mit_map_plugin.js").then((module) => {
        wasm = module;
        return wasm;
    });
}

async function ensureWasmInitialized() {
    if (!wasmReady) {
        throw new Error("WASM module initialization failed.");
    }
    await wasmReady;
}

export async function init(token) {
    await ensureWasmInitialized();
    wasm.init(token);
}

export async function search_address_by_name(name) {
    await ensureWasmInitialized();
    return await wasm.search_address_by_name(name);
}

export async function search_address_by_coord(lat, lon) {
    await ensureWasmInitialized();
    return await wasm.search_address_by_coord(lat, lon);
}

export async function map_route(start, start_lat, start_lon, dest, dest_lat, dest_lon) {
    await ensureWasmInitialized();
    return await wasm.map_route({ start, start_lat, start_lon, dest, dest_lat, dest_lon });
}
