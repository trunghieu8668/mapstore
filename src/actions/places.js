import Fetch from 'isomorphic-fetch';
import { API, APIKEY, PAGESIZE } from '../../config';

import { fakeDataPlaces } from '../fakeapi/places'
const token = "MQk1lSVNfFMmge8up5rzUZuMJwMraJvY"

export const listPlacesByCategoryId = slug => {
  return Fetch(`${API}/public/places?categoryId=${slug}&cityId=thanh_pho_ho_chi_minh&districtId=0&pageIndex=0&pageSize=${PAGESIZE}`, {
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


// export const singlePlace = slug => {
//   return Fetch(`${API}/public/places/${slug}`, {
//     method: 'GET',
//     headers: {
//       apikey: "MQk1lSVNfFMmge8up5rzUZuMJwMraJvY"
//     },
//   })
//   .then(response => {
//     return dataSingle;
//   })
//   .catch(err => console.log(err));
// };
export const singlePlace = slug => {
  return Fetch(`${API}/public/places/${slug}`, {
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

export const listRelated = slug => {
  // return Fetch(`http://newsapi.org/v2/everything?domains=vnexpress.net&apiKey=56ef72535e5844398cd20d0eb90dc549&i=${slug}`, {
  //   method: 'GET'
  // })
  // .then(response => {
    return fakeDataPlaces;
  // })
  // .catch(err => console.log(err));
};
