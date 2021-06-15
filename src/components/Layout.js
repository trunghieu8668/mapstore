import React from "react";
import Head from "next/head";

const Layout = ({
  title = "",
  description = "",
  keywords = "",
  url = "",
  picture = "",
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
        {/* <!--facebook Metadata /--> */}
        <meta property="og:url" itemProp="url" content={url} />
        <meta property="fb:app_id" content="1725496681047071" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:image" content={picture} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="mapstore.vn" />
        <meta property="article:author" content="https://www.facebook.com/Mapstorevn-113663837490091" />
        <meta property="article:publisher" content="https://mapstore.vn" />
      </Head>
      <main className={className}>{children}</main>

    </React.Fragment>
  );
};

export default Layout;
