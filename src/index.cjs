const fs = require('fs');
const path = require('path');

/**
 * Load the WASM file and instantiate it.
 */
async function mitmap() {
  const wasmPath = path.join(__dirname, '../mitmap.wasm');
  const buffer = fs.readFileSync(wasmPath);

  const module = await WebAssembly.compile(buffer);
  const imports = {};
  const instance = new WebAssembly.Instance(module, imports);

  return instance.exports;
}

module.exports = {
  loadWasm,
};
