import Link from 'next/link';
import { Row, Col, Figure } from 'react-bootstrap'
import slugify from 'slugify';

const CardListNoPicture = ({ data }) => {
  const places = { ...data }

  return (
    <div className="place-item mb-2 bg-white rounded px-3 py-1 hover-shadow-3">
      <Row>
        <Col xs={12} lg={12}>
          <h3 className="item-name">
            <Link href={`/chi-tiet-dia-diem/${slugify(places.id, { lower: true })}`}>
              <a className="d-block font-size-4 font-weight-medium item-name-link" title={places.name}>{places.name}</a>
            </Link>
          </h3>
          <p className="item-address mb-1 text-muted"><address className="mb-0"><b className="text-muted">Địa chỉ:</b> {places.address}{places.ward && ', ' + places.ward}{places.district && ', ' + places.district}{places.city && ', ' + places.city}</address></p>
          {/* <p className="item-phone mb-1 text-gray"><b>Điện thoại: </b> {places.phones} </p> */}
        </Col>
      </Row>
    </div >
  );
};

export default CardListNoPicture;