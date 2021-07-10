import React, { useState, useEffect, useRef } from "react";
import dynamic from 'next/dynamic'
import Head from 'next/head';

// Config
import { API, APIKEY, PAGESIZE } from "../../config";
// Package
import _ from "lodash";
import Router, { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
// Component
// import Layout from "../components/Layout";
import Header from "../components/common/Header";
// import Footer from "../components/common/Footer";
// import Card from "../components/places/Card";
// import Skeleton from "../components/places/Skeleton";

// Call Api
import { listPlacesByCategoryId } from "../actions/places";
// HOC
import WithHeaderScroll from "../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);
// Code Spi
const Layout = dynamic(() => import("../components/Layout"));
const Footer = dynamic(() => import("../components/common/Footer"));
const Card = dynamic(() => import('../components/places/Card'));
const Skeleton = dynamic(() => import('../components/places/Skeleton'))

const Home = ({ data }) => {
  // Route
  const router = useRouter();
  // State
  const [isLoading, setLoading] = useState(false);
  const dataListRef = useRef(null);
  const title = "Mapstore - Tìm là thấy";
  const description = "Trang thông tin địa điểm";
  const keywords = "thông tin công ty"
  const url = process.env.NEXT_PUBLIC_SITE_URL
  const picture = `${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/banner/mapstore-cover-fb.png`
  // Paging
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const [currentPage, setCurrentPage] = useState(
    (router.query && Math.floor(router.query.page - 1)) || 0
  );
  const total = data && data.total > 0 ? data.total : 0;
  const pageCount = Math.ceil(total / PAGESIZE);
  useEffect(() => {
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);
    return () => {
      Router.events.off("routeChangeStart", startLoading);
      Router.events.off("routeChangeComplete", stopLoading);
    };
  }, []);

  const paginationHandler = (page) => {
    const currentPath = router.pathname;
    const currentQuery = router.query;
    currentQuery.page = page.selected + 1;
    router.push({
      pathname: currentPath,
      query: currentQuery,
    });
    setCurrentPage(page.selected);
    dataListRef.current.scrollIntoView();
  };
  let content = null;
  if (isLoading) content = <Skeleton count={10} />;
  else {
    content = (
      <>
        {_.map(data.data, (b, i) => (
          <Card key={i} data={b} />
        ))}
      </>
    );
  }

  const head = () => (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
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
    <React.Fragment>
      {head()}
      <Layout>
        <ScrollHeader isHome={false} />
        <section className="clearfix ">
          <div className="d-flex align-items-end flex-column">
            <section className="container-fluid bg-light jumbotron jumbotron-fluid border-top px-0 px-md-2">
              <div className="container px-md-2">
                <div className="row">
                  <div className="col-12 col-lg-10 offset-lg-1">
                    <div
                      className="clearfix bg-white shadow-sm py-3 md:p-3 p-md-3 w-100 box__content"
                      ref={dataListRef}
                    >
                      <h2 className="text-center text-3xl font-bold">Địa điểm mới cập nhật</h2>
                      {content}
                      <div className="clearfix w-100"></div>
                      <div className="d-flex justify-content-center">
                        <ReactPaginate
                          previousLabel={"«"}
                          nextLabel={"»"}
                          breakLabel={"..."}
                          breakClassName={"page-item"}
                          breakLinkClassName={"page-link"}
                          pageCount={pageCount}
                          forcePage={currentPage}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={2}
                          onPageChange={paginationHandler}
                          containerClassName={"pagination float-right"}
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active"}
                          pageClassName={"page-item"}
                          pageLinkClassName={"page-link"}
                          previousClassName={"page-item"}
                          nextClassName={"page-item"}
                          previousLinkClassName={"page-link"}
                          nextLinkClassName={"page-link"}
                          disabledClassName="disabled"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
};

Home.getInitialProps = async ({ query }) => {
  const page = query.page || 1;
  return await listPlacesByCategoryId(0, page - 1).then((data) => {
    if (data.message) {
      console.log(data.message);
    } else {
      return { data: data.data };
    }
  });
};

export default Home;
