import React, { useState, useEffect, useCallback } from "react";
import Logo from "../logo";
import AccNav from "../navigation/accounts";
import Menu from "../navigation/menu";
import "./style.scss";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [siteLogo, setSiteLogo] = useState("mobile");
  const [screenSize, setScreenSize] = useState("mobile");

  const handleResize = useCallback(() => {
    setScreenSize(handleLayoutMode);
    setSiteLogo(handleTabletMode);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleLayoutMode = () =>
    window.innerWidth >= 600 ? "desktop" : "mobile";

  const handleTabletMode = () =>
    window.innerWidth >= 900 ? "desktop" : "mobile";

  const handleMenuToggle = () => {
    document.body.classList.toggle('hide-content', !menuToggle);
    setMenuToggle(!menuToggle);
    console.log(document.body.classList)
  }

  return (
    <header className={ menuToggle ? "mdw-header mdw-nav-mobile__open" : "mdw-header"}>
      <Logo siteLogo={siteLogo} logoClass="mdw-header--logo-link" logoContainer="mdw-header--logo" />
       <Menu screenSize={ screenSize } menuToggle={menuToggle}/>
      <AccNav screenSize={screenSize}/>
      <div className="toggle-box" onClick={handleMenuToggle}>
        <span
          className={!menuToggle ? "mdw-mobile__toggle" : "mdw-mobile__toggle active"}
        ></span>
      </div>
    </header>
  );
};

export default Header;
