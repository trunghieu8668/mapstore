/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Select from "react-select";

const ReactSelect = ({ title, items, optionLabel, optionValue, multiSelect, handleChanged }) => {
  const handleChange = (e) => {
    multiSelect ?
      handleChanged(Array.isArray(e) ? e.map((x) => x[optionValue]) : [])
      : handleChanged(e[optionValue])
  };
  const defaultOptions =
  {
    [optionValue]: "",
    [optionLabel]: title
  }
  const _items = items && items.length > 0 ? [defaultOptions, ...items] : [...items]
  return (
    <>
      <Select
        className="react-select"
        classNamePrefixs="react-select"
        placeholder={title ? title : "Lựa chọn"}
        isMulti={multiSelect ? true : false}
        singleValue={multiSelect ? false : true}
        closeMenuOnSelect={multiSelect ? true : false}
        isClearable
        backspaceRemovesValue={false}
        closeMenuOnScroll={true}
        hideSelectedOptions={false}
        isSearchable
        onChange={handleChange}
        getOptionLabel={(option) => option[optionLabel]}
        getOptionValue={(option) => option[optionValue]}
        filterProp="name"
        matchProp="label"
        options={_items || []}
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

export default ReactSelect;