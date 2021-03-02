import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { Figure, Nav, Tabs, Tab } from 'react-bootstrap'
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Container, Row, Col } from 'reactstrap';
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { singlePlace, listRelated } from '../../actions/places';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
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
                      <div className="bg-white rounded-4 pt-5 shadow">
                      <div className="row pl-xs-12 mb-8 text-xs-left">
                          <a className="col-3 col-lg-3" href="/#">
                            {
                              data.data.pictures && data.data.pictures.length > 0 ? (
                                <Figure className="position-relative w-100 d-block">
                                  <Image alt={data.data.name} className="logo-img" width={900} height={600} layout='responsive' src={data.data.pictures[0]}/>                                  
                                </Figure>                              
                              ) : (
                                <img src="/assets/images/logo/mapstore_logo.png"/>
                              )
                            }
                          </a>                          
                          <div className="col-9 col-md-9 col-lg-9">
                            <h1 className="h4">
                              <a className="font-size-6 text-black-2 font-weight-semibold" href="/#">
                                {data.data.name}
                              </a>
                            </h1>
                            <div className="mb-0">
                              {
                                data.data.categories.length > 0 && data.data.categories.map((e,i) => (
                                  <h2 className="text-gray text-muted h6 font-weight-normal" key={i}>
                                    <Link className="text-muted" href={`/nganh-nghe/${slugify(e.label), {lower: true}}`}>
                                      <a>{e.label}</a>
                                    </Link>
                                  </h2>
                                ))
                              }
                            </div>
                          </div>
                        </div>                        
                        <Tabs className="tab-menu-items mt-3" defaultActiveKey="tab-1">
                          <Tab tabClassName="tab-menu-link" eventKey="tab-1" title="Thông tin công ty">
                            <div className="row">
                              <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                                <div className="mb-8">
                                  <p className="font-size-4">Địa chỉ</p>
                                  <h5 className="font-size-4 font-weight-semibold text-black-2">
                                    {data.data.address}{data.data.street.name && ', ' + data.data.street.name}{data.data.ward.name && ', ' + data.data.ward.name}{data.data.district.name && ', ' + data.data.district.name}{data.data.city.name && ', ' + data.data.city.name}
                                  </h5>
                                </div>
                                
                              </div>
                              <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                                <div className="mb-8">
                                  <p className="font-size-4">Type of corporation</p>
                                  <h5 className="font-size-4 font-weight-semibold text-black-2">B2B &amp; B2C</h5>
                                </div>
                                <div className="mb-8">
                                  <p className="font-size-4">Social Media</p>
                                  <div className="icon-link d-flex align-items-center"><a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="/#"><i className="fab fa-linkedin-in" /></a><a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="/#"><i className="fab fa-facebook-f" /></a><a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="/#"><i className="fab fa-twitter" /></a><a className="text-smoke circle-32 bg-concrete mr-5 hover-bg-green" href="/#"><i className="fa fa-globe" /></a></div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-4 col-md-4 col-xs-6">
                                <div className="mb-8">
                                  <p className="font-size-4">Location</p>
                                  <h5 className="font-size-4 font-weight-semibold text-black-2">New York City</h5>
                                </div>
                              </div>
                            </div>

                          </Tab>
                          <Tab tabClassName="tab-menu-link" eventKey="tab-2" title="Sản phẩm">
                            2
                          </Tab>                          
                        </Tabs>
                        <Row>
                          <Col xs="12">
                            <h1 className="place-heading h3 d-block mb-4">{data.data.name}</h1>
                          </Col>
                          <Col md="3">
                            
                            {
                              data.data.pictures && data.data.pictures.length > 0 ? (
                                <Figure className="position-relative w-100 d-block">
                                  <Image alt={data.data.name} className="logo-img" width={900} height={600} layout='responsive' src={data.data.pictures[0]}/>
                                  {/* <img  src={data.data.pictures[0]} alt={data.data.name}/> */}
                                </Figure>                              
                              ) : (
                                <img src="/assets/images/logo/mapstore_logo.png"/>
                              )
                            }
                          </Col>
                          <Col md="9">
                            
                            <ul className="list-unstyled">
                              <li className="item h6 font-weight-normal">
                                <address className="mb-0"><b>Địa chỉ:</b> {data.data.address}{data.data.street.name && ', ' + data.data.street.name}{data.data.ward.name && ', ' + data.data.ward.name}{data.data.district.name && ', ' + data.data.district.name}{data.data.city.name && ', ' + data.data.city.name}</address>
                              </li>
                              <li className="item h6 font-weight-normal">
                                <span className="d-md-inline mr-md-4">
                                  <b>Điện thoại: </b> {data.data.phones && <a href={`tel:${data.data.phones}`}>{data.data.phones}</a>} 
                                </span>
                                <span>
                                  <b>Fax: </b> {data.data.faxNumber && <a href={`fax:${data.data.faxNumber}`}>{data.data.faxNumber}</a>} 
                                </span>                              
                              </li>
                              <li className="item h6 font-weight-normal">
                                <span className="d-md-inline mr-md-4">
                                  <b>Website: </b> {data.data.website}
                                </span>
                                <span>
                                  <b>Email: </b> <a href={`mailto:${data.data.email}`}>{data.data.email}</a>
                                </span>                              
                              </li>                                                                                    
                              <li className="item h6 font-weight-normal">
                                {data.data.categories.length > 0 && <label className="font-weight-bold float-left mr-2">Loại ngành nghề:</label>}
                                <ul className="d-block">
                                  
                                  {
                                    data.data.categories.length > 0 && data.data.categories.map((e,i) => (
                                      <h2 className="h6 font-weight-normal" key={i}>
                                        <Link href={`/nganh-nghe/${slugify(e.label), {lower: true}}`}>
                                          <a>{e.label}</a>
                                        </Link>
                                      </h2>
                                    ))
                                  }
                                </ul>
                              </li>                      
                            </ul>
                          </Col>
                        </Row>
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