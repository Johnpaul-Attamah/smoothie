import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { BsPlayCircle } from "react-icons/bs";
import wallet1 from "../../../assets/wallet1.png";
import wallet2 from "../../../assets/welcome2.png";
import wallet3 from "../../../assets/wallet3.png";
import changeBorder from "../../../utils/changeBorder";

const Welcome = () => {
const buttonRef = useRef(null);

useEffect(() => {
 changeBorder(buttonRef.current); 
},[])

  return (
    <section className="homepage" data-bgcolor="#ffffff" data-textcolor="#4a4a4a">
      <div className="wallet2">
        <div className="reverse-img">
        <img
          src={wallet2}
          alt="wallet 2"
          className="img2 img-scroll"
          />
        </div>
      </div>

      <div className="wallet3">
        <img src={wallet3} alt="wallet 3" className="wallet3" />
      </div>

      <div className="homepage__message">
        <h1
          className="homepage__title"
        >
          Welcome to MADWallet
        </h1>
        <span
          className="homepage__sub-title"
        >
          Explore, create and trade NFTs with ease.
        </span>
        <div className="homepage__interactive">
          <Link
            to="/downloads"
            className="btn btn__cta"
            ref={buttonRef}
           >
            Download Extension
          </Link>
          <div className="homepage__video">
            <span>
              <BsPlayCircle />
            </span>
            <span>video</span>
          </div>
        </div>
      </div>

      <div className="wallet1 img-container">
        <div className="img-reveal">
        <img src={wallet1} alt="wallet one" className="img1 img2-scroll"/>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
