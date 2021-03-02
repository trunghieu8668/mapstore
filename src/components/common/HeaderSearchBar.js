import React, { useState, useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBarMobile({ fillData, placeholder }) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [showDropdownOptions, setShowDropdownOptions] = useState(false);
  
  
  const onSearch = () => {
    if (!search || search === "") {
      router.push("/");
    } else {
      router.push({
        pathname: "/",
        query: { q: search },
      });
    }
  };
  return (
    <div className="menu-search pl-md-3 pr-md-3">
      <div className="menu-search__form">
        <div className="menu-search__form-input">
          <InputGroup>
            <FormControl
              placeholder="Tìm kiếm"
              aria-label="Tìm kiếm"
              aria-describedby="Tìm kiếm địa điểm"
              className="bg-light"
            />
            <InputGroup.Append>
              <Button variant="primary">
                <FontAwesomeIcon icon={faSearch}/>
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SearchBarMobile);
