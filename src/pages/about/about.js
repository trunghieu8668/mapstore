import { useRouter } from "next/router";
import Link from "next/link";
import Head from 'next/head';
import Layout from "../../components/Layout";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { aboutContent, nav } from '../../constant/about.content'

const AboutUs = () => {
  const router = useRouter()
  const title = "Giới thiệu";
  const description = "Giới thiệu chúng tôi";
  const keywords = "mapstore, gioi thieu mapstore"
  const url = process.env.NEXT_PUBLIC_SITE_URL
  const picture = `${process.env.NEXT_PUBLIC_SITE_URL}/assets/images/banner/mapstore-cover-fb.png`
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
        <section className="cover-intro" id="category">
          <div className="cover-intro-inner bg d-flex align-items-end flex-column">
            <Header isHome={false} />
            <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
              <div className="container">
                <div className="md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6">
                  <div className="md:col-span-1 bg-white p-3 rounded-lg">
                    <ul className="space-y-4">
                      {nav.map((post) => (
                        <li key={post.id} className="text-base truncate mt-1">
                          <Link href={post.href}>
                            <a title={post.name} className={`flex p-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100`} >
                              <post.icon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                              <span className="ml-3">{post.name}</span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:mt-0 md:col-span-2 lg:col-span-3 bg-white rounded-lg">
                    <div className="p-4">
                      <h1 className="h3 text-dark clearfix d-block">{title}</h1>
                      <div className="content-block">
                        <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </section>
      </Layout>
    </>
  );
};



export default AboutUs;
