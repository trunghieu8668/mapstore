/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Head from 'next/head';
import PropTypes from "prop-types"
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { Container, Row, Col } from "react-bootstrap";
import { map } from "lodash";

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
// import { FbComponent } from "../../components/common/Facebook";
const ScrollHeader = WithHeaderScroll(Header);
// Code splitting 
const Card = dynamic(() => import("../../components/places/Card"));
const CardListNoPicture = dynamic(() => import("../../components/places/CardListNoPicture"));
const CardDetail = dynamic(() => import("../../components/places/CardDetail"));



const ShowPlaceDetail = ({ props = {} }) => {
  const data = props.itemDetail.data || {};
  const query = props.itemDetail.query;
  const [related, setRelated] = useState([]);

  // State
  const categoryId = props.itemDetail.categoryId.id

  const loadRelated = async (id) => {
    if (id !== 0) {
      console.log(id)
      const data = await listRelated(id);
      setRelated(data.data.data.filter((el) => el.webSEO.slug !== id.slug));
    }
  };
  useEffect(() => {
    loadRelated(categoryId);
  }, [categoryId]);
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
      {/* <div className="pt-3">
        <h5 className="aside-title h6">Bình luận facebook</h5>

      </div>
      <div className="d-block mb-4">
        <FbComponent url={router.asPath} />
      </div> */}
      <div className="clearfix w-100 my-1"></div>
      {related && related.length > 0 && (
        // <div className="mt-5 d-block border-top pt-3 px-3">
        //   <h2 className="h5 font-weight-bold"></h2>
        // </div>
        <div className="pt-3">
          <h2 className="aside-title h6">Xem thêm {data.data.categories[0].name}</h2>
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
  const url = props.itemDetail && props.itemDetail.url
  const title = props?.itemDetail && props?.itemDetail?.data?.data?.webSEO?.title || null;
  const description = props?.itemDetail && props?.itemDetail?.data?.data?.webSEO?.description || null;
  const logo = props?.itemDetail?.data?.data?.logo;
  const pictures = props.itemDetail.data.data.pictures;
  // const picture = props.itemDetail && props?.itemDetail?.data?.data?.pictures && props.itemDetail.data.data.pictures.length > 0 ? props.itemDetail.data.data.pictures[0] : "https://mapstore.vn/assets/images/logo/mapstorelogo_nobg_white.png"
  const getSrc = (logo, pictures) => {
    let picture = ""
    // Logo
    if (logo !== null) {
      picture = logo;
    }
    // Pictures[0]
    if (logo === null && pictures.length > 0) {
      picture = pictures[0];

    }
    return picture;
  }
  const picture = pictures ? getSrc(logo, pictures) : "https://mapstore.vn/assets/images/logo/mapstorelogo_nobg_white.png"
  const keywords = title
  const head = () => (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{title && title.toUpperCase()}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:url" itemProp="url" content={url} />
      <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_APP_ID} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="vi_VN" />
      <meta property="og:image" content={picture} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_SITE_NAME} />
      <meta property="article:author" content={process.env.NEXT_PUBLIC_ARTICLE_AUTHOR} />
      <meta property="article:publisher" content={process.env.NEXT_PUBLIC_ARTICLE_PUBLISHER} />
    </Head>
  )
  return (
    <>
      {head()}
      <Layout>
        <section className="clearfix h-100" id="category">
          <div className="cover-intro-inner bg d-flex align-items-end flex-column">
            <ScrollHeader isHome={false} />
            <div className="wrapper-contain clearfix w-100 pt-md-4 pb-md-4 position-relative">
              <Container className="px-md-2">
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
  const citySlug = slug[0];
  const districtSlug = slug[1];
  const wardSlug = slug[2];
  const nameSlug = slug[3].replace('/', '');
  const url = `${process.env.DOMAIN_PRODUCTION}/dia-diem/${citySlug}/${districtSlug}/${wardSlug}/${nameSlug}`
  const [itemDetail, placesListLatest] = await Promise.all([
    singlePlace(nameSlug).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        const categoryId = { id: (data.data.categories[0].id) }
        return { data, categoryId, query, url };
      }
    }),
    // dia diem moi cap nhat
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

SinglePlaces.propTypes = {
  props: PropTypes.object
}

export default SinglePlaces;
