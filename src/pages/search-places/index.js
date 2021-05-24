import React, { useState } from "react";
import _ from "lodash";
import { Container, Row, Col } from "react-bootstrap";
// import slugify from 'slugify'
import Pagination from "next-pagination";
import nextPaginationStyle from "../../assets/scss/custom/components/pagination/theme.module.scss";
import Layout from "../../components/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { listSearchPlaces, listPlacesByCategoryId } from "../../actions/places";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../../config";
// import moment from 'moment';
import Card from "../../components/places/Card";
import CardListNoPicture from "../../components/places/CardListNoPicture";
import WithHeaderScroll from "../../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);
const PageSize = process.env.PAGESIZE || 10;
const sizePerPageList = [10, 15, 20]

const ShowResult = ({ props }) => {
  const data = props.data.data;
  return (
    <>
      {_.map(data, (b, i) => (
        <Card key={i} data={b} />
      ))}
      <div className="clearfix w-100 my-4"></div>
      {/* {total > PageSize && (
        <Pagination
          total={total}
          sizes={sizePerPageList}
          theme={nextPaginationStyle}
        />
      )} */}
    </>
  );
};
const ShowAsidePlaceLatest = ({ props = {} }) => {
  const data = props.data.data.data;
  return (
    <>
      <div className="aside-group bg-white">
        <div className="pl-3 pr-3 pt-3">
          <h5 className="aside-title">Địa điểm mới cập nhật</h5>
        </div>
        {_.map(data, (e, i) => (
          <CardListNoPicture data={e} key={i} />
        ))}
      </div>
    </>
  );
};
const SearchPlaces = (props) => {
  const total = props.items.total || 0;
  const title = props.query
    ? "Kết quả tìm kiếm cho từ khóa " + props.query.s
    : "";
  const description = null;
  //props.item.data.data.description ? props.item.data.data.description : ''
  return (
    <>
      <Layout
        title={title}
        description={description}
        keywords=""
        className="wrapper-site"
      >
        <section className="places-page" id="places-page">
          <div className="wrapper d-flex align-items-end flex-column">
            <ScrollHeader isHome={false} />
            <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
              <Container>
                <Row>
                  <Col md={8} lg={8}>
                    <div className="content bg-white">
                      <div className="meta-entity px-3 pt-3">
                        <h1 className="h4 font-weight-light text-dark clearfix d-block ">
                          Kết quả tìm kiếm cho từ khóa
                          <b className="text-danger"> {props.query.s} </b>
                        </h1>
                        <label>
                          Tìm thấy <b>{props.items.total}</b> kết quả
                        </label>
                      </div>
                      <ShowResult props={props.items} />
                      {props.items.total > PageSize ? (
                        <div className="clearfix w-100 my-4 pl-3 pr-3">
                          <Pagination
                            total={total}
                            sizes={sizePerPageList}
                            theme={nextPaginationStyle}
                          />
                          <br />
                        </div>
                      ) : ''}
                    </div>
                  </Col>
                  <Col md={4} lg={4}>
                    <ShowAsidePlaceLatest props={props.placesListLatest} />
                  </Col>
                </Row>
              </Container>
            </div>
            <Footer />
          </div>
        </section>
      </Layout>
    </>
  );
};

SearchPlaces.getInitialProps = async ({ query }) => {
  const search = query.s.replace(/-/g, " ");
  const page = query.page !== undefined ? query.page : 1;

  const [items, placesListLatest] = await Promise.all([
    listSearchPlaces(search, page - 1).then((data) => {
      if (data.message) {
        console.log(data.message);
      } else {
        return { data: data.data, total: data.data.total, query };
      }
    }),
    listPlacesByCategoryId(0, 0).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return { data };
      }
    }),
  ]);

  return { items, placesListLatest, query };
};

export default SearchPlaces;
