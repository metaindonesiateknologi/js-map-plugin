import initWasm, { set_token, search_address_by_name, translate_byname_fn, search_address_by_coord, translate_bycoord_fn } from './src/mit_map_plugin.js';

export async function init(token) {
    try {
        await initWasm();
        set_token(token);    
    } catch (error) {
        console.log('error'+error);
    }
}

export async function search_location(text) {
    try {
        const url = await search_address_by_name(text);
        const response = await fetch(url, {
            method: 'GET',
            referrerPolicy: 'no-referrer',
            mode: 'no-cors'
        });
        const data = await response.text();
        const listaddress = translate_byname_fn(data);    
        return listaddress;
    } catch (error) {
        return [];
    }
}

export async function search_address(lat, lon) {
    try {
        
        const url = await search_address_by_coord(lat, lon);
        const response = await fetch(url, {
            method: 'GET',
            referrerPolicy: 'no-referrer',
            mode: 'no-cors'
        });
        const data = await response.text();
        const listaddress = translate_bycoord_fn(data);
        return listaddress;
    } catch (error) {
        return "";
    }
}

export async function get_route(start, start_lat, start_lon, dest, dest_lat, dest_lon) {
    try {
        const url = map_route(start, start_lat, start_lon, dest, dest_lat, dest_lon);
        const response = await fetch(url, {
            method: 'POST',
            referrerPolicy: 'no-referrer',
            mode: 'no-cors'
        });
        const data = await response.text();
        const listaddress = translate_bycoord_fn(data);
        return listaddress;
    } catch (error) {
        return [];
    }
}