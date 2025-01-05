export async function browserLoad() {
    // If you put `myModule.wasm` in the same folder as your final bundle or host it at some URL:
    // Adjust the path or URL as needed
    const response = await fetch('../mitmap.wasm');
    const bytes = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {});
    return instance.exports;
}