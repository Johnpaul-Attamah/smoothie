import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import features1 from "../../../assets/features1.png";
import features2 from "../../../assets/features2.png";
import "./style.scss";
import { slideInFromLeft } from "../../../utils/slideIn";

const Features = () => {
  const scrollTab = useRef(null);
  let messageRef = useRef(null);

  useEffect(() => {
    const scrollNav = scrollTab.current;
    let scrollNavWidth = scrollNav.offsetWidth;
    let horizScrollLength = scrollNavWidth - window.innerWidth;

    slideInFromLeft(messageRef.current);

    gsap.to(scrollNav, {
      translateX: -1800,
      transformOrigin: "right center",
      ease: 'none',
      scrollTrigger: {
        trigger: ".features",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
        start:"top top", 
        end: () => `+=${horizScrollLength/4}`,
        // markers:true
      },
    });
  },[])
  return (
    <section className="features" data-bgcolor="#ffffff" data-textcolor="#4a4a4a">
      <div className="features-scroll__list" ref={scrollTab}>
      <span className="features-scroll__list-item">Cross-Chain Bridge</span>
      <span className="features-scroll__list-item">Reward System</span>
      <span className="features-scroll__list-item">Revenue Generation</span>
      <span className="features-scroll__list-item">Fiat-to-Crypto</span>
      <span className="features-scroll__list-item">X-Wallet for Development</span>
      <span className="features-scroll__list-item">Seed Phase Security</span>
    </div>
    <div className="features__content">
      <div className="features__msg" ref={messageRef}>
        <h2
          className="features__title"
        >
          Headline
        </h2>
        <p className="features__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere.
          Assumenda ipsam facilis voluptatem aut quibusdam recusandae pariatur
          sed rem repellat enim ut placeat officiis voluptas in eligendi numquam
          dicta qui, culpa tenetur cum, quas sint suscipit consectetur id. Alias
          illum dignissimos quos excepturi ducimus reiciendis, consequatur in
          repellat sint?
        </p>
      </div>
      <div className="features__img">
        <div className="img-one img-container">
          <div className="img-reveal">
          <img
            src={features1}
            alt="welcome to site"
            className="slide-in from-right"
          />
          </div>
        </div>
        <div className="img-two">
        <div className="reverse-img">
          <img
            src={features2}
            alt="welcome to site again"
            className="img2-scroll"
            />
        </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Features;
