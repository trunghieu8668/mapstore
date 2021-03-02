import Fetch from 'isomorphic-fetch';
import { API } from '../../config';

import { fakeDataPlaces } from '../fakeapi/places'
import { dataSingle } from '../fakeapi/place-detail'

export const listPlaces = slug => {
  return Fetch(`http://newsapi.org/v2/everything?domains=vnexpress.net&apiKey=56ef72535e5844398cd20d0eb90dc549&i=${slug}`, {
    method: 'GET'
  })
  .then(response => {
    return fakeDataPlaces;
  })
  .catch(err => console.log(err));
};



export const singlePlace = slug => {
  return Fetch(`http://newsapi.org/v2/everything?domains=vnexpress.net&apiKey=56ef72535e5844398cd20d0eb90dc549&i=${slug}`, {
    method: 'GET'
  })
  .then(response => {
    return dataSingle;
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