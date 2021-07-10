import Fetch from "isomorphic-unfetch";
import { API, APIKEY, PAGESIZE } from "../../config";

export const listPlacesByCategoryId = async (slug, page) => {
  return await Fetch(
    `${API}/public/places?categoryId=${slug}&cityId=0&districtId=0&pageIndex=${
      page !== undefined ? page : 0
    }&pageSize=${PAGESIZE}`,
    {
      method: "GET",
      headers: {
        apikey: `${APIKEY}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const listSearchPlaces = (slug, page) => {
  return Fetch(
    `${API}/public/places?categoryId=0&cityId=0&districtId=0&pageIndex=${
      page !== undefined ? page : 0
    }&search=${slug}&pageSize=${PAGESIZE}`,
    {
      method: "GET",
      headers: {
        apikey: `${APIKEY}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
export const listAllGroupCategory = () => {
  return Fetch(`${API}/public/category-group`, {
    method: "GET",
    headers: {
      apikey: `${APIKEY}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getAllPlaceCategoy = async () => {
  try {
    const response = await Fetch(`${API}/public/place-category/all`, {
      method: "GET",
      headers: {
        apikey: `${APIKEY}`,
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
export const getAllCities = async () => {
  try {
    const response = await Fetch(`${API}/public/cities`, {
      method: "GET",
      headers: {
        apikey: `${APIKEY}`,
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getDistrictByCity = (params) => {
  try {
    const response = Fetch(`${API}/public/districts?cityId=${params}`, {
      method: "GET",
      headers: {
        apikey: `${APIKEY}`,
      },
    });
    return  response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getWardByDistrict = async (cityId, districtId,) => {
  try {
    const response = await Fetch(`${API}/public/wards?cityId=${cityId}&districtId=${districtId}`, {
      method: "GET",
      headers: {
        apikey: `${APIKEY}`,
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
export const singlePlace = (slug) => {
  const slugCheck = slug.toLowerCase().indexOf("-");
  const slugNew =
    slugCheck && slugCheck > 0
      ? `${API}/public/places/slug/${slug}`
      : `${API}/public/places/${slug}`;
  return Fetch(`${slugNew}`, {
    method: "GET",
    headers: {
      apikey: `${APIKEY}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listRelated = async (categoryId) => {
  return await Fetch(
    `${API}/public/places?categoryId=${categoryId}&cityId=0&districtId=0&pageIndex=0&pageSize=${PAGESIZE}`,
    {
      method: "GET",
      headers: {
        apikey: `${APIKEY}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
// Sitemap
export const sitemapGenerator = async () => {
  // return await Fetch(`${API}/public/places?categoryId=0&cityId=thanh_pho_ho_chi_minh&districtId=0&pageIndex=0&pageSize=${(PAGESIZE !== undefined || PAGESIZE !== null) ? (PAGESIZE <= 300 ? PAGESIZE : 300) : 10}`, {
  return await Fetch(
    `${API}/public/places?categoryId=0&cityId=thanh_pho_ho_chi_minh&districtId=0&pageIndex=0&pageSize=18000`,
    {
      method: "GET",
      headers: {
        apikey: `${APIKEY}`,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
