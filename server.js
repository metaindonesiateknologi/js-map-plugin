// const fetch = require("node-fetch");
const {
  search_address_by_name,
  search_address_by_coord,
  map_route,
} = require("./src/server/mitmap_node_plugin.js");

/**
 * Framework-agnostic proxy handler
 * @param {Object} options - The options for the proxy.
 * @param {string} options.url - The URL to proxy to.
 * @returns {Promise<Object>} The proxied response.
 */
async function proxyHandler(req) {
  let act = req.query.act;

  if (act == "search_byname") {
    let body = await search_byname(req);
    return {
      status: 200,
      body: body,
    };
  } else if (act == "search_bycoord") {
    let body = await search_bycoord(req);
    return {
      status: 200,
      body: body,
    };
  } else if (act == "map_route") {
    let body = await search_route(req);
    return {
      status: 200,
      body: body,
    };
  }

  return {
    status: 200,
    body: "Empty.",
  };
}

async function search_byname(req) {
  try {
    let token = req.query.token;
    let text = req.query.text;
    let url = req.headers.host || "";

    let r = await search_address_by_name(text, url, token);
    return r;
  } catch (e) {
    return "[]";
  }
}

async function search_bycoord(req) {
  try {
    let token = req.query.token;
    let lat = req.query.lat;
    let lon = req.query.lon;
    let url = req.headers.host || "";

    let r = await search_address_by_coord(lat, lon, url, token);
    return r;
  } catch (e) {
    return "[]";
  }
}

async function search_route(req) {
  try {
    let start = req.query.start;
    let start_lat = req.query.start_lat;
    let start_lon = req.query.start_lon;
    let dest = req.query.dest;
    let dest_lat = req.query.dest_lat;
    let dest_lon = req.query.dest_lon;
    let token = req.query.token;
    let url = req.headers.host || "";

    let r = await map_route(
      start,
      start_lat,
      start_lon,
      dest,
      dest_lat,
      dest_lon,
      token,
      url,
    );
    return r;
  } catch (e) {
    return "[]";
  }
}

module.exports = {
  proxyHandler,
};
