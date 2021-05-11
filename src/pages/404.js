import React, { useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";

const PageNotFound = () => {
  useEffect(() => {
    document.body.style.setProperty("--primary", "#000000");
    document.body.style.setProperty("--secondary", "#434345");
    document.body.style.setProperty("--light", "#252525");
    document.body.style.setProperty("--dark", "#000000");
  });

  return (
    <Layout
      title="Mapstore - Tìm là thấy"
      description="Trang thông tin địa điểm"
      keywords="thông tin công ty"
      className="wrapper-site site-transparent"
    >      
      <div className="bg-purple">
        <div className="section-404">
          <div className="stars">
            <Container>
              <Row>
                <Col lg="8" xs="12" className="offset-lg-2">
                  <div className="central-body">
                    <h1 className="text-inner">404</h1>
                    <h3 className="sub-text text-white">Không tìm thấy trang</h3>
                    <Link href="/">
                      <a className="btn btn-outline m-t-20 text-white border mt-3">Quay lại trang chủ</a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
