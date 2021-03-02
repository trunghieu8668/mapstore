import React from 'react';
import Link from 'next/link'
import slugify from 'slugify'

const data = {
  "status":0,
  "data":{
     "data":[
        {
           "_id":"thanh_pho_ho_chi_minh_huyen_binh_chanh",
           "name":"Huyện Bình Chánh",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7495442,106.4392443,11z",
           "latitude":"10.7495442",
           "longitude":"106.4392443"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_huyen_can_gio",
           "name":"Huyện Cần Giờ",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.5227953,106.733656,11z",
           "latitude":"10.5227953",
           "longitude":"106.733656"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_huyen_cu_chi",
           "name":"Huyện Củ Chi",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"11.0374828,106.3663773,11z",
           "latitude":"11.0374828",
           "longitude":"106.3663773"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_huyen_hoc_mon",
           "name":"Huyện Hóc Môn",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.8776738,106.4537498,11z",
           "latitude":"10.8776738",
           "longitude":"106.4537498"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_huyen_nha_be",
           "name":"Huyện Nhà Bè",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.6508567,106.6582895,12z",
           "latitude":"10.6508567",
           "longitude":"106.6582895"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_1",
           "name":"Quận 1",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7751766,106.6808529,14z",
           "latitude":"10.7751766",
           "longitude":"106.6808529"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_10",
           "name":"Quận 10",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7727175,106.6519183,14z",
           "latitude":"10.7727175",
           "longitude":"106.6519183"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_11",
           "name":"Quận 11",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7659451,106.6303599,14z",
           "latitude":"10.7659451",
           "longitude":"106.6303599"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_12",
           "name":"Quận 12",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.8613915,106.5906574,12z",
           "latitude":"10.8613915",
           "longitude":"106.5906574"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_2",
           "name":"Quận 2",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7801791,106.6887929,12z",
           "latitude":"10.7801791",
           "longitude":"106.6887929"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_3",
           "name":"Quận 3",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7792475,106.6636145,14z",
           "latitude":"10.7792475",
           "longitude":"106.6636145"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_4",
           "name":"Quận 4",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.760749,106.6866574,14z",
           "latitude":"10.760749",
           "longitude":"106.6866574"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_5",
           "name":"Quận 5",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7558395,106.6512829,14z",
           "latitude":"10.7558395",
           "longitude":"106.6512829"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_6",
           "name":"Quận 6",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.74547,106.6205679,14z",
           "latitude":"10.74547",
           "longitude":"106.6205679"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_7",
           "name":"Quận 7",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7375815,106.6933228,13z",
           "latitude":"10.7375815",
           "longitude":"106.6933228"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_8",
           "name":"Quận 8",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7228752,106.5753363,12z",
           "latitude":"10.7228752",
           "longitude":"106.5753363"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_9",
           "name":"Quận 9",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.8295542,106.7487349,12z",
           "latitude":"10.8295542",
           "longitude":"106.7487349"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_binh_thanh",
           "name":"Quận Bình Thạnh",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.8118806,106.6792166,13z",
           "latitude":"10.8118806",
           "longitude":"106.6792166"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_binh_tan",
           "name":"Quận Bình Tân",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7693181,106.5567225,13z",
           "latitude":"10.7693181",
           "longitude":"106.5567225"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_go_vap",
           "name":"Quận Gò Vấp",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.8354041,106.6314734,13z",
           "latitude":"10.8354041",
           "longitude":"106.6314734"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_phu_nhuan",
           "name":"Quận Phú Nhuận",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.8008665,106.661984,14z",
           "latitude":"10.8008665",
           "longitude":"106.661984"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_thu_duc",
           "name":"Quận Thủ Đức",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.8546025,106.683124,12z",
           "latitude":"10.8546025",
           "longitude":"106.683124"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_tan_binh",
           "name":"Quận Tân Bình",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.8035455,106.6182534,13z",
           "latitude":"10.8035455",
           "longitude":"106.6182534"
        },
        {
           "_id":"thanh_pho_ho_chi_minh_quan_tan_phu",
           "name":"Quận Tân Phú",
           "cityId":"thanh_pho_ho_chi_minh",
           "cityName":"Thành phố Hồ Chí Minh",
           "googleCoordinate":"10.7914555,106.5923849,13z",
           "latitude":"10.7914555",
           "longitude":"106.5923849"
        }
     ],
     "total":24
  }
}
const ListByCity = () => {
  return (
    <div clasName="aside-box">
      <h2 className="asideBox-header h5">Doanh nghiệp tại Tp.HCM</h2>
      <div className="asideBox-body">
        <ul className="flex-column nav">
          {data.data.data.map((e, i) => (
            <li className="nav-item" key={i}>              
              <Link href={`/ho-chi-minh/${slugify(e.name, {lower: true})}`}>
                <a className="nav-link pl-0" title={e.name}>{e.name}</a>
              </Link>
            </li>
          ))}                                
        </ul>
      </div>
    </div>
  );
};

export default ListByCity;
