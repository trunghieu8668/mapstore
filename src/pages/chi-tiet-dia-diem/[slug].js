import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image'
import { Figure, Tabs, Tab, Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link';
import _ from 'lodash'
import slugify from 'slugify';
import parse, { attributesToProps } from 'html-react-parser';

// Library
import { PLACES_URL } from '../../../config';
import { singlePlace, listRelated, listPlacesByCategoryId } from '../../actions/places';
// components
import Layout from '../../components/Layout';
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Card from '../../components/places/Card';
import WithHeaderScroll from "../../common/WithHeaderScroll";
import CardListNoPicture from '../../components/places/CardListNoPicture';
const ScrollHeader = WithHeaderScroll(Header);

const ShowPlaceDetail = ({ props = {} }) => {
  const data = props.itemDetail.data || {};
  const query = props.itemDetail.query;
  const id = query;
  // State 
  const categoryId = data.data.categories ? slugify(data.data.categories, { lower: true, locale: 'vi', replacement: '_' }).replace(/-/g, "_") : 0;
  const [related, setRelated] = useState([]);
  const [placesLatest, setPlacesLatest] = useState({});
  const loadRelated = () => {
    categoryId !== 0 && listRelated(categoryId).then(data => {
      setRelated(
        data.data.data.filter(el => el.id !== id)
      )
    });
  };
  useEffect(() => {
    loadRelated();
    // loadPlacesLatestList()
  }, []);
  const showRelated = () => {
    return related.map((e, i) => (
      <Card data={e} key={i} />
    ));
  };
  const placeInfo = () => {
    return (
      <>
        <div className="places-detail-wrapper">
          <div className="row pl-xs-12 mb-8 text-xs-left">
            <div className="col-3 col-lg-3">
              {
                data.data.pictures && data.data.pictures.length > 0 ? (
                  <Figure className="position-relative w-100 d-block">
                    <Image alt={data.data.name} className="logo-img" width={900} height={600} layout='responsive' src={data.data.pictures[0]} />
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
                  <Link href={`/${PLACES_URL}/${slugify(data.data.categories, { lower: true, locale: 'vi', strict: true })}`}>
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
                <h3 className="h5 font-weight-medium">GIỚI THIỆU</h3>
                <div className="clearfix"></div>
                <div className="post-article">
                  {data.data.description ? (
                    // <article dangerouslySetInnerHTML={{ __html: data.data.description }} />
                    <article>
                      {parse(data.data.description, {
                        trim: true
                      })}
                    </article>
                  ) : <article className="text-muted text-italic">Nội dung đang cập nhật</article>}
                </div>
              </div>
            </Tab>
            <Tab tabClassName="tab-menu-link" eventKey="tab-2" title="Sản phẩm">
              Đang cập nhật
            </Tab>
          </Tabs>
        </div>
      </>
    )
  }
  return (
    <div className="bg-white rounded-4 shadow p-4">
      {placeInfo()}
      <div className="clearfix w-100 my-2"></div>
      {related && related.length > 0 && <h4 className="mt-5 d-block border-top pt-3">Địa điểm khác</h4>}
      {showRelated()}
    </div>
  )
}

const ShowAsidePlaceLatest = ({ props = {} }) => {
  const data = props.placesListLatest.data.data.data;
  return (
    <>
      <div className="aside-group bg-white">
        <div className="pl-3 pr-3 pt-3">
          <h5 className="aside-title">Địa điểm mới cập nhật</h5>
        </div>
        {
          _.map(data, (e, i) => (
            <CardListNoPicture data={e} key={i} />
          ))
        }
      </div>
    </>
  )

}
const SinglePlaces = (props) => {
  const title = props.itemDetail.data.data.name || null;
  const description = props.itemDetail.data.data.description || null;
  return (
    <>
      <Layout title={title} description={description} keywords="" className="wrapper-site">
        <section className="clearfix h-100" id="category">
          <div className="cover-intro-inner bg d-flex align-items-end flex-column">
            <ScrollHeader isHome={false} />
            <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
              <Container>
                <Row>
                  <Col md={8} lg={8}>
                    <ShowPlaceDetail props={props} />
                  </Col>
                  <Col md={4} lg={4}>
                    <ShowAsidePlaceLatest props={props} />
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
  const [itemDetail, placesListLatest] = await Promise.all([
    singlePlace(query.slug).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        return { data, query };
      }
    }),
    listPlacesByCategoryId(0, 0).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        return { data };
      }
    })
  ]);

  return { itemDetail, placesListLatest };
};

export default SinglePlaces;
