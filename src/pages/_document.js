import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-EMK0T436Q8');
        `
      };
    }
  }

  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta charSet="UTF-8" />
          <React.Fragment>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-EMK0T436Q8"></script>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </React.Fragment>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;