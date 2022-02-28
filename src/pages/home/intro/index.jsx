import React, { useRef, useEffect } from "react";
import "./style.scss";
import welcome1 from "../../../assets/welcome1.png";
import welcome2 from "../../../assets/welcome2.png";
import { slideInFromLeft } from "../../../utils/slideIn";

const Introduction = () => {
  const greetingsRef = useRef(null);

  useEffect(() => {
    slideInFromLeft(greetingsRef.current);
  },[])
  return (
    <section className="welcome" data-bgcolor="#e7e7e7" data-textcolor="#4a4a4a">
      <div className="welcome__msg" ref={greetingsRef}>
        <h2
          className="welcome__title"
        >
          Why MADWallet?
        </h2>
        <p className="welcome__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere.
          Assumenda ipsam facilis voluptatem aut quibusdam recusandae pariatur
          sed rem repellat enim ut placeat officiis voluptas in eligendi numquam
          dicta qui, culpa tenetur cum, quas sint suscipit consectetur id. Alias
          illum dignissimos quos excepturi ducimus reiciendis, consequatur in
          repellat sint?
        </p>
      </div>
      <div className="welcome__img">
        <div className="img-one img-container">
          <div className="img-reveal">
          <img
            src={welcome1}
            alt="welcome to site"
            className="img2-scroll"
          />
          </div>
        </div>
        <div className="img-two">
        <div className="reverse-img">
          <img
            src={welcome2}
            alt="welcome to site again"
            className="img2-scroll"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
