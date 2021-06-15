import React, { useMemo, useState, useEffect } from 'react';
import { Figure, Container, Row, Col, Form, Card } from "react-bootstrap";
import { usePlaceCreateUIContext } from './PlaceCreateUIContext'
import { getAllPlaceCategoy, getAllCities, getDistrictByCity, getWardByDistrict } from '../../actions/places'
import SelectCategory from './select-category/SelectCategory'
import PhoneInput from './phone-input/PhoneInput'
import SelectCity from './select-city/SelectCity'
import SelectDistrictByCity from './select-district-by-city/SelectDistrictByCity';
import NameInput from './name-input/NameInput';
import SelectWardByDistrict from './select-ward-by-district/SelectWardByDistrict'
const initState = {
  address: "",
  categories: [],
  cities: [],
  cityId: "",
  cityName: "",
  description: "",
  district: [],
  districtId: "",
  districtName: "",
  email: "",
  facebook: "",
  faxNumber: "",
  name: "",
  phones: "",
  streetId: "",
  streetName: "",
  subAddress: "",
  taxCode: "",
  ward: [],
  wardId: "",
  wardName: "",
  website: "",
  loading: false,
  error: null,
  createdPlace: "",
  formData: ""
}
const PlaceCreateCard = () => {
  const [valueForm, setValueForm] = useState(initState)
  const {
    formData
  } = valueForm;
  const [valueCities, setValueCities] = useState([])
  const placeCreateUIContext = usePlaceCreateUIContext();
  const placeCreateUIProps = useMemo(() => {
    return {
      values: placeCreateUIContext.values,
      setValuesQueryParams: placeCreateUIContext.setValuesQueryParams,
      queryParams: placeCreateUIContext.queryParams,
      setQueryParams: placeCreateUIContext.setQueryParams
    }
  }, [placeCreateUIContext])
  const initPlaceCategoy = async () => {
    const [category, cities] = await Promise.all([
      getAllPlaceCategoy().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          return data.data;
        }
      }),
      getAllCities().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          return data.data.data;
        }
      }),
    ]);
    return setValueForm({ ...valueForm, category, cities, formData: new FormData() });

  }

  useEffect(() => {
    initPlaceCategoy()
    return () => {
      setValueForm({}); // This worked for me
    };
  }, [])

  // Lấy Quận/Huyện theo Tỉnh/Thành phố
  const cityIdInContext = placeCreateUIProps.queryParams.cityId
  useEffect(() => {
    if (cityIdInContext && cityIdInContext !== "" && cityIdInContext !== undefined && cityIdInContext !== 0) {
      getDistrictByCity(cityIdInContext).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          return setValueForm({ ...valueForm, district: data.data.data });
        }
      })
    }
    else setValueForm({ ...valueForm, district: [] });

  }, [cityIdInContext])
  // Lấy Phường/Xã theo Quận/Huyện
  const districtIdInContext = useMemo(() => placeCreateUIProps.queryParams.districtId, []) 
  useEffect(() => {
    if ((cityIdInContext !== "" || cityIdInContext !== undefined || cityIdInContext !== 0) && (districtIdInContext !== "" || districtIdInContext !== null)) {
      getWardByDistrict(cityIdInContext, districtIdInContext).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          return setValueForm({ ...valueForm, ward: data.data.data });
        }
      })
    }
    else setValueForm({ ...valueForm, ward: [] });

  }, [districtIdInContext])




  const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValueForm({ ...valueForm, [name]: value });
  }
  useEffect(() => {
    placeCreateUIProps.setValuesQueryParams({ ...valueForm })
  }, [valueForm])
  console.log(placeCreateUIProps.values)

  // console.log(placeCreateUIProps.queryParams)
  return (
    <>
      <Form>
        <Card>
          <Card.Header className="text-center align-items-center">
            <h3 className="text-dark">
              Thêm mới Địa điểm
            </h3>
          </Card.Header>
          <Card.Body>
            <div className="form-group row mb-4 justify-content-center ">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Tên *
              </label>
              <div className="col-lg-9 col-xl-6">
                <NameInput />
              </div>
            </div>
            <div className="form-group row mb-4 justify-content-center">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Loại địa điểm *
              </label>
              <div className="col-lg-9 col-xl-6">
                <SelectCategory />
              </div>
            </div>
            <div className="form-group row mb-4 justify-content-center">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Số điện thoại
              </label>
              <div className="col-lg-9 col-xl-6">
                <PhoneInput />
              </div>
            </div>
            <div className="form-group row mb-4 justify-content-center">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Tỉnh/Thành phố *
              </label>
              <div className="col-lg-9 col-xl-6">
                {/* <SelectCity /> */}
              </div>
            </div>
            <div className="form-group row mb-4 justify-content-center">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Quận/Huyện *
              </label>
              <div className="col-lg-9 col-xl-6">
                {/* <SelectDistrictByCity /> */}
              </div>
            </div>
            <div className="form-group row mb-4 justify-content-center">
              <label className="col-xl-3 col-lg-3 col-form-label">
                Phường/Xã *
              </label>
              <div className="col-lg-9 col-xl-6">
                {/* <SelectWardByDistrict /> */}
              </div>
            </div>
          </Card.Body>
        </Card>
        {JSON.stringify(placeCreateUIProps.queryParams)}
      </Form>
    </>
  );
};

export default PlaceCreateCard;