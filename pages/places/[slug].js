

import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';

import Layout from '../../components/Layout'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { listPlaces } from '../../actions/places';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../config';
import renderHTML from 'react-render-html';
import moment from 'moment';
import Card from '../../components/places/Card';
import ListByCity from '../../components/sidebar/listByCity'

const Places = ({ data, query }) => {    
    const title = data.name
    return (
        <>
          <Layout title={ title } description={data.description} keywords="" className="wrapper-site bg-light">
            <section className="cover-intro" id="category">
              <div className="cover-intro-inner bg d-flex align-items-end flex-column">
                <Header />
                <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
                  <Container>
                    <h1 className="h3 text-dark clearfix d-block ">{title}</h1>
                    <Row>
                      <Col md={8} lg={9}>
                        {data.data.data.map((b, i) => (
                          <Card key={i} data={b} />
                        ))}
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

Places.getInitialProps = ({ query }) => {
    return listPlaces(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { data, query };
        }
    });
};

export default Places;
