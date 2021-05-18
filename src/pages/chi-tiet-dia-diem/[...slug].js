import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { Figure, Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import _ from "lodash";
import { useRouter } from "next/router";
import parse, { attributesToProps } from "html-react-parser";

// Library
import { PLACES_URL } from "../../../config";
import {
  singlePlace,
  listRelated,
  listPlacesByCategoryId,
} from "../../actions/places";
// components
import Layout from "../../components/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Card from "../../components/places/Card";
import WithHeaderScroll from "../../common/WithHeaderScroll";
import CardListNoPicture from "../../components/places/CardListNoPicture";
import Share from "../../components/common/Share";
const ScrollHeader = WithHeaderScroll(Header);

const ShowPlaceDetail = ({ props = {} }) => {
  const router = useRouter();
  const slug = router.query.slug || [];
  // const post = [router]
  const data = props.itemDetail.data || {};
  const query = props.itemDetail.query;
  const id = query;
  // State
  const categoryId =
    data.data.categories && data.data.categories.length > 0
      ? data.data.categories[0].id
      : 0;
  const [related, setRelated] = useState([]);
  const [placesLatest, setPlacesLatest] = useState({});
  const loadRelated = () => {
    categoryId !== 0 &&
      listRelated(categoryId).then((data) => {
        setRelated(data.data.data.filter((el) => el.webSEO.slug !== id.slug));
      });
  };
  useEffect(() => {
    loadRelated();
    // loadPlacesLatestList()
  }, []);
  const showRelated = () => {
    return related.map((e, i) => <Card data={e} key={i} />);
  };
  const placeInfo = () => {
    return (
      <>
        <div className="places-detail-wrapper">
          <div className="row pl-xs-12 mb-8 text-xs-left">
            <div className="col-3 col-lg-3">
              {data.data.pictures && data.data.pictures.length > 0 ? (
                <Figure className="position-relative w-100 d-block">
                  <Image
                    alt={data.data.name}
                    priority={true}
                    objectFit="contain"
                    layout="fill"
                    className="logo-img img-fluid f-select"
                    src={data.data.pictures[0]}
                  />
                </Figure>
              ) : (
                <Figure className="position-relative w-100 d-block figure-haft">
                  <Image
                    alt={data.data.name}
                    priority={true}
                    objectFit="contain"
                    layout="fill"
                    className="img-fluid f-select"
                    src="/assets/images/logo/mapstore-logo-min.png"
                  />
                </Figure>
              )}
            </div>
            <div className="col-9 col-md-9 col-lg-9">
              <h1 className="h4 font-size-6 text-black-2 font-weight-semibold">
                {data.data.name}
              </h1>
              <div className="mb-0">
                {data.data.categories &&
                  _.map(data.data.categories, (category, i) => (
                    <h2 key={i}>
                      <Link
                        href={`/${PLACES_URL}/${category.id.replace(
                          /_/g,
                          "-"
                        )}`}
                      >
                        <a
                          className="h6 font-weight-normal"
                          title={category.name}
                        >
                          {category.name}
                        </a>
                      </Link>
                    </h2>
                  ))}
              </div>
            </div>
          </div>
          <Tabs className="tab-menu-items mt-3" defaultActiveKey="tab-1">
            <Tab
              tabClassName="tab-menu-link"
              eventKey="tab-1"
              title="Thông tin công ty"
            >
              <ul className="list-unstyled">
                <li className="item h6 font-weight-normal mb-3">
                  <address className="mb-0">
                    <b><i className="flaticon-pin icon"></i></b>
                    {data.data.address}
                    {data.data.ward && ", " + data.data.ward}
                    {data.data.district && ", " + data.data.district}
                    {data.data.city && ", " + data.data.city}
                  </address>
                </li>
                <li className="item h6 font-weight-normal mb-3">
                  <ul className="row list-unstyled">
                    <li className="col-md-6">
                      <span className="d-md-inline mr-md-4 mr-2">
                        <b><i className="bi bi-telephone"></i> </b>{" "}
                        {data.data.phones && (
                          <a
                            href={`tel:${data.data.phones}`}
                            title={data.data.phones}
                          >
                            {data.data.phones}
                          </a>
                        )}
                      </span>
                    </li>
                    <li className="col-md-6">
                      <span>
                        <b><i className="bi bi-building"></i> </b>{" "}
                        {data.data.taxCode ? (
                          <span>{data.data.taxCode}</span>
                        ) : (
                          <span className="text-notfound text-muted text-italic">
                            Đang cập nhật
                          </span>
                        )}
                      </span>
                    </li>
                  </ul>


                </li>
                <li className="item h6 font-weight-normal mb-3">
                  <ul className="row list-unstyled">
                    <li className="col-md-6">
                      <span className="d-md-inline mr-md-4 mr-2">
                        <b><i className="bi bi-link-45deg"></i></b>{" "}
                        {data.data.website ? (
                          <a
                            target="_blank"
                            rel="nofollow"
                            href={`${data.data.website}`}
                            title={data.data.name}
                          >
                            {data.data.website}
                          </a>
                        ) : (
                          <span className="text-notfound text-muted text-italic">
                            Đang cập nhật
                          </span>
                        )}
                      </span>
                    </li>
                    <li className="col-md-6">
                      <span>
                        <b><i className="bi bi-envelope"></i></b>{" "}
                        {data.data.email ? (
                          <a
                            href={`mailto:${data.data.email}`}
                            title={data.data.email}
                          >
                            {data.data.email}{" "}
                          </a>
                        ) : (
                          <span className="text-notfound text-muted text-italic">
                            Đang cập nhật
                          </span>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="d-block mt-5 mb-4">
                <h3 className="h4 font-weight-medium">GIỚI THIỆU</h3>
                <div className="clearfix"></div>
                <div className="post-article d-block mt-3">
                  {data.data.description ? (
                    // <article dangerouslySetInnerHTML={{ __html: data.data.description }} />
                    <article className="text-justify font-size-4">
                      {parse(data.data.description.replace(/\n/g, "<br/>"), {
                        trim: true,
                      })}
                    </article>
                  ) : (
                    <article className="text-muted text-italic font-size-3">
                      Nội dung đang cập nhật
                    </article>
                  )}
                </div>
              </div>
            </Tab>
            <Tab tabClassName="tab-menu-link" eventKey="tab-2" title="Sản phẩm">
              Đang cập nhật
            </Tab>
          </Tabs>
        </div>
      </>
    );
  };
  return (
    <div className="bg-white rounded-4 shadow w-100 p-md-4 p-lg-4 p-xl-4">
      {placeInfo()}
      <div className="clearfix w-100 my-2"></div>
      <Share />
      <div className="clearfix w-100 my-1"></div>
      {related && related.length > 0 && (
        <div className="mt-5 d-block border-top pt-3">
          <h2 className="h6 font-weight-bold">Xem thêm {data.data.categories[0].name}</h2>
        </div>
      )}
      {showRelated()}
    </div>
  );
};

const ShowAsidePlaceLatest = ({ props = {} }) => {
  const data = props.placesListLatest.data.data.data;
  return (
    <>
      <div className="aside-group bg-white">
        <div className="pl-3 pr-3 pt-3">
          <h5 className="aside-title">Địa điểm mới cập nhật</h5>
        </div>
        {_.map(data, (e, i) => (
          <CardListNoPicture data={e} key={i} />
        ))}
      </div>
    </>
  );
};
// const ShowAsideDistrict = ({ props = {} }) => {
//   const data = props.placesListLatest.data.data.data;
//   const []
//   return (
//     <>
//       <div className="aside-group bg-white">
//         <div className="pl-3 pr-3 pt-3">
//           <h5 className="aside-title">Địa điểm mới cập nhật</h5>
//         </div>
        
//       </div>
//     </>
//   );
// };
const SinglePlaces = (props) => {
  const title = props.itemDetail.data.data.webSEO.title || null;
  const description = props.itemDetail.data.data.webSEO.description || null;
  return (
    <>
      <Layout
        title={title}
        description={description}
        keywords=""
        className="wrapper-site"
      >
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
                    {/* <ShowAsideDistrict props={props}/> */}
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
  const slug = query.slug;
  const citySlug = slug[0].replace('/', '');
  const districtSlug = slug[1].replace('/', '');
  const wardSlug = slug[2].replace('/', '');
  const nameSlug = slug[3].replace('/', '');
  const [itemDetail, placesListLatest] = await Promise.all([
    singlePlace(nameSlug).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return { data, query };
      }
    }),
    listPlacesByCategoryId(0, 0).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        return { data };
      }
    }),
  ]);

  return { itemDetail, placesListLatest };
};

export default SinglePlaces;
