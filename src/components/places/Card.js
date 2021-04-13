import Link from "next/link";
import { Row, Col, Figure } from "react-bootstrap";
import Image from "next/image";

const Card = ({ data }) => {
  const places = { ...data };

  return (
    <div className="place-item mt-2 mb-4 bg-white rounded p-4 hover-shadow-3">
      <Row>
        <Col xs={12} lg={3}>
          {places.logo && places.logo.length > 0 ? (
            <Link href={`/chi-tiet-dia-diem/${places.webSEO.slug}`}>
              <a className="d-block" title={places.name}>
                <Figure className="position-relative w-100 d-block figure-haft imageLinkWrapper mb-md-0">
                  <Image
                    alt={places.name}
                    className="img-fluid f-select"
                    width={350}
                    height={235}
                    layout="responsive"
                    src={places.logo[0]}
                  />
                </Figure>
              </a>
            </Link>
          ) : (
            <Link href={`/chi-tiet-dia-diem/${places.webSEO.slug}`}>
              <a className="d-block" title={places.name}>
                <Figure className="position-relative w-100 d-block figure-haft imageLinkWrapper mb-md-0">
                  <Image
                    alt={places.name}
                    priority={true}
                    objectFit="cover"
                    layout="fill"
                    className="img-fluid f-select"
                    src="/assets/images/logo/mapstore-logo-xs.png"
                  />
                </Figure>
              </a>
            </Link>
          )}
        </Col>
        <Col xs={12} lg={9}>
          <h3 className="item-name">
            <Link href={`/chi-tiet-dia-diem/${places.webSEO.slug}`}>
              <a
                className="d-block h5 font-weight-medium item-name-link"
                title={places.name}
              >
                {places.name}
              </a>
            </Link>
          </h3>
          <div className="item-address mb-1 text-gray">
            <address className="mb-0">
              <b>Địa chỉ:</b>
              {places.address}
              {places.ward && ", " + places.ward}
              {places.district && ", " + places.district}
              {places.city && ", " + places.city}
            </address>
          </div>
          <div className="item-phone mb-1 text-gray">
            <b>Điện thoại: </b>
            {places.phones}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
