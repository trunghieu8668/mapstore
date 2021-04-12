import useSWR from 'swr'

import Layout from "../components/Layout";
import Header from "../components/common/Header";
// import BannerSection from "../components/home/BannerSection";
import Footer from "../components/common/Footer";
import PlacesList from "../components/home/PlacesList";
import { listPlacesByCategoryId } from "../actions/places";
import { API, APIKEY, PAGESIZE } from "../../config";
import fetcher from '../helpers/Fetcher'

import WithHeaderScroll from "../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);

// export function Home({ data = {} }) {
//   return (
//     <Layout
//       title="Mapstore - Tìm là thấy"
//       description="Trang thông tin địa điểm"
//       keywords="thông tin công ty"
//       className="wrapper-site"
//     >
//       <ScrollHeader isHome={false} />
//       <section className="clearfix">
//         <div className="d-flex align-items-end flex-column">
//           {/* <Header isHome={true} /> */}

//           {/* <BannerSection /> */}
//           <PlacesList data={data} />
//           <Footer />
//         </div>
//       </section>
//     </Layout>
//   );
// }

// Home.getInitialProps = async ({ query }) => {
//   //const slug = query.slug.replace(/-/g, "_");
//   const page = query.page !== undefined ? query.page : 1;
//   //slugify(query.slug, {lower: true, locale: 'vi', replacement: '_'}).replace("-", "_");
//   return await listPlacesByCategoryId(0, page - 1).then((data) => {
//     if (data.message) {
//       console.log(data.message);
//     } else {
//       return { data: data.data };
//     }
//   });
// };

const page = 0;
const api = `/public/places?categoryId=0&cityId=0&districtId=0&pageIndex=${page !== undefined ? page : 0
  }&pageSize=${PAGESIZE}`

export async function getStaticProps() {
  const posts = await fetcher(api)
  return { props: { posts } }
}

const Home = (props) => {
  const { data } = useSWR(api, fetcher, { initialData: props.posts })
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
          <PlacesList data={data.data} />
          <Footer />
        </div>
      </section>
    </Layout>
  );
}


export default Home;
