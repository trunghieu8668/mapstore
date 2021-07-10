import React from "react";
import Link from "next/link";
import Image from "next/image";
import { API } from "../../config";
const prismicLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
const SmallCard = ({ blog }) => {
  return (
    <div className="card">
      <section>
        <Link href={`/blogs/${blog.slug}`}>
          <a>
            <Image
              loader={prismicLoader}
              alt={name}
              className="img-fluid f-select"
              priority={true}
              objectFit="contain"
              layout="fill"
              src={getSrc(blog.logo, blog.pictures) || "/assets/images/logo/mapstore-logo-ver.png"}
            />
          </a>
        </Link>
      </section>

      <div className="card-body">
        <section>
          <Link href={`/blogs/${blog.slug}`}>
            <a>
              <h5 className="card-title">{blog.title}</h5>
            </a>
          </Link>
          <div className="card-text">{blog.excerpt}</div>
        </section>
      </div>

      <div className="card-body">
        <Link href={`/profile/${blog.postedBy.username}`}>
          <a>{blog.postedBy.username}</a>
        </Link>
      </div>
    </div>
  );
};

export default SmallCard;
