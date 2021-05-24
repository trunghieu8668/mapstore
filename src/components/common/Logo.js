import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
const srcLogo = "/assets/images/logo/mapstorelogo_nobg_white.png";

const Logo = ({ title, className, children }) => {
  return (
    <Link href="/">
      <a
        className={`${className || ""} d-block logo-link `}
        href="/"
        title={title}
      >
        <Image
          className="logo-img"
          alt={title}
          width={194}
          height={65}
          src={srcLogo}
        />
        {children && children != "" && children}
      </a>
    </Link>
  );
};
export default React.memo(withRouter(Logo));
