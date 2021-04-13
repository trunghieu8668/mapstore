import React, { useState, useEffect, useMemo } from "react";
import { RadioButton } from "primereact/radiobutton";

// import { Breadcrumbs } from '../../helpers/Breadcrumbs'
import Pagination from "next-pagination";
import nextPaginationStyle from "../../assets/scss/custom/components/pagination/theme.module.scss";

import Layout from "../../components/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import {
  listAllGroupCategory,
  listPlacesByCategoryId,
} from "../../actions/places";
import slugify from "slugify";
// import moment from 'moment';
import Card from "../../components/places/Card";
// import ListByCity from '../../components/sidebar/listByCity'
import WithHeaderScroll from "../../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);

const CategoryGroup = ({ data, query, page }) => {
  const categoryGroup = data && data.status === 0 ? data.data.data : [];
  const formatSlug = query.slug.replace(/-/g, "_");
  // const breadcrumbs = Breadcrumbs();
  const list = categoryGroup
    ? categoryGroup.filter((t) => t.id === formatSlug)
    : [];
  const title = list && list.length > 0 ? list[0].name : "";
  const description = null;
  const [categoryGroupValue, setCategoryGroupValue] = useState({
    categoryId: null,
  });
  const [dataValues, setDataValues] = useState({});
  const [firstChecked, setFirstChecked] = useState(null);
  // Paging
  const [total, setTotal] = useState(0);

  const handleChangeChecked = (name) => (event) => {
    const value = event.target.value;
    setCategoryGroupValue({ ...categoryGroupValue, [name]: value });
    setFirstChecked(null);
  };
  const init = () => {
    firstChecked !== null
      ? listPlacesByCategoryId(
          slugify(firstChecked, {
            lower: true,
            strict: true,
            locale: "vi",
            replacement: "_",
          }),
          page - 1
        ).then((data) => {
          if (data.message) {
            console.log(data.message);
          } else {
            return setDataValues(data), setTotal(data.data.total);
          }
        })
      : firstChecked === null &&
        categoryGroupValue.categoryId !== null &&
        listPlacesByCategoryId(
          slugify(categoryGroupValue.categoryId, {
            lower: true,
            strict: true,
            locale: "vi",
            replacement: "_",
          }),
          page - 1
        ).then((data) => {
          if (data.message) {
            console.log(data.message);
          } else {
            return setDataValues(data), setTotal(data.data.total);
          }
        });
  };
  useEffect(() => {
    init();
  }, [categoryGroupValue, page, firstChecked]);
  const sizePerPageList = [10, 15, 20];

  const dispense = React.useCallback(
    (array) => {
      firstChecked === null && setFirstChecked(array.label);
    },
    [categoryGroupValue]
  );

  // useEffect(() => {
  //   firstChecked !== null && listPlacesByCategoryId(slugify(firstChecked, { lower: true, strict: true, locale: 'vi', replacement: '_' }), (page - 1)).then(data => {
  //     if (data.message) {
  //       console.log(data.message);
  //     }
  //     else {
  //       return (setDataValues(data), setTotal(data.data.total))
  //     }
  //   })
  // }, [firstChecked])

  const handleHistoryClick = (event, isLastElement) => {
    event.stopPropagation();
    if (isLastElement) {
      // do somthing
      alert("last");
    } else {
      // do somthing else
    }
  };
  return (
    <>
      <Layout
        title={title}
        description={description}
        keywords=""
        className="wrapper-site"
      >
        <div className="card">
          {/* <Form.Check
            className="mb-2 item"
            defaultChecked={true}
            type="radio"
            value="null"
            label="Không chọn"
            name="filterCheckListRadios"
            id="filterCheckListRadios"
            onChange={handleChangeChecked("categoryId")}
          /> */}
          {list &&
            list.length > 0 &&
            list[0].categories.map((b, i, array) => (
              <div className="p-field-radiobutton">
                <RadioButton
                  inputId={
                    slugify(b.label, {
                      lower: true,
                      strict: true,
                      locale: "vi",
                      replacement: "-",
                    }) +
                    "-" +
                    i
                  }
                  name="filterCheckListRadios"
                  value={b.label}
                  onChange={handleChangeChecked("categoryId")}
                  checked={i === 0 ? true : false}
                />

                <label
                  htmlFor={
                    slugify(b.label, {
                      lower: true,
                      strict: true,
                      locale: "vi",
                      replacement: "-",
                    }) +
                    "-" +
                    i
                  }
                >
                  {b.label}
                </label>
              </div>
            ))}
        </div>
      </Layout>
    </>
  );
};

CategoryGroup.getInitialProps = ({ query }) => {
  const page = query.page !== undefined ? query.page : 1;
  const listMenuGroupCategory = listAllGroupCategory().then((data) => {
    if (data.message) {
      console.log(data.message);
    } else {
      return { data, query, page };
    }
  });
  return listMenuGroupCategory;
};

export default CategoryGroup;
