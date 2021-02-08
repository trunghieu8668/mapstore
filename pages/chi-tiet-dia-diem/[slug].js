import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Container, Row, Col } from 'reactstrap';
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

import { singlePlace, listRelated } from '../../actions/places';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import moment from 'moment';
import Card from '../../components/places/Card';
import ListByCity from '../../components/sidebar/listByCity'
import slugify from 'slugify';

const SinglePlaces = ({ data, query }) => {
  const blog = {...data}
  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated({ blog }).then(data => {   
      setRelated(data.data.data);           
    });
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
        <Layout title={ data.data.name } description={data.data.description} keywords="" className="wrapper-site bg-light">
          <section className="cover-intro" id="category">
            <div className="cover-intro-inner bg d-flex align-items-end flex-column">
              <Header isHome={false}/>
              <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
                <Container>
                  <h1 className="h3 text-dark clearfix d-block ">{data.name}</h1>
                  <Row>
                    <Col md={8} lg={9}>
                      <h1 className="place-heading h3 d-block mb-4">{data.data.name}</h1>
                      <ul className="list-unstyled">
                        <li className="item h6 font-weight-normal">
                          <address className="mb-0"><b>Địa chỉ:</b> {data.data.address}{data.data.street.name && ', ' + data.data.street.name}{data.data.ward.name && ', ' + data.data.ward.name}{data.data.district.name && ', ' + data.data.district.name}{data.data.city.name && ', ' + data.data.city.name}</address>
                        </li>
                        <li className="item h6 font-weight-normal">
                          <b>Điện thoại: </b> {data.data.phones && <a href={`tel:${data.data.phones}`}>{data.data.phones}</a>} 
                        </li>
                        <li className="item h6 font-weight-normal">
                          <b>Fax: </b> {data.data.faxNumber && <a href={`fax:${data.data.faxNumber}`}>{data.data.faxNumber}</a>} 
                        </li>
                        <li className="item h6 font-weight-normal">
                          <b>Email: </b> <a href={`mailto:${data.data.email}`}>{data.data.email}</a>
                        </li>
                        <li className="item h6 font-weight-normal">
                          <b>Mã số thuế: </b> {data.data.taxCode}
                        </li>
                        <li className="item h6 font-weight-normal">
                          <b>Website: </b> {data.data.website}
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

                      {related && related.length > 0 && <h4 className="mt-5 d-block border-top pt-3">Có thể bạn quan tâm</h4>}
                      {showRelated()}
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