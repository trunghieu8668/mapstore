import React from "react";
import Link from "next/link";
import Image from "next/image";
import { api } from "../../fakeapi/category";
import { Container, Row, Col } from "react-bootstrap";
import slugify from "slugify";
import _ from "lodash";
const categoryGroupUrl = process.env.CATEGORY_GROUP_URL
  ? process.env.CATEGORY_GROUP_URL
  : "loai-dia-diem";

const CategoryList = () => {
  return (
    <Container className="container section-category pl-lg-4 pr-lg-4">
      <Row xs={2} sm={3} md={3} className="list-group-category">
        {api.map((data, i) => (
          <Col key={i} className="item-list">
            <Link href={`/${categoryGroupUrl}/${data.id.replace(/_/g, "-")}`}>
              <a className="item-link shadow-sm border">
                <div className="inner">
                  <figure className="icon">
                    {data.icon && data.icon != "" ? (
                      <Image
                        className="icon-src"
                        width={35}
                        height={35}
                        src={data.icon}
                        alt={data.name}
                      />
                    ) : (
                      ""
                    )}
                  </figure>
                  <span className="name">{data.name}</span>
                </div>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryList;
