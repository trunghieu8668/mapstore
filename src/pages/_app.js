import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import NProgress from 'nprogress';
import getConfig from 'next/config'
import { ToastContainer } from 'react-toastify';
// Package
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "../assets/scss/theme.scss";
// Style
import "../assets/plugins/flaticon/flaticon.css";
import "../assets/plugins/flaticon2/flaticon.css";
import "bootstrap-icons/font/bootstrap-icons.css"

const MessengerChat = dynamic(() => import('../components/common/MessengerChat')) ;
const Addthis = dynamic(() => import('../components/common/Addthis'));

const { publicRuntimeConfig = {} } = getConfig() || {};

NProgress.configure({ showSpinner: publicRuntimeConfig.NProgressShowSpinner });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

function MyFunctionComponent({ children }) {
  // const [loader, setLoader] = useState(true)
  // const [goingUp, setGoingUp] = useState(false)

  // useEffect(() => {
  //   // Page Loader
  //   setTimeout(() => {
  //     setLoader(false)
  //   }, 1500)

  //   // Tap to Top Scroll 
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > 500)
  //       setGoingUp(true);
  //     else
  //       setGoingUp(false);
  //   };
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [goingUp]);

  // const tapToTop = () => {
  //   window.scrollTo({
  //     behavior: "smooth",
  //     top: 0
  //   });
  // }

  return (
    <>
      {/* {loader &&
        <div className="loader-wrapper">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>} */}
      <>{children}</>
      {/* <div className="tap-top" style={goingUp ? { display: 'block' } : { display: 'none' }} onClick={tapToTop}>
        <div><i className="fa fa-angle-double-up"></i></div>
      </div> */}
    </>
  )
}

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <MyFunctionComponent>
        <Component {...pageProps} />
        <MessengerChat />
        <Addthis />
      </MyFunctionComponent>
      <ToastContainer />
    </>
  )
}