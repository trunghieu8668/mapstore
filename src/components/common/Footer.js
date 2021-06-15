import React from "react";
import slugify from "slugify";
const Footer = () => {
  return (
    <>
      <footer className="footer mt-auto text-center text-small position-relative bg-light w-100 border-top pt-3 bg-light">
        <ul className="ul-link list-inline">
          <li className="item list-inline-item ml-3">
            <a className="text-muted" href="/chi-tiet-tin-tuc/gioi-thieu.html">
              Giới thiệu
            </a>
          </li>
          <li className="item list-inline-item ml-3">
            <a className="text-muted" href="#">
              Hướng dẫn
            </a>
          </li>
          <li className="item list-inline-item ml-3">
            <a className="text-muted" href="#">
              Điều khoản
            </a>
          </li>
          <li className="item list-inline-item ml-3">
            <a className="text-muted" href="#">
              Giải pháp 
            </a>
          </li>
          <li className="item list-inline-item ml-3">
            <a className="text-muted" href="#">
              Blog
            </a>
          </li>
          <li className="item list-inline-item ml-3">
            <a className="text-muted" href="#">
              Liên hệ
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
