import React, { useState } from 'react';
import { useRouter } from 'next/router'
import { Form, FormGroup, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { listSearchPlaces } from '../../actions/places'

const preventDefault = f => e => {
  e.preventDefault()
  f(e)
}

const SearchForm = ({ action = '/search-places' }) => {
  const router = useRouter()
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: ''
  });

  const { search, results, searched, message } = values;

  // const searchSubmit = e => {
  //   e.preventDefault();
  //   listSearchPlaces({ search }).then(data => {
  //     setValues({ ...values, results: data, searched: true, message: `${data.length} blogs found` });
  //   });
  // };
  const searchSubmit = preventDefault(() => {
    router.push({
      pathname: action,
      query: { s: search },
    })
  })
  const handleChange = e => {
    // console.log(e.target.value);
    setValues({ ...values, search: e.target.value, searched: false, results: [] });
  };

  return (
    <Form onSubmit={searchSubmit} className="w-100">
      <FormGroup className="m-0 search-form">
        <div className="flex form-inner">
          <span className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <Input className="form-control text-capitalize search-text" name="search-text" placeholder="Nhập từ khóa" type="search" onChange={handleChange} />
          <div className="button-primary btn-submit">
            <button className=" btn btn-default text-white text-uppercase" type="submit">
              Tìm kiếm
            </button>
          </div>
        </div>
      </FormGroup>
    </Form>
  )
}

export default SearchForm;