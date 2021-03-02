import React, {useState, useEffect, useMemo} from 'react';
import {FormGroup,Input} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchForm = () => {  
  return (
    <FormGroup className="m-0 search-form">
      <div className="flex form-inner">
        <div className="icon">
          <FontAwesomeIcon icon={faSearch}/>
        </div>
        <Input className="form-control text-capitalize search-text" name="search-text" placeholder="Nhập từ khóa" type="text" />
        <div className="button-primary btn-submit">
          <button className=" btn btn-default text-white text-uppercase" type="submit">
            Tìm kiếm
          </button>
        </div>
      </div>      
    </FormGroup>
  )
}

export default SearchForm;