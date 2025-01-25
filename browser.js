import initWasm, {
  set_token,
  search_address_by_name,
  search_address_by_coord,
  map_route,
} from "./src/mit_map_plugin.js";

let token = "";
let proxy = "";

export function get_host() {
  try {
    return window.location.hostname;
  } catch (error) {
    return "";
  }
}

export async function init(token_str, proxy_str) {
  try {
    await initWasm();
    token = token_str;
    proxy = proxy_str;
  } catch (error) {
    console.log("error" + error);
  }
}

export async function search_location(text) {
  try {
    const data = await search_address_by_name(text, "", token, proxy);
    return data;
  } catch (error) {
    return [];
  }
}

export async function search_address(lat, lon) {
  try {
    const data = await search_address_by_coord(lat, lon, "", token, proxy);
    return data;
  } catch (error) {
    return "";
  }
}

export async function get_route(
  start,
  start_lat,
  start_lon,
  dest,
  dest_lat,
  dest_lon,
) {
  try {
    const data = await map_route(
      start,
      start_lat,
      start_lon,
      dest,
      dest_lat,
      dest_lon,
      "",
      token,
    );
    return data;
  } catch (error) {
    return [];
  }
}
