import React from 'react'
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Pagination from 'next-pagination'
import nextPaginationStyle from '../../assets/scss/custom/components/pagination/theme.module.scss'
import Layout from '../../components/Layout'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { listPlacesByCategoryId } from '../../actions/places';
import Card from '../../components/places/Card';
import WithHeaderScroll from "../../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);
import { PAGESIZE, sizePerPageList } from '../../../config';

const Places = ({ data, total, query }) => {
  console.log(data)
  const title = data.data.name ? data.data.name : ''
  const description = data.data.description ? data.data.description : ''
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
                  <Col md={8} lg={8} className="offset-lg-2">
                    {data.data.map((b, i) => (
                      <Card key={i} data={b} />
                    ))}
                    <div className="clearfix w-100 my-4"></div>
                    {total > PAGESIZE && <Pagination total={total} sizes={sizePerPageList} theme={nextPaginationStyle} />}
                  </Col>
                  <Col md={4} lg={3}>
                    {/* <ListByCity /> */}
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

Places.getInitialProps = async ({ query }) => {
  const slug = query.slug.replace(/-/g, "_");
  const page = query.page !== undefined ? query.page : 1;
  return await listPlacesByCategoryId(slug, (page - 1)).then(data => {
    if (data.message) {
      console.log(data.message);
    } else {
      return { data: data.data, total: data.data.total, query };
    }
  });
};

Places.propTypes = {
  data: PropTypes.object.isRequired,
  total: PropTypes.number
}

export default Places;
