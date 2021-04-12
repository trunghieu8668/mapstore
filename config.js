import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
//export const APP_NAME = publicRuntimeConfig.APP_NAME;
// process.env.APP_NAME;
// publicRuntimeConfig.APP_NAME ? publicRuntimeConfig.APP_NAME : process.env.APP_NAME;


// export const DOMAIN = publicRuntimeConfig.PRODUCTION
//   ? publicRuntimeConfig.DOMAIN_PRODUCTION
//   : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

// export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;


export const APP_NAME = process.env.APP_NAME;

export const PLACES_URL = process.env.PLACES_URL ? process.env.PLACES_URL : 'nhom-dia-diem';
export const API = process.env.API_URL ? process.env.API_URL : 'https://admin-api.mapstore.vn';
export const APIKEY = process.env.APIKEY ? process.env.APIKEY : 'MQk1lSVNfFMmge8up5rzUZuMJwMraJvY';
export const PAGESIZE = process.env.PAGESIZE && process.env.PAGESIZE <= 10 ? process.env.PAGESIZE : 10;
export const sizePerPageList = [10, 15, 20]
