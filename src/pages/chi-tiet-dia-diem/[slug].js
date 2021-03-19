import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image'
import { Figure, Nav, Tabs, Tab } from 'react-bootstrap'
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Container, Row, Col } from 'reactstrap';
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { singlePlace, listRelated } from '../../actions/places';
import { PLACES_URL } from '../../../config';
import moment from 'moment';
import Card from '../../components/places/Card';
import ListByCity from '../../components/sidebar/listByCity'
import slugify from 'slugify';
import WithHeaderScroll from "../../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);

const SinglePlaces = ({ data, query }) => {
  const blog = {...data}
  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    // listRelated({ blog }).then(data => {
    //   setRelated(data.data.data);
    // });
  };

  useEffect(() => {
    loadRelated();
  }, []);

  const showRelated = () => {
    return related.map((e, i) => (
      <Card data={e} key={i}/>
    ));
  };



  return (
      <>
        <Layout title={ data.data.name } description={data.data.description} keywords="" className="wrapper-site">
          <section className="clearfix h-100" id="category">
            <div className="cover-intro-inner bg d-flex align-items-end flex-column">
              <ScrollHeader isHome={false} />
              <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
                <Container>
                  <Row>
                    <Col md={8} lg={9}>
                      <div className="places-detail-wrapper bg-white rounded-4 shadow p-4">
                        <div className="row pl-xs-12 mb-8 text-xs-left">
                          <div className="col-3 col-lg-3">
                            {
                              data.data.pictures && data.data.pictures.length > 0 ? (
                                <Figure className="position-relative w-100 d-block">
                                  <Image alt={data.data.name} className="logo-img" width={900} height={600} layout='responsive' src={data.data.pictures[0]}/>
                                </Figure>
                              ) : (
                                <Figure className="position-relative w-100 d-block figure-haft">
                                  <Image alt={data.data.name} priority={true} objectFit="cover" layout='fill' className="img-fluid f-select" src="/assets/images/logo/mapstore_logo.png" />
                                </Figure>
                              )
                            }
                          </div>
                          <div className="col-9 col-md-9 col-lg-9">
                            <h1 className="h4 font-size-6 text-black-2 font-weight-semibold">
                              {data.data.name}
                            </h1>
                            <div className="mb-0">
                              {
                                <Link href={`/${PLACES_URL}/${slugify(data.data.categories, {lower: true, locale: 'vi', strict: true })}`}>
                                  <a className="h6 font-weight-normal" title={data.data.categories}>{data.data.categories}</a>
                                </Link>
                              }
                            </div>
                          </div>
                        </div>
                        <Tabs className="tab-menu-items mt-3" defaultActiveKey="tab-1">
                          <Tab tabClassName="tab-menu-link" eventKey="tab-1" title="Thông tin công ty">
                            <ul className="list-unstyled">
                              <li className="item h6 font-weight-normal mb-3">
                                <address className="mb-0"><b>Địa chỉ:</b> {data.data.address}{data.data.ward && ', ' + data.data.ward}{data.data.district && ', ' + data.data.district}{data.data.city && ', ' + data.data.city}</address>
                              </li>
                              <li className="item h6 font-weight-normal mb-3">
                                <span className="d-md-inline mr-md-4">
                                  <b>Điện thoại: </b> {data.data.phones && <a href={`tel:${data.data.phones}`}>{data.data.phones}</a>}
                                </span>
                                <span>
                                  <b>Fax: </b> {data.data.faxNumber && <a href={`fax:${data.data.faxNumber}`}>{data.data.faxNumber}</a>}
                                </span>
                              </li>
                              <li className="item h6 font-weight-normal mb-3">
                                <span className="d-md-inline mr-md-4">
                                  <b>Website: </b> {data.data.website}
                                </span>
                                <span>
                                  <b>Email: </b> <a href={`mailto:${data.data.email}`}>{data.data.email}</a>
                                </span>
                              </li>

                            </ul>
                            <div className="d-block mt-5 mb-4">
                              <h3 className="h5">GIỚI THIỆU</h3>
                              <div className="clearfix"></div>
                              <article>
                                {data.data.description ? (
                                  <Suspense dangerouslySetInnerHTML={{ __html: data.data.description }} />
                                ) : <span className="text-muted text-italic">Nội dung đang cập nhật</span>}
                              </article>
                            </div>
                          </Tab>
                          <Tab tabClassName="tab-menu-link" eventKey="tab-2" title="Sản phẩm">
                            Đang cập nhật
                          </Tab>
                        </Tabs>
                      </div>
                    </Col>
                    <Col md={4} lg={3}>
                      {/* <ListByCity /> */}
                      {related && related.length > 0 && <h4 className="mt-5 d-block border-top pt-3">Có thể bạn quan tâm</h4>}
                      {showRelated()}
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

SinglePlaces.getInitialProps = async ({ query }) => {
  return await singlePlace(query.slug).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { data, query };
    }
  });
};

export default SinglePlaces;
