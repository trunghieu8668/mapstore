import React, { useState, useEffect, useRef } from "react";
// Config
import { API, APIKEY, PAGESIZE } from "../../config";
// Package
import _ from "lodash";
import Router, { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
// Component
import Layout from "../components/Layout";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Card from "../components/places/Card";
import Skeleton from "../components/places/Skeleton";
// Call Api
import { listPlacesByCategoryId } from "../actions/places";
// HOC
import WithHeaderScroll from "../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);

const Home = ({ data }) => {
  // Route
  const router = useRouter();
  // State
  const [isLoading, setLoading] = useState(false);
  const dataListRef = useRef(null);
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
  return (
    <Layout
      title="Mapstore - Tìm là thấy"
      description="Trang thông tin địa điểm"
      keywords="thông tin công ty"
      className="wrapper-site"
    >
      <ScrollHeader isHome={false} />
      <section className="clearfix">
        <div className="d-flex align-items-end flex-column">
          <section className="container-fluid bg-light jumbotron jumbotron-fluid border-top">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                  <div
                    className="clearfix bg-white shadow-sm p-md-3 w-100"
                    ref={dataListRef}
                  >
                    <h2 className="text-center">Địa điểm mới cập nhật</h2>
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
