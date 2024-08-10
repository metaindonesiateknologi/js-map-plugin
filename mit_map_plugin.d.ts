/* tslint:disable */
/* eslint-disable */
/**
* @param {string} text
* @param {string} lat
* @param {string} lon
* @param {string} appid
* @param {string} token
* @returns {Promise<any>}
*/
export function search_address_by_name(text: string, lat: string, lon: string, appid: string, token: string): Promise<any>;
/**
* @param {string} lat_str
* @param {string} lon_str
* @param {string} appid_str
* @param {string} token_str
* @returns {Promise<any>}
*/
export function search_address_by_coord(lat_str: string, lon_str: string, appid_str: string, token_str: string): Promise<any>;
/**
* @param {string} start
* @param {string} start_lat
* @param {string} start_lon
* @param {string} dest
* @param {string} dest_lat
* @param {string} dest_lon
* @param {string} appid
* @param {string} token
* @returns {Promise<any>}
*/
export function map_route(start: string, start_lat: string, start_lon: string, dest: string, dest_lat: string, dest_lon: string, appid: string, token: string): Promise<any>;
