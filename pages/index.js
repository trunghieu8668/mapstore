import Layout from '../components/Layout'
import Header from '../components/common/Header'
import BannerSection from '../components/home/BannerSection'
import Footer from '../components/common/Footer'
export default function Home() {
  return (          
    <Layout title="Mapstore - Tìm là thấy" description="Trang thông tin địa điểm" keywords="thông tin công ty" className="wrapper-site bg-light">
      <section className="cover-intro" id="home">
        <div className="cover-intro-inner bg d-flex align-items-end flex-column">
          <Header />
          <BannerSection />
          <Footer />
        </div>
      </section>
    </Layout>          
  )
}
