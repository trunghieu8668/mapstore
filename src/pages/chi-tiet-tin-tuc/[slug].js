import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup } from 'react-bootstrap'
import HtmlToReact from 'html-to-react'

import Layout from '../../components/Layout'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { singleBlog } from '../../actions/blog';
import { API, DOMAIN, APP_NAME, FB_APP_ID } from '../../../config';
import moment from 'moment';
import Card from '../../components/places/Card';
import ListByCity from '../../components/sidebar/listByCity'
import {gioiThieu} from '../../fakeapi/info'

const Places = ({ data, query }) => {    
    const title = data.name
    return (
        <>
          <Layout title={ title } description={data.description} keywords="" className="wrapper-site bg-light">
            <section className="cover-intro" id="category">
              <div className="cover-intro-inner bg d-flex align-items-end flex-column">
                <Header isHome={false}/>
                <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
                  <Container>
                    
                    <Row>
                      <Col md={3} lg={3}>
                        <ListGroup variant="flush">
                          <ListGroup.Item>
                            <a href="#">
                              Giới thiệu
                            </a>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <a href="#">
                              Hướng dẫn
                            </a>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <a href="#">
                              Điều khoản
                            </a>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <a href="#">
                              Giải pháp kinh doanh
                            </a>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <a href="#">
                              Diễn đàn
                            </a>
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <Col md={9} lg={9}>
                        <h1 className="h3 text-dark clearfix d-block ">{title}</h1>
                        <div className="content-block">
                          <div dangerouslySetInnerHTML={{ __html: data.content }} />
                        </div>
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
    return await singleBlog(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { data, query };
        }
    });
};

export default Places;
