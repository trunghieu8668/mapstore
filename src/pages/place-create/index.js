import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PlaceCreateUIProvider } from '../../components/place-create/PlaceCreateUIContext'
// components
import Layout from "../../components/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import WithHeaderScroll from "../../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);
import PlaceCreateCard from '../../components/place-create/PlaceCreateCard'

const PlaceCreate = () => {
  const title = `Thêm mới địa điểm | Mapstore - Tìm là thấy`
  const description = ""
  const url = ""
  const picture = ""

  const ProviderPlaceCreate = () => {
    return (
      <>
        <PlaceCreateUIProvider>
          <PlaceCreateCard />
        </PlaceCreateUIProvider>
      </>
    )
  }
  return (
    <>
      <Layout
        title={title}
        description={description}
        url={url}
        picture={picture}
        keywords=""
        className="wrapper-site"
      >
        <section className="clearfix h-100" id="category">
          <div className="cover-intro-inner bg d-flex align-items-end flex-column">
            <ScrollHeader isHome={false} />
            <div className="wrapper-contain clearfix w-100 pt-md-4 pb-md-4 position-relative">
              <Container className="px-0 px-md-2">
                <Row className="justify-content-md-center">
                  <Col md={8} lg={8}>
                    <ProviderPlaceCreate />
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

export default PlaceCreate;
