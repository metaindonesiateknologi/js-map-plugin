const fetch = require("node-fetch");

/**
 * Framework-agnostic proxy handler
 * @param {Object} options - The options for the proxy.
 * @param {string} options.url - The URL to proxy to.
 * @returns {Promise<Object>} The proxied response.
 */
async function proxyHandler(body) {
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
      body: await response.text(),
    };
  } catch (error) {
    console.error("Error in proxying request:", error);
    throw new Error("Error proxying request.");
  }
}

module.exports = {
  proxyHandler,
};
