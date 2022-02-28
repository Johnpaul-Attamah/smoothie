import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './style.scss';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const TabShow = () => {
    const scrollTab = useRef(null);
    const horizontalContainer = useRef(null);
  
    useEffect(() => {
      const horizontalSection = horizontalContainer.current;
      const scrollNav = scrollTab.current;
      console.log(horizontalSection, scrollNav)
      if(scrollNav) {
        let scrollNavWidth = scrollNav.offsetWidth;
        let horizScrollLength = scrollNavWidth - window.innerWidth;
        
        gsap.to('.horizontal-scroll__list', {
          scrollTrigger: {
            scroll: ".container",
            scrub: true,
            triggerHook: 0,
            trigger:".horizontal-scroll",
            pin: true,
            start: "top top",
            end: () => `+=${scrollNavWidth}`,
            invalidateOnRefresh: true
          },
          x: -horizScrollLength,
          ease: "none"
        });

        ScrollTrigger.refresh();
  
      }
    },[])
  return (
    <div className='horizontal-scroll'data-scroll-section ref={horizontalContainer}>
    <div className="horizontal-scroll__list" ref={scrollTab}>
        <span className="horizontal-scroll__list-item">Cross-Chain Bridge</span>
        <span className="horizontal-scroll__list-item">Reward System</span>
        <span className="horizontal-scroll__list-item">Revenue Generation</span>
        <span className="horizontal-scroll__list-item">Fiat-to-Crypto</span>
        <span className="horizontal-scroll__list-item">X-Wallet for Development</span>
        <span className="horizontal-scroll__list-item">Seed Phase Security</span>
      </div>
    </div>
  )
}

export default TabShow