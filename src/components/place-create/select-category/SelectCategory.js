/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component, useMemo } from 'react';
import { useFormContext, useForm, Controller } from 'react-hook-form'
import Select from "react-select";
import { FixedSizeList as List } from "react-window";
import { usePlaceCreateUIContext } from '../PlaceCreateUIContext'

const SelectCategory = ({ dataValues, setDataValues }) => {
  const methods = useFormContext();
  const { control } = useForm()
  const placeCreateUIContext = usePlaceCreateUIContext()
  const placeCreateUIProps = useMemo(() => {
    return {
      values: placeCreateUIContext.values.category
    }
  }, [placeCreateUIContext])
  const { values } = placeCreateUIProps
  

  const handleChange = (e) => {
    const _value = Array.isArray(e) ? e.map((x) => {
      return {
        label: x.name,
        value: x.id
      }
    }) : []
    setDataValues(_value)
    // placeCreateUIProps.setQueryParams({ ...placeCreateUIProps.queryParams, categories: _value })
  };
  return (
    <>
      <Controller
        name="categories"
        control={control}
        render={({ field }) => <Select
          {...field}
          {...methods.register("categories", { required: true })}
          className="react-select"
          classNamePrefixs="react-select"
          placeholder="Vui lòng chọn"
          isMulti
          closeMenuOnSelect={false}
          isClearable
          isSearchable
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          options={values}
          filterProp="name"
          matchProp="label"
          options={dataValues}
          theme={(theme) => ({
            ...theme,
            borderRadius: 4,
            colors: {
              ...theme.colors,
              primary25: "#ddd",
              primary: "var(--primary)",
            }
          })}
        />}
      />

    </>
  );
};

export default SelectCategory;