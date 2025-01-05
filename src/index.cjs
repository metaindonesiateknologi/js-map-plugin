const fs = require('fs');
const path = require('path');

/**
 * Load the WASM file and instantiate it.
 */
async function mitmap() {
    const isBrowser = typeof window !== 'undefined' && typeof process === 'undefined';

    if (isBrowser) {
      // Browser environment
      return await browserLoad();
    } else {
      // Node environment
      return await nodeLoad();
    }
}

async function nodeLoad() {
    const wasmPath = path.join(__dirname, '../mitmap.wasm');
    const buffer = fs.readFileSync(wasmPath);
  
    const module = await WebAssembly.compile(buffer);
    const imports = {};
    const instance = new WebAssembly.Instance(module, imports);
  
    return instance.exports;
}

async function browserLoad() {
    // If you put `myModule.wasm` in the same folder as your final bundle or host it at some URL:
    // Adjust the path or URL as needed
    const response = await fetch('../mitmap.wasm');
    const bytes = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {});
    return instance.exports;
}

module.exports = {
    mitmap,
};
