import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MobileLogo } from "../../assets/logos/mobile-logo.svg";
import { ReactComponent as MainLogo } from "../../assets/logos/main-logo.svg";
import "./style.scss";

const Logo = ({ siteLogo, logoClass, logoContainer }) => {
  return (
      <div className={logoContainer}>
          <Link to="/" className={logoClass}>
            {siteLogo === "mobile" ? <MobileLogo /> : <MainLogo />}
          </Link>
      </div>
  );
};

export default Logo;
