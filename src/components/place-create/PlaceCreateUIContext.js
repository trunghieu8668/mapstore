import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";
import { dataFilter } from "./PlaceCreateUIHelpers";

const PlaceCreateUIContext = createContext();

export function usePlaceCreateUIContext() {
  return useContext(PlaceCreateUIContext);
}

export const PlaceCreateUIConsumer = PlaceCreateUIContext.Consumer;

const initialState = {
  address: "",
  categories: [],
  cityId: "",
  cityName: "",
  description: "",
  districtId: "",
  districtName: "",
  email: "",
  facebook: "",
  faxNumber: "",
  name: "",
  phones: [],
  streetId: "",
  streetName: "",
  subAddress: "",
  taxCode: "",
  wardId: "",
  wardName: "",
  website: ""
}

export function PlaceCreateUIProvider({ children }) {
  const [values, setValues] = useState({});
  const setValuesQueryParams = useCallback((nextQueryParams) => {
    setValues((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);
  const [queryParams, setQueryParamsBase] = useState(initialState);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const value = {
    values, setValues, setValuesQueryParams,
    queryParams, setQueryParamsBase, setQueryParams
  };

  return (
    <PlaceCreateUIContext.Provider value={value}>
      {children}
    </PlaceCreateUIContext.Provider>
  );
}
