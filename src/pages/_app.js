import React from 'react';
import NextApp from 'next/app';
// Package
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/globals.css"
import "../assets/scss/theme.scss";
// Style
import "../assets/plugins/flaticon/flaticon.css";
import "../assets/plugins/flaticon2/flaticon.css";
import "bootstrap-icons/font/bootstrap-icons.css"


export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}