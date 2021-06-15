/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import NumberFormat from "react-number-format";
import { useForm, useFormContext, Controller } from 'react-hook-form'

function PhoneInput() {
  const methods = useFormContext();
  const { control } = useForm()
  return (
    <>
      <Controller
        name="phones"
        control={control}
        render={({ field }) => <NumberFormat
          {...field}
          {...methods.register("phones")}
          name="phones"
          className="form-control"
          format="#### ### ###"
          prefix={""}
          suffix={""}
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
        />}
      />
    </>
  )
}

export default PhoneInput
