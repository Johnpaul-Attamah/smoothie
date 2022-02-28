import React, { useState, useEffect, Fragment, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Welcome from "./welcome";
import "./style.scss";
import Introduction from "./intro";
import Features from "./features";
import NewFeature from "./coming-new";
import Supports from "./supports";
import Community from "./community";
import Footer from "../../components/footer";
import imageReveal from "../../utils/imageReveal";
import observer from "../../utils/observer";
import toggleColors from "../../utils/colorChanger";
import { smoothScroll } from "../../utils/gsapSmooth";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [preloading, setPreloading] = useState(true);
  const [loadingTime, setLoadingTime] = useState(3);

  const containerRef = useRef();

  // useSmoothScroll(!preloading, containerRef);

  const interval = useRef();

  const clearLoading = () => {
    window.clearInterval(interval.current);
    setPreloading(false);
  };

  /**
   * Set loading to 4 seconds on every reload
   * to load images and videos
   */
  useEffect(() => {
    interval.current = window.setInterval(() => {
      setLoadingTime((loadingTime) => loadingTime - 1);
    }, 1000);
  }, []);

  /**
   * Now clear this loading time
   */
  useEffect(() => {
    if (loadingTime === 0) {
      clearLoading();
    }
  }, [loadingTime]);

  // Gsap Reveal images
  useEffect(() => {
    if (!preloading) {
      const revealContainers = document.querySelectorAll(".img-reveal");
      const invertContainers = document.querySelectorAll(".reverse-img");
      const header = document.querySelector(".mdw-header");
      const footer = document.querySelector(".footer");

      // smoothScroll('.content')

      toggleColors(containerRef.current);

      imageReveal(revealContainers, false);
      imageReveal(invertContainers, true);

      observer(header, footer, { threshold: 0.5 }, "hide-nav");
    }
    return null;
  }, [preloading]);

  return (
    <Fragment>
      {preloading ? (
        <div className="page-load full-page-fixed">
          <h1>MADWallet</h1>
          <h2>TAke your crypto experience to the next level...</h2>
        </div>
      ) : (
          <div className="container" ref={containerRef}>
            <Welcome />
            <Introduction />
            <Features />
            <NewFeature />
            <Supports />
            <Community />
            <Footer />
          </div>
      )}
    </Fragment>
  );
};

export default Home;
