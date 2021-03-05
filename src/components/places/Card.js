import Link from 'next/link';
import slugify from 'slugify'
import {Row, Col,Figure} from 'react-bootstrap'
import Image from 'next/image'

const Card = ({ data }) => {
    const places = {...data}

    return (
      <article className="place-item mt-2 mb-4">
        <Row>
          <Col xs={3} lg={2}>
            {
              data.logo && data.logo.length > 0 ? (
                <Figure className="position-relative w-100 d-block figure-haft imageLinkWrapper">
                  <Image alt={data.name} className="img-fluid f-select" width={900} height={600} layout='responsive' src={data.logo[0]}/>
                </Figure>
              ) : (
                <Figure className="position-relative w-100 d-block figure-haft imageLinkWrapper">
                  <Image alt={data.name} priority={true} objectFit="cover" layout='fill' className="img-fluid f-select" src="/assets/images/logo/mapstore_logo.png" />
                </Figure>
              )
            }
          </Col>
          <Col xs={9} lg={10}>
            <Link href={`/chi-tiet-dia-diem/${slugify(places.id, {lower: true})}`}>
                <a className="h6 font-weight-normal" title={places.name}>{places.name}</a>
            </Link>
            <address className="mb-0"><b>Địa chỉ:</b> {places.address}{places.ward && ', ' + places.ward}{places.district && ', ' + places.district}{places.city && ', ' + places.city}</address>
            <b>Điện thoại: </b> {places.phones}
          </Col>
        </Row>
      </article>
    );
};

export default Card;
