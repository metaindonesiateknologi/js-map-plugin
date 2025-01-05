export async function mitmap() {
    return await browserLoad();
}

async function browserLoad() {
    const response = await fetch('../mitmap.wasm');
    const bytes = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, {});
    return instance.exports;
}