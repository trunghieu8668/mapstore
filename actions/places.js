import Fetch from 'isomorphic-fetch';
import { API } from '../config';

const fakeDataPlaces = {
  "status":0,
  "name": "Tên địa điểm",
  "description": "Thông tin mô tả địa điểm",
  "data":{
     "data":[
        {
           "_id":"5fcef646b919b10011335f99",
           "name":" Công ty TNHH Kinh Doanh Thương Mại Trương Nguyễn",
           "address":"138D Đường số 8 Phường Bình Hưng Hoà A Quận Bình Tân Thành phố Hồ Chí Minh",
           "categories":"Cửa hàng nước suối",
           "phones":"02866562701",
           "description":null,
           "email":null,
           "faxNumber":null,
           "taxCode":null,
           "website":null,
           "facebook":null,
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-08T03:43:02.361Z"
        },
        {
           "_id":"5fcef4bfb919b10011335f98",
           "name":"Công ty Cổ phần nước Hoàng Minh",
           "address":"64 Phổ Quang Phường 2 Quận Tân Bình Thành phố Hồ Chí Minh",
           "categories":"Cửa hàng nước suối",
           "phones":"02839979899",
           "description":null,
           "email":null,
           "faxNumber":null,
           "taxCode":null,
           "website":null,
           "facebook":null,
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-08T03:36:31.751Z"
        },
        {
           "_id":"5fceeeaab919b10011335f96",
           "name":"Công ty TNHH TM DV Suối Việt",
           "address":"36 Đường số 41 Phường Tân Phong Quận 7 Thành phố Hồ Chí Minh",
           "categories":"Cửa hàng nước suối",
           "phones":"0908115511",
           "description":null,
           "email":null,
           "faxNumber":null,
           "taxCode":null,
           "website":null,
           "facebook":null,
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-08T03:10:34.668Z"
        },
        {
           "_id":"5fcef834b919b10011335f9a",
           "name":"Công ty TNHH Thương Mại Dịch Vụ Thủy Lam",
           "address":"E17 đường D6 khu tái định cư Phú Mỹ,  Phường Phú Mỹ Quận 7 Thành phố Hồ Chí Minh",
           "categories":"Cửa hàng nước suối",
           "phones":"02873066990",
           "description":null,
           "email":null,
           "faxNumber":null,
           "taxCode":null,
           "website":null,
           "facebook":null,
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-08T03:51:16.482Z"
        },
        {
           "_id":"5fcef406b919b10011335f97",
           "name":"Công ty TNHH Thương Mại Hoàng Trần",
           "address":"25 Mê Linh Phường 25 Quận Bình Thạnh Thành phố Hồ Chí Minh",
           "categories":"Cửa hàng nước suối",
           "phones":"02838400000",
           "description":null,
           "email":null,
           "faxNumber":null,
           "taxCode":null,
           "website":null,
           "facebook":null,
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-08T03:33:26.497Z"
        },
        {
           "_id":"5fc6e14db919b10011335f94",
           "name":"Công ty TNHH iWater",
           "address":"48 Nguyễn Thị Huỳnh Phường 11 Quận Phú Nhuận Thành phố Hồ Chí Minh",
           "categories":"Cửa hàng nước suối",
           "phones":"02873099799",
           "description":null,
           "email":null,
           "faxNumber":null,
           "taxCode":null,
           "website":null,
           "facebook":null,
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-02T00:35:25.237Z"
        },
        {
           "_id":"5fd4e084c9d9bf00103747af",
           "name":"Nhà Thờ Giáo Xứ Bình An",
           "address":"2287 Phạm Thế Hiển Phường 6 Quận 8 Thành phố Hồ Chí Minh",
           "categories":"Nhờ thờ - Giáo xứ",
           "phones":"02838501047",
           "description":null,
           "email":null,
           "faxNumber":null,
           "taxCode":null,
           "website":null,
           "facebook":null,
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-12T15:23:48.392Z"
        },
        {
           "_id":"5fe32b15606a91001145d7a1",
           "name":"Nhà thờ giao xứ An Phú",
           "address":"205/45 Trần Văn Đang Phường 11 Quận 3 Thành phố Hồ Chí Minh",
           "categories":"Nhờ thờ - Giáo xứ",
           "phones":"",
           "description":null,
           "email":"",
           "faxNumber":"",
           "taxCode":"",
           "website":"",
           "facebook":"",
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-23T11:33:41.356Z"
        },
        {
           "_id":"5fde1b6f56f0a40010825e8e",
           "name":"Nhà thờ giao xứ Ba Thôn",
           "address":"5/6 Hà Huy Giáp Phường Thạnh Lộc Quận 12 Thành phố Hồ Chí Minh",
           "categories":"Nhờ thờ - Giáo xứ",
           "phones":"",
           "description":null,
           "email":"",
           "faxNumber":"",
           "taxCode":"",
           "website":"",
           "facebook":"",
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-19T15:25:35.266Z"
        },
        {
           "_id":"5fde1ae456f0a40010825e8c",
           "name":"Nhà thờ giao xứ Bà Điểm",
           "address":"10/8 Ấp Trung Lân Xã Bà Điểm Huyện Hóc Môn Thành phố Hồ Chí Minh",
           "categories":"Nhà thờ - Giáo xứ",
           "phones":"",
           "description":null,
           "email":"",
           "faxNumber":"",
           "taxCode":"",
           "website":"",
           "facebook":"",
           "createdBy":"nam@iwater.vn",
           "lastUpdatedBy":"nam@iwater.vn",
           "createdDate":"2020-12-19T15:23:16.858Z"
        }
     ],
     "total":443
  }
}

export const listPlaces = slug => {
  return Fetch(`http://newsapi.org/v2/everything?domains=vnexpress.net&apiKey=56ef72535e5844398cd20d0eb90dc549&i=${slug}`, {
    method: 'GET'
  })
  .then(response => {
    return fakeDataPlaces;
  })
  .catch(err => console.log(err));
};


const dataSingle = {
  "status":0,
  "data":{
     "_id":"5fcef646b919b10011335f99",
     "name":" Công ty TNHH Kinh Doanh Thương Mại Trương Nguyễn",
     "description":null,
     "phones":[
        "02866562701"
     ],
     "city":{
        "id":"thanh_pho_ho_chi_minh",
        "name":"Thành phố Hồ Chí Minh"
     },
     "district":{
        "id":"thanh_pho_ho_chi_minh_quan_binh_tan",
        "name":"Quận Bình Tân"
     },
     "ward":{
        "id":"thanh_pho_ho_chi_minh_quan_binh_tan_phuong_binh_hung_hoa_a",
        "name":"Phường Bình Hưng Hoà A"
     },
     "street":{
        "id":"5fbf2b3887814e732a2121e2",
        "name":"Đường số 8"
     },
     "address":"138D",
     "categories":[
        {
           "label":"Cửa hàng nước suối",
           "value":"cua_hang_nuoc_suoi"
        }
     ],
     "email":null,
     "faxNumber":null,
     "taxCode":null,
     "website":null,
     "facebook":null,
     "createdBy":"nam@iwater.vn",
     "lastUpdatedBy":"nam@iwater.vn",
     "createdDate":"2020-12-08T03:43:02.361Z",
     "lastUpdated":"2020-12-08T03:43:02.361Z",
     "cityId":"thanh_pho_ho_chi_minh",
     "cityName":"Thành phố Hồ Chí Minh",
     "districtId":"thanh_pho_ho_chi_minh_quan_binh_tan",
     "districtName":"Quận Bình Tân",
     "lastUpdate":"2020-12-08T05:36:22.425Z",
     "streetId":"5fbf2b3887814e732a2121e2",
     "streetName":"Đường số 8",
     "updatedBy":"nam@iwater.vn",
     "wardId":"thanh_pho_ho_chi_minh_quan_binh_tan_phuong_binh_hung_hoa_a",
     "wardName":"Phường Bình Hưng Hoà A"
  }
}
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
  return Fetch(`http://newsapi.org/v2/everything?domains=vnexpress.net&apiKey=56ef72535e5844398cd20d0eb90dc549&i=${slug}`, {
    method: 'GET'
  })
  .then(response => {
    return fakeDataPlaces;
  })
  .catch(err => console.log(err));
};