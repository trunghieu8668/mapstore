import Link from "next/link";
import { Row, Col, Figure } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import { DecodeUnicode } from '../../helpers/Util'
const prismicLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

const Card = ({ data }) => {
  const router = useRouter();
  const places = { ...data };
  const slug = `/dia-diem${places.webSEO.fullSlug}`;
  const phones = places.phones && places.phones.length > 0 ? places.phones[0] : null
  const name = places.name



  const getSrc = (logo, pictures) => {
    let picture = ""
    // Logo
    if (logo !== null) {
      picture = logo;
    }
    // Pictures[0]
    if (logo === null && pictures.length > 0) {
      picture = pictures[0];
    }
    return picture
  }
  return (
    <div className="place-item mt-2 mb-4 bg-white rounded p-4 hover-shadow-3">
      <Row>
        <Col xs={4} lg={3}>
          <Link
            href={slug}
            onClick={() => {
              router.push({
                pathname: "/dia-diem/[city]/[district]/[ward]/[id]",
                query: {
                  city: DecodeUnicode(places.city),
                  district: DecodeUnicode(places.district),
                  ward: DecodeUnicode(places.ward),
                  id: places.webSEO.slug
                }
              });
            }}
          >
            <a className="d-block" title={name}>
              <Figure className="position-relative w-100 d-block figure-haft imageLinkWrapper mb-md-0">
                <Image
                  loader={prismicLoader}
                  alt={name}
                  className="img-fluid f-select"
                  priority={true}
                  objectFit="contain"
                  layout="fill"
                  src={getSrc(places.logo, places.pictures) || "/assets/images/logo/mapstore-logo-ver.png"}
                />
              </Figure>
            </a>
          </Link>
        </Col>
        <Col xs={8} lg={9}>
          <h3 className="item-name">
            <Link
              href={slug}
              onClick={() => {
                router.push({
                  pathname: "/dia-diem/[city]/[district]/[ward]/[id]",
                  query: {
                    city: DecodeUnicode(places.city),
                    district: DecodeUnicode(places.district),
                    ward: DecodeUnicode(places.ward),
                    id: places.webSEO.slug
                  }
                });
              }}
            >
              <a
                className="d-block h5 font-weight-medium item-name-link"
                title={name}
              >
                {name}
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
            {phones && (
              <>
                <b>Điện thoại: </b> <a href={`tel:${phones}`} title={phones}>{phones}</a>
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
