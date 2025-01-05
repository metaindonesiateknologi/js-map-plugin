// loader.js (ESM)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function nodeLoad() {
  const wasmPath = path.join(__dirname, '../mitmap.wasm');
  const buffer = fs.readFileSync(wasmPath);

  const module = await WebAssembly.compile(buffer);
  const imports = {};
  const instance = new WebAssembly.Instance(module, imports);
  return instance.exports;
}