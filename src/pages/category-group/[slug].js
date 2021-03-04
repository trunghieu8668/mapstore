import { Container, Row, Col } from 'reactstrap';
import Layout from '../../components/Layout'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { listAllGroupCategory } from '../../actions/places';
import moment from 'moment';
import Card from '../../components/places/Card';
import ListByCity from '../../components/sidebar/listByCity'
import WithHeaderScroll from "../../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);


const CategoryGroup = ({ data, query }) => {
  const categoryGroup = data.data.data;
  const formatSlug = query.slug.replace("-", "_")
  const list = categoryGroup.filter(t => t.id === formatSlug );
  const title = list[0].name;
  const description = null;

  return (
    <>
      
      <Layout title={title} description={description} keywords="" className="wrapper-site bg-light">
        <section className="cover-intro" id="category">
          <div className="cover-intro-inner bg d-flex align-items-end flex-column">
            <ScrollHeader isHome={false} />
            <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
              <Container>
                <h1 className="h3 text-dark clearfix d-block ">{title}</h1>
                <Row>
                  <Col md={8} lg={9}>                    
                    {list[0].categories.map((b, i) => (
                      <div key={i}>{b.label}</div>
                    ))}
                  </Col>
                  <Col md={4} lg={3}>
                    <ListByCity />
                  </Col>
                </Row>
              </Container>
            </div>
            <Footer />
          </div>
        </section>
      </Layout>
    </>
  );
};

CategoryGroup.getInitialProps = async ({ query }) => {
  return await listAllGroupCategory().then(data => {
    if (data.message) {
      console.log(data.message);
    } else {
      return { data, query };
    }
  });
};

export default CategoryGroup;
