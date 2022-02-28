import React, { useRef, useEffect } from "react";
import comm1 from "../../../assets/extra1.png";
import comm2 from "../../../assets/extra2.png";
import { slideInFromTop } from "../../../utils/slideIn";
import "./style.scss";

const Community = () => {
  const messageRef = useRef(null);

  useEffect(() => {
    slideInFromTop(messageRef.current)
  },[])
  return (
    <section className="community" data-bgcolor="#e7e7e7" data-textcolor="#4a4a4a">
      <div
        className="community__img-sm"
      >
        <div className="reverse-img">
        <img
          src={comm1}
          alt="community banner one"
          className="slide-in from-left"
        />
        </div>
      </div>
      <div className="community__content-box">
        <div className="community__msg" ref={messageRef}>
          <h3 className="community__title">Community</h3>
          <p className="community__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            beatae sequi aliquid molestias nostrum, unde atque obcaecati
            recusandae.
          </p>
          <div className="community--box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="community__img-lg img-container">
        <div className="img-reveal">
        <img
          src={comm2}
          alt="community banner one"
          className="slide-in from-right"
        />
        </div>
      </div>
    </section>
  );
};

export default Community;
