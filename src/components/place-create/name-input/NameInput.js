/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { useFormContext } from "react-hook-form";

import { usePlaceCreateUIContext } from '../PlaceCreateUIContext'
function NameInput() {

  const methods = useFormContext();
  // const placeCreateUIContext = usePlaceCreateUIContext();
  // const placeCreateUIProps = useMemo(() => {
  //   return {
  //     queryParams: placeCreateUIContext.queryParams,
  //     setQueryParams: placeCreateUIContext.setQueryParams
  //   }
  // }, [placeCreateUIContext])

  // const valueName = placeCreateUIProps.queryParams.name
  // const handleChange = name => event => {
  //   placeCreateUIProps.setQueryParams({ ...placeCreateUIProps.queryParams, [name]: event.target.value });
  // }

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Tên địa điểm"
        name="name"
        {...methods.register("name")}
      />
    </>
  )
}

export default NameInput
