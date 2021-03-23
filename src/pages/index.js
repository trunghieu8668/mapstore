import Layout from '../components/Layout'
import Header from '../components/common/Header'
import BannerSection from '../components/home/BannerSection'
import Footer from '../components/common/Footer'
import PlacesList from '../components/home/PlacesList'
import { listPlacesByCategoryId } from '../actions/places';

import WithHeaderScroll from "../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);

export function Home({ data = {} }) {
  return (
    <Layout title="Mapstore - Tìm là thấy" description="Trang thông tin địa điểm" keywords="thông tin công ty" className="wrapper-site">
      <ScrollHeader isHome={false} />
      <section className="clearfix">
        <div className="d-flex align-items-end flex-column">
          {/* <Header isHome={true} /> */}

          {/* <BannerSection /> */}
          <PlacesList data={data} />
          <Footer />
        </div>
      </section>
    </Layout>
  )
}



Home.getInitialProps = async ({ query }) => {
  //const slug = query.slug.replace(/-/g, "_");
  const page = query.page !== undefined ? query.page : 1;
  //slugify(query.slug, {lower: true, locale: 'vi', replacement: '_'}).replace("-", "_");
  return await listPlacesByCategoryId(0, page).then(data => {
    if (data.message) {
      console.log(data.message);
    } else {
      return { data: data.data };
    }
  });
};

export default Home