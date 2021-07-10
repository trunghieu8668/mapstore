/* eslint-disable react/display-name */
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";


import { Figure, Tabs, Tab } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import parse from "html-react-parser";
import Alert from './Alert'
import { map } from "lodash";
import { PLACES_URL } from "../../../config";
import 'react-image-gallery/styles/css/image-gallery.css';
import Share from "../../components/common/Share"


const prismicLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 85}`
}
const CardDetail = ({ data }) => {
  const newData = { ...data.data };
  const logoData = newData.logo;
  const picturesData = [...newData.pictures];
  const _pictures = ''



  // const [isShowLogo, setShowLogo] = useState(false)
  // picturesData.length > 0 && logoData !== null && setShowLogo(true)
  // console.log(picturesData.length)
  // console.log(logoData)
  // const getSrc = (logo, pictures) => {
  //   let picture = ""
  //   // Logo
  //   if (logo !== null) {
  //     picture = logo;
  //   }
  //   // Pictures[0]
  //   if (logo === null && pictures.length > 0) {
  //     picture = pictures[0];

  //   }
  //   return picture;
  // }
  const imagePlaces = data && data.data.pictures && data.data.pictures.length > 0 && map(data.data.pictures, picture => {
    return {
      original: picture,
      thumbnail: picture,
      renderItem: () => {
        return (
          <>
            <Figure className="position-relative w-100 d-block h-100 places-image mb-lg-0">
              <Image
                loader={prismicLoader}
                src={picture}
                alt={data.data.name}
                priority={true}
                objectFit="cover"
                layout="fill"
                className="logo-img img-fluid f-select"
                quality={85}
              />
            </Figure>
          </>
        )
      }
    }
  })
  return (
    <>
      <div className="places-detail-wrapper px-md-0 py-4 py-md-0">
        <div className="row pl-xs-12 mb-8 text-xs-left">
          {
            data && data.data.pictures && data.data.pictures.length > 0 && (
              <>
                <div className="col-12 mb-4">
                  <ImageGallery
                    items={imagePlaces}
                    className="Slider-img"
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={data && data.data.pictures && data.data.pictures.length > 2 ? true : false}
                    showNav={false}
                    showBullets={false}
                    autoPlay={false}
                    lazyLoad={true}
                    thumbnailPosition={data && data.data.pictures && data.data.pictures.length > 2 ? "right" : "bottom"}
                  />
                </div>
              </>
            )
          }
          {/* <div className={ isShowLogo ? "col-3 col-lg-3" : "d-none"}>
            <Figure className="position-relative w-100 d-block figure-haft">
              <Image
                loader={prismicLoader}
                alt={data.data.name}
                priority={true}
                objectFit="contain"
                layout="fill"
                className="img-fluid f-select"
                src={getSrc(data.data.logo, data.data.pictures) || "/assets/images/logo/mapstore-logo-ver.png"}
              />
            </Figure>
          </div> */}
          <div className="col-12 col-lg-12">
            <h1 className="font-size-7 text-black-2 font-weight-semibold mb-0">
              {data.data.name}
            </h1>
            <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-max">
              <div className="m-2">
                {data.data.categories &&
                  map(data.data.categories, (category, i) => (
                    <h2 key={i}>
                      <Link
                        href={`/${PLACES_URL}/${category.id.replace(
                          /_/g,
                          "-"
                        )}`}
                      >
                        <a
                          className="h6 font-weight-normal"
                          title={category.name}
                        >
                          {category.name}
                        </a>
                      </Link>
                    </h2>
                  ))}
              </div>

              <div className="m-2">
                <Share />
              </div>
            </div>

          </div>
        </div>
        <Tabs className="tab-menu-items mt-3" defaultActiveKey="tab-1">
          <Tab
            tabClassName="tab-menu-link"
            eventKey="tab-1"
            title="Thông tin công ty"
          >
            <ul className="list-unstyled">
              <li className="item h6 font-weight-normal mb-md-3">
                <address className="mb-0">
                  <span className="d-md-none fw-bold">Địa chỉ: </span>
                  <span className="icons me-1 d-none d-md-inline-block">
                    <i className="bi bi-geo-alt"></i></span>
                  {data.data.address}
                  {data.data.ward && ", " + data.data.ward}
                  {data.data.district && ", " + data.data.district}
                  {data.data.city && ", " + data.data.city}
                </address>
              </li>
              <li className="item h6 font-weight-normal mb-0 mb-md-3">
                <ul className="row list-unstyled">
                  <li className="col-12 col-md-6">
                    <span className="d-md-inline mr-md-4 mr-2">
                      <span className="d-md-none fw-bold">Số điện thoại: </span>
                      <span className="icons me-2 d-none d-md-inline-block"><i className="bi bi-telephone"></i> </span>
                      {data.data.phones && data.data.phones.length > 0 ? (
                        <a
                          href={`tel:${data.data.phones}`}
                          title={data.data.phones}
                        >
                          {data.data.phones}
                          {/* <NumberFormat value="0916033960" displayType={'text'}/> */}
                        </a>
                      ) : (<span className="text-notfound text-muted text-italic">
                        Đang cập nhật
                      </span>)}
                    </span>
                  </li>
                  <li className="col-12 col-md-6">
                    <span>
                      <span className="d-inline-block d-md-none my-2 fw-bold">Mã số thuế: </span>
                      <span className="icons me-1 d-none d-md-inline-block"><i className="bi bi-person-badge"></i> </span>{" "}
                      {data.data.taxCode ? (
                        <span>{data.data.taxCode}</span>
                      ) : (
                        <span className="text-notfound text-muted text-italic">
                          Đang cập nhật
                        </span>
                      )}
                    </span>
                  </li>
                </ul>


              </li>
              <li className="item h6 font-weight-normal mb-md-3">
                <ul className="row list-unstyled">
                  <li className="col-12 col-md-6">
                    <span className="d-md-inline mr-md-4 mr-2">
                      <span className="d-inline-block d-md-none fw-bold">Website: </span>
                      <span className="icons me-1 d-none d-md-inline-block"><i className="bi bi-link-45deg"></i> </span>{" "}
                      {data.data.website ? (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={`${data.data.website}`}
                          title={data.data.name}
                        >
                          {data.data.website}
                        </a>
                      ) : (
                        <span className="text-notfound text-muted text-italic">
                          Đang cập nhật
                        </span>
                      )}
                    </span>
                  </li>
                  <li className="col-12 col-md-6">
                    <span>
                      <span className="d-inline-block d-md-none my-2 fw-bold">Email: </span>
                      <span className="icons me-1 d-none d-md-inline-block"><i className="bi bi-envelope"></i> </span>{" "}
                      {data.data.email ? (
                        <a
                          href={`mailto:${data.data.email}`}
                          title={data.data.email}
                        >
                          {data.data.email}{" "}
                        </a>
                      ) : (
                        <span className="text-notfound text-muted text-italic">
                          Đang cập nhật
                        </span>
                      )}
                    </span>
                  </li>
                </ul>
              </li>
              <li className="item h6 font-weight-normal mb-md-3">
                <span className="text-muted small">
                  <span className="icons mr-1"> Ngày tạo: </span>{" "}
                  {data.data.createdDate && (
                    <time>{new Date(data.data.createdDate).toLocaleString('en-GB')}</time>
                  )}
                </span>
                <span className="text-muted small mx-3">
                  <span className="icons mr-1"> Ngày cập nhật: </span>{" "}
                  {data.data.lastUpdatedDate && (
                    <time>{new Date(data.data.lastUpdatedDate).toLocaleString('en-GB')}</time>
                  )}
                </span>
                <span className="text-muted small">
                  <span className="icons mr-1"> Lượt xem: </span>{" "}
                  <span>{data.data.views.toLocaleString('en-US')}</span>
                </span>
              </li>
            </ul>
            <Alert />
            <div className="d-block mt-5 mb-4">
              <h3 className="h4 font-weight-medium">GIỚI THIỆU</h3>
              <div className="clearfix"></div>
              <div className="post-article d-block mt-3">
                {data.data.description ? (
                  // <article dangerouslySetInnerHTML={{ __html: data.data.description }} />
                  <article className="text-justify font-size-4">
                    {parse(data.data.description.replace(/\n/g, "<br/>"), {
                      trim: true,
                    })}
                  </article>
                ) : (
                  <article className="text-muted text-italic font-size-3">
                    Nội dung đang cập nhật
                  </article>
                )}
              </div>
            </div>
          </Tab>
          <Tab tabClassName="tab-menu-link" eventKey="tab-2" title="Sản phẩm">
            Đang cập nhật
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default CardDetail;