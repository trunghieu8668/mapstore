import React, { useState } from 'react'
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
// import slugify from 'slugify'
import Pagination from 'next-pagination'
import nextPaginationStyle from '../../assets/scss/custom/components/pagination/theme.module.scss'
import Layout from '../../components/Layout'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { listSearchPlaces } from '../../actions/places';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
// import moment from 'moment';
import Card from '../../components/places/Card';
import ListByCity from '../../components/sidebar/listByCity'
import WithHeaderScroll from "../../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);


const SearchPlaces = ({ data, total, query }) => {
  const title = query ? 'Kết quả tìm kiếm cho từ khóa '+ query.s : ''
  const description = data.data.description ? data.data.description : ''
  const sizePerPageList = [10, 15, 20];
  return (
    <>
      <Layout title={title} description={description} keywords="" className="wrapper-site">
        <section className="places-page" id="places-page">
          <div className="wrapper d-flex align-items-end flex-column">
            <ScrollHeader isHome={false} />
            <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
              <Container>
                <h1 className="h3 text-dark clearfix d-block ">{title}</h1>
                <Row>
                  <Col md={8} lg={9}>
                    {data.data.map((b, i) => (
                      <Card key={i} data={b} />
                    ))}
                    <div className="clearfix w-100 my-4"></div>
                    {total > 0 && <Pagination total={total} sizes={sizePerPageList} theme={nextPaginationStyle} />}
                  </Col>
                  <Col md={4} lg={3}>
                    <ListByCity />
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
  //slugify(query.slug, {lower: true, locale: 'vi', replacement: '_'}).replace("-", "_");
  return await listSearchPlaces(search, page).then(data => {
    if (data.message) {
      console.log(data.message);
    } else {
      return { data: data.data, total: data.data.total, query };
    }
  });
};

export default SearchPlaces;
