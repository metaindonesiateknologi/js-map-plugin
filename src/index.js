import wasmModule from "../pkg-node/mit_map_plugin";
import wasmModuleWeb from "../pkg-web/mit_map_plugin";

const wasm = typeof window !== "undefined" ? wasmModuleWeb : wasmModule;

export async function init(token) {
    if (wasm?.init) {
        await wasm.init(token);
    }
}

export function search_address_by_name(lat, lon) {
    return wasm?.search_address_by_name({ lat, lon });
}

export function search_address_by_coord(lat, lon) {
    return wasm?.search_address_by_coord({ lat, lon });
}

export function map_route(start, start_lat, start_lon, dest, dest_lat, dest_lon) {
    return wasm?.map_route({ start, start_lat, start_lon, dest, dest_lat, dest_lon });
}
