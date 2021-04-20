import React from "react";
import Logo from "./Logo";
import SearchBar from "./HeaderSearchBar";
import Nav from "./Nav";
const Header = ({ isHome }) => {
  return (
    <>
      {isHome ? (
        <header
          id="Header"
          className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 position-relative bg-white border-bottom shadow-sm"
        >
          <p className="h6 my-0 mr-md-auto contact">
            Tổng đài hỗ trợ:{" "}
            <a href="tel:+84967600330" className="phone-contact">
              0967 600 330
            </a>
          </p>
          <nav className="my-2 my-md-0 me-md-3">
            <a className="p-2 text-dark" href="#">
              Đăng ký
            </a>
            <a className="p-2 text-dark" href="#">
              Đăng nhập
            </a>
            <a className="p-2 text-dark" href="#">
              Tin tức
            </a>
            <a className="p-2 text-dark" href="#">
              Liên hệ
            </a>
            <a className="p-2 text-dark" href="#">
              Hỗ trợ trực tuyến
            </a>
          </nav>
        </header>
      ) : (
        <header
          id="Header"
          className="px-md-4 position-relative bg-white shadow-sm border-bottom container-fluid"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="my-0 col-3 col-md-auto header-logo">
                <Logo />
              </div>
              <div className="my-0 col-9 col-md-auto mr-md-auto flex-grow-1">
                <SearchBar />
              </div>
              <div className="my-0 mr-md-auto flex-grow-1 h-100 d-none d-md-flex">
                <div className="header-mega-menu loding-header custom-scroll">
                  <nav className="nav float-right">
                    <Nav />
                  </nav>
                </div>
              </div>
            </div>

          </div>
        </header>
      )}
    </>
  );
};

export default Header;
