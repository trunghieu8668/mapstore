/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState, useEffect } from 'react';
import Select from "react-select";
import { usePlaceCreateUIContext } from '../PlaceCreateUIContext'


const SelectWardByDistrict = () => {

  const placeCreateUIContext = usePlaceCreateUIContext()
  const placeCreateUIProps = useMemo(() => {
    return {
      values: placeCreateUIContext.values,
      queryParams: placeCreateUIContext.queryParams,
      setQueryParams: placeCreateUIContext.setQueryParams
    }
  }, [placeCreateUIContext])
  const list = placeCreateUIProps.values.ward || []
  const [checkStateChange, setCheckStateChange] = useState(false)

  useEffect(() => {
    setCheckStateChange(!checkStateChange)
  }, [list])
  const handleChange = (e) => {
    if (e !== null) {
      placeCreateUIProps.setQueryParams({ ...placeCreateUIProps.queryParams, wardId: e.id || "", wardName: e.name })
    }
  };
  return (
    <>
      <Select
        className="react-select"
        classNamePrefixs="react-select"
        placeholder="Vui lòng chọn"
        // components={{ MenuList }}
        isMulti={false}
        closeMenuOnSelect={true}
        dropdownIndicator={false}
        noOptionsMessage={() => { return "Không tìm thấy" }}
        isClearable={false}
        isSearchable
        menuShouldBlockScroll={true}
        loadingIndicator
        onChange={handleChange}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.id}
        filterProp="name"
        matchProp="label"
        options={list}
        theme={(theme) => ({
          ...theme,
          borderRadius: 4,
          colors: {
            ...theme.colors,
            primary25: "#ddd",
            primary: "var(--primary)",
          }
        })}
      />
    </>
  );
};

export default SelectWardByDistrict;