import React from "react";
import Head from "next/head";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
const Layout = ({
  title = "",
  description = "",
  keywords = "",
  className,
  children,
}) => {
  const setGoogleTags = () => {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-THTEBYF205');
      `,
    };
  };
  const setFacebookMessage = () => {
    return {
      __html: `<!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v10.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

      <!-- Your Chat Plugin code -->
      <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="113663837490091">
      </div>`,
    };
  };
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{title}</title>
        <meta
          name="description"
          content={description ? description.substring(0, 158) : null}
        />
        <meta name="keywords" content={keywords} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/assets/images/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/assets/images/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/assets/images/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/assets/images/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/assets/images/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/assets/images/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/assets/images/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/assets/images/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/assets/images/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/images/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/images/favicon/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="google-site-verification"
          content="I_l8BXUGaEFOFshCAMmOpcdtRoPFHZ2BGFz3sw0jaS0"
        />
        <React.Fragment>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-THTEBYF205"
          ></script>
          <script dangerouslySetInnerHTML={setGoogleTags()} />
        </React.Fragment>
      </Head>
      <main className={className}>{children}</main>
      <React.Fragment>
        <div dangerouslySetInnerHTML={setFacebookMessage()} />
      </React.Fragment>
    </React.Fragment>
  );
};

export default Layout;
