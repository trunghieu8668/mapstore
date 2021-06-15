import React, { useMemo, useState, useEffect } from 'react';
import { Figure, Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { useForm, FormProvider } from "react-hook-form";

import { usePlaceCreateUIContext } from './PlaceCreateUIContext'
import { getAllPlaceCategoy, getAllCities, getDistrictByCity, getWardByDistrict } from '../../actions/places'
import SelectCategory from './select-category/SelectCategory'
import PhoneInput from './phone-input/PhoneInput'
import SelectCity from './select-city/SelectCity'
import SelectDistrictByCity from './select-district-by-city/SelectDistrictByCity';
import NameInput from './name-input/NameInput';


const initState = {
  address: "",
  categories: [],
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
  formData: ""
}
const PlaceCreateCard = ({ onSuccess }) => {
  const methods = useForm();
  const { register, handleSubmit } = methods;

  const [valueForm, setValueForm] = useState(initState)
  const {
    address,
    categories,
    cityId,
    cityName,
    description,
    districtId,
    districtName,
    email,
    facebook,
    faxNumber,
    name,
    phones,
    streetId,
    streetName,
    subAddress,
    taxCode,
    wardId,
    wardName,
    website,
    createdPlace,
    formData
  } = valueForm;
  const [valueCities, setValueCities] = useState([])
  const [category, setCategory] = useState([])
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const placeCreateUIContext = usePlaceCreateUIContext();
  const placeCreateUIProps = useMemo(() => {
    return {
      values: placeCreateUIContext.values,
      setValuesQueryParams: placeCreateUIContext.setValuesQueryParams,
      queryParams: placeCreateUIContext.queryParams,
      setQueryParams: placeCreateUIContext.setQueryParams
    }
  }, [placeCreateUIContext])

  const initPlace = async () => {
    setLoading(true);
    // const [category, cities] = await Promise.all([
    getAllPlaceCategoy().then((data) => {
      placeCreateUIProps.setValuesQueryParams({...placeCreateUIProps.values, category: data.data});
      onSuccess();
    }).catch((err) => setError(err))
      .finally(() => setLoading(false))
    // getAllCities().then((data) => {
    //   if (data.error) {
    //     console.log(data.error);
    //   } else {
    //     return data.data.data
    //   }

    // })
    // .finally(() => setLoading(false))
    // ]);
    // return { category, cities }
  }

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
  const districtIdInContext = placeCreateUIProps.queryParams.districtId
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

  useEffect(() => {
    initPlace()
  }, [])


  const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    setValueForm({ ...valueForm, [name]: value });
  }
  // useEffect(() => {
  //   placeCreateUIProps.setValuesQueryParams({ ...valueForm })
  // }, [valueForm]);
  // console.log(placeCreateUIProps.values)
  console.log(category)
  const [reData, setRedata] = useState(null)
  // console.log(placeCreateUIProps.queryParams)
  return (
    <>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit((data) => setRedata(data))}>
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
                  <SelectCategory dataValues={category} setDataValues={(e) => setValueForm({ ...valueForm, categories: e })} />
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
            </Card.Body>
            <Card.Body>
              <Button type="submit" >Lưu dữ liệu</Button>
            </Card.Body>
          </Card>
        </Form>
      </FormProvider>
    </>
  );
};

export default PlaceCreateCard;