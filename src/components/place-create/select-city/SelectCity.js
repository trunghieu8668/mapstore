/* eslint-disable react-hooks/exhaustive-deps */
import React, { Component, useMemo } from 'react';
import Select from "react-select/async";
import { FixedSizeList as List } from "react-window";
import { usePlaceCreateUIContext } from '../PlaceCreateUIContext'

const height = 35;
class MenuList extends Component {
  render() {
    const { options, children, maxHeight, getValue } = this.props;
    const [value] = getValue();
    const initialOffset = options.indexOf(value) * height;
    return (
      <List
        height={maxHeight}
        itemCount={children.length}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({ index, style }) => <div className="text-truncate" style={style}>
          <span className="text-truncate d-block">
            {children[index]}
          </span>
        </div>}
      </List>
    );
  }
}

const defaultOptions = {
  id: "",
  name: ""
}

const SelectCity = () => {
  const placeCreateUIContext = usePlaceCreateUIContext()
  const placeCreateUIProps = useMemo(() => {
    return {
      values: placeCreateUIContext.values,
      queryParams: placeCreateUIContext.queryParams,
      setQueryParams: placeCreateUIContext.setQueryParams
    }
  }, [placeCreateUIContext])
  const list = placeCreateUIProps.values.cities || defaultOptions
  const handleChange = (e) => {
    placeCreateUIProps.setQueryParams({
      ...placeCreateUIProps.queryParams,
      cityId: e !== null ? e.id : "",
      cityName: e !== null ? e.name : "",
      districtId: "",
      districtName: "",
      wardName: "",
      wardId: ""
    })
  };
  return (
    <>
      <Select
        cacheOptions
        className="react-select"
        classNamePrefixs="react-select"
        placeholder="Vui lòng chọn"
        // components={{ MenuList }}
        isMulti={false}
        defaultOptions={defaultOptions}
        closeMenuOnSelect={true}
        noOptionsMessage={() => { return "Không tìm thấy" }}
        isClearable
        isSearchable
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

export default SelectCity;