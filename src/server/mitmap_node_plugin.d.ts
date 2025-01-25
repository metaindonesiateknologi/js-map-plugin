/* tslint:disable */
/* eslint-disable */
export function search_address_by_name(text: string, appid: string, token: string): Promise<any>;
export function translate_byname_fn(body: string): string;
export function search_address_by_coord(lat_str: string, lon_str: string, appid: string, token_str: string): Promise<any>;
export function translate_bycoord_fn(body: string): string;
export function map_route(start: string, start_lat: string, start_lon: string, dest: string, dest_lat: string, dest_lon: string, appid: string, token: string): Promise<any>;
export function translate_route_fn(body: string): string;
