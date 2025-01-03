/* tslint:disable */
/* eslint-disable */
export function get_host(): string;
export function search_address_by_name(text: string, lat: string, lon: string, appid: string, token: string): Promise<any>;
export function search_address_by_coord(lat_str: string, lon_str: string, appid: string, token_str: string): Promise<any>;
export function map_route(start: string, start_lat: string, start_lon: string, dest: string, dest_lat: string, dest_lon: string, appid: string, token: string): Promise<any>;
