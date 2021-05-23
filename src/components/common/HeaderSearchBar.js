import React, { useState } from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const preventDefault = (f) => (e) => {
  e.preventDefault();
  f(e);
};
function SearchBarMobile({ action = "/search-places" }) {
  const router = useRouter();
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });

  const { search, results, searched, message } = values;
  const searchSubmit = preventDefault(() => {
    router.push({
      pathname: action,
      query: { s: search },
    });
  });
  const handleChange = (e) => {
    // console.log(e.target.value);
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };
  return (
    <div className="menu-search pl-md-3 pr-md-3">
      <div className="menu-search__form">
        <div className="menu-search__form-input">
          <Form onSubmit={searchSubmit} className="w-100">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Tìm kiếm"
                aria-describedby="Tìm kiếm địa điểm"
                className="bg-light input-search"
                onChange={handleChange}
              />
              <InputGroup.Append>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-primary"
                >
                  <span className="icons">
                    <span className="icon">
                      <i className="bi bi-search"></i>
                    </span>
                  </span>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SearchBarMobile);
