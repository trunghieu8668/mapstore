import Fetch from 'isomorphic-unfetch';
import { API, APIKEY, PAGESIZE } from '../../config';

export const listPlacesByCategoryId = async (slug, page) => {
  return await Fetch(`${API}/public/places?categoryId=${slug}&cityId=0&districtId=0&pageIndex=${page !== undefined ? page : 0}&pageSize=${PAGESIZE}`, {
    method: 'GET',
    headers: {
      "apikey": `${APIKEY}`
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err));
};
export const listSearchPlaces = (slug, page) => {
  return Fetch(`${API}/public/places?categoryId=0&cityId=0&districtId=0&pageIndex=${page !== undefined ? page : 0}&search=${slug}&pageSize=${PAGESIZE}`, {
    method: 'GET',
    headers: {
      "apikey": `${APIKEY}`
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err));
};
export const listAllGroupCategory = () => {
  return Fetch(`${API}/public/category-group`, {
    method: 'GET',
    headers: {
      "apikey": `${APIKEY}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};


export const singlePlace = slug => {
  const slugCheck = slug.toLowerCase().indexOf('-');
  const slugNew = slugCheck && slugCheck > 0 ? `${API}/public/places/slug/${slug}` : `${API}/public/places/${slug}`
  return Fetch(`${slugNew}`, {
    method: 'GET',
    headers: {
      "apikey": `${APIKEY}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const listRelated = (slug) => {
  return Fetch(`${API}/public/places?categoryId=${slug}&cityId=0&districtId=0&pageIndex=0&pageSize=${PAGESIZE}`, {
    method: 'GET',
    headers: {
      "apikey": `${APIKEY}`
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err));
};
// Sitemap
export const sitemapGenerator = async () => {
  // return await Fetch(`${API}/public/places?categoryId=0&cityId=thanh_pho_ho_chi_minh&districtId=0&pageIndex=0&pageSize=${(PAGESIZE !== undefined || PAGESIZE !== null) ? (PAGESIZE <= 300 ? PAGESIZE : 300) : 10}`, {
  return await Fetch(`${API}/public/places?categoryId=0&cityId=thanh_pho_ho_chi_minh&districtId=0&pageIndex=0&pageSize=9500`, {
    method: 'GET',
    headers: {
      "apikey": `${APIKEY}`
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err));
};