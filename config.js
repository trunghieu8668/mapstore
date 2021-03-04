import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const API = process.env.API_URL ? process.env.API_URL : 'https://admin-api.mapstore.vn'

export const APIKEY = process.env.APIKEY ? process.env.APIKEY : 'MQk1lSVNfFMmge8up5rzUZuMJwMraJvY'
export const PAGESIZE = process.env.PAGESIZE && process.env.PAGESIZE <= 12 ? process.env.PAGESIZE : 12
export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.DOMAIN_PRODUCTION
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
