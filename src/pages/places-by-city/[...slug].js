import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import Image from "next/image";
import dynamic from 'next/dynamic'
import { Figure, Container, Row, Col } from "react-bootstrap";
import { map } from "lodash";
import { useRouter } from "next/router";
// Call api
import {
  singlePlace,
  listRelated,
  listPlacesByCategoryId,
} from "../../actions/places";
// components
import Layout from "../../components/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import WithHeaderScroll from "../../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);
// Code splitting 
const Card = dynamic(() => import("../../components/places/Card"));
const Share = dynamic(() => import("../../components/common/Share"));
const CardListNoPicture = dynamic(() => import("../../components/places/CardListNoPicture"));
const CardDetail = dynamic(() => import("../../components/places/CardDetail"));


const ShowPlaceDetail = ({ props = {} }) => {
  // const router = useRouter();
  // const slug = router.query.slug || [];
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
        <CardDetail data={data} />
      </>
    );
  };
  return (
    <div className="bg-white rounded-4 shadow box__content w-100 p-md-4 p-lg-4 p-xl-4">
      {placeInfo()}
      <div className="clearfix w-100 my-2"></div>
      <Share />
      <div className="clearfix w-100 my-1"></div>
      {related && related.length > 0 && (
        <div className="mt-5 d-block border-top pt-3 px-3">
          <h2 className="h5 font-weight-bold">Xem thêm {data.data.categories[0].name}</h2>
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
        <div className="px-3 pt-3">
          <h5 className="aside-title">Địa điểm mới cập nhật</h5>
        </div>
        {map(data, (e, i) => (
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
  
  return (
    <>
      <Layout
        title="asdada"
        description="adsdadad"
        url="adadada"
        picture="adadada"
        keywords=""
        className="wrapper-site"
      >
        <section className="clearfix h-100" id="category">
          <div className="cover-intro-inner bg d-flex align-items-end flex-column">
            <ScrollHeader isHome={false} />
            <div className="wrapper-contain clearfix w-100 pt-md-4 pb-md-4 position-relative">
              <Container className="px-0 px-md-2">
                <Row>
                  <Col md={8} lg={8}>
                    {/* <ShowPlaceDetail props={props} /> */}
                  </Col>
                  <Col md={4} lg={4}>
                    {/* <ShowAsideDistrict props={props}/> */}
                    {/* <ShowAsidePlaceLatest props={props} /> */}
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
  

  return { itemDetail: {
    title: "sdsds",
    description: "ssdsds",
    logo: "adad",
    pictures: "asdada"
  }, placesListLatest: {} };
};

SinglePlaces.propTypes = {
  props: PropTypes.object
}

export default SinglePlaces;
