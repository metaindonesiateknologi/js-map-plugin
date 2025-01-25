const fetch = require("node-fetch");

/**
 * Framework-agnostic proxy handler
 * @param {Object} options - The options for the proxy.
 * @param {string} options.url - The URL to proxy to.
 * @returns {Promise<Object>} The proxied response.
 */
async function proxyHandler(url) {
  const { url } = body;

  if (!url) {
    throw new Error("Missing 'url' in the request body.");
  }

  try {
    // Fetch the resource from the target URL
    const response = await fetch(url);

    // Return the response as a JSON-like object
    return {
      status: response.status,
      headers: response.headers.raw(),
      body: await response.buffer(), // Return raw binary data
    };
  } catch (error) {
    console.error("Error in proxying request:", error);
    throw new Error("Error proxying request.");
  }
}

module.exports = {
  proxyHandler,
};
