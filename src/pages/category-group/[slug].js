import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import Layout from '../../components/Layout'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { listAllGroupCategory, listPlacesByCategoryId } from '../../actions/places';
import slugify from 'slugify'
import moment from 'moment';
import Card from '../../components/places/Card';
// import ListByCity from '../../components/sidebar/listByCity'
import WithHeaderScroll from "../../common/WithHeaderScroll";
const ScrollHeader = WithHeaderScroll(Header);


const CategoryGroup = ({ data, query }) => {
  const categoryGroup = data && data.status === 0 ? data.data.data : [];
  const formatSlug = query.slug.replace("-", "_")
  const list = categoryGroup ? categoryGroup.filter(t => t.id === formatSlug ) : [];
  const title = list && list.length > 0 ? list[0].name : '';
  const description = null;
  const [categoryGroupValue, setCategoryGroupValue] = useState({"categoryId":null})
  const [dataValues, setDataValues] = useState({})
  const handleChangeChecked = name => event => {
    const value = event.target.value;
    setCategoryGroupValue({ ...categoryGroupValue, [name]: value })
  }
  const init = () => {
    categoryGroupValue.categoryId !== null && listPlacesByCategoryId(slugify(categoryGroupValue.categoryId, {lower: true, strict: true, locale: 'vi', replacement: '_'})).then(data => {
      if (data.message) {
        console.log(data.message);
      } else {
        return setDataValues(data);
      }
    });
  }
  useEffect(()=> {
    init()
  },[categoryGroupValue])
  return (
    <>

      <Layout title={title} description={description} keywords="" className="wrapper-site bg-light">
        <section className="cover-intro" id="category">
          <div className="cover-intro-inner bg d-flex align-items-end flex-column">
            <ScrollHeader isHome={false} />
            <div className="wrapper-contain clearfix w-100 pt-4 pb-4 position-relative">
              <Container>
                <Row>
                  <Col md={5} lg={4} xl={4}>
                    <h4 className="font-size-6 font-weight-semibold mb-6">Danh mục</h4>
                    <div className="list-unstyled filter-check-list">
                      {list && list.length > 0 && list[0].categories.map((b, i) => (
                        <Form.Check
                          key={i}
                          className="mb-2 item"
                          defaultChecked={i === 0 ? true : false}
                          type="radio"
                          value={b.label}
                          label={b.label}
                          name="filterCheckListRadios"
                          id={slugify(b.label, {lower: true, strict: true, locale: 'vi', replacement: '-'}) + '-' + i}
                          onChange={handleChangeChecked("categoryId")}
                        />
                      ))}
                    </div>
                  </Col>
                  <Col md={8} lg={8}>
                    <h1 className="h3 text-dark clearfix d-block ">{title}</h1>
                    {dataValues && dataValues.status === 0 && dataValues.data.total > 0 ? (
                      dataValues.data.data.map((b, i) => (
                        <Card key={i} data={b} />
                      ))
                    ) : (
                      <>Không tìm thấy</>
                    )}
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
