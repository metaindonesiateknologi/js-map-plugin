/* tslint:disable */
/* eslint-disable */
export function search_address_by_name(text: string, appid: string, token: string): Promise<any>;
export function translate_byname_fn(body: string): string;
export function search_address_by_coord(lat_str: string, lon_str: string, appid: string, token_str: string): Promise<any>;
export function translate_bycoord_fn(body: string): string;
export function map_route(start: string, start_lat: string, start_lon: string, dest: string, dest_lat: string, dest_lon: string, appid: string, token: string): Promise<any>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly search_address_by_name: (a: number, b: number, c: number, d: number, e: number, f: number) => any;
  readonly translate_byname_fn: (a: number, b: number) => [number, number];
  readonly search_address_by_coord: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => any;
  readonly translate_bycoord_fn: (a: number, b: number) => [number, number];
  readonly map_route: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number) => any;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_5: WebAssembly.Table;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly closure209_externref_shim: (a: number, b: number, c: any) => void;
  readonly closure232_externref_shim: (a: number, b: number, c: any, d: any) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
