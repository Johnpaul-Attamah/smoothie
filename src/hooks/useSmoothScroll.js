import { useEffect } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';


export default function useSmoothScroll(start, containerRef) {
    
    useEffect(() => {
        if(!start) return;
        gsap.registerPlugin(ScrollTrigger);
        
        containerRef.current.setAttribute("data-scroll-container", "");
        
        const scroller = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            getDirection: true
        });

        scroller.on("scroll", function (t) {
            document.documentElement.setAttribute("data-direction", t.direction);
        });

        scroller.on("scroll", ScrollTrigger.update());

        ScrollTrigger.scrollerProxy(containerRef.current, {
            scrollTop(value) {
              return arguments.length
                ? scroller.scrollTo(value, 0, 0)
                : scroller.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
              return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
              };
            },
            pinType: containerRef.current.style.transform ? "transform" : "fixed"
          });

          ScrollTrigger.addEventListener("refresh", () => scroller.update());
          
          ScrollTrigger.refresh();

          return () => {
            scroller?.destroy();
          }

    },[start, containerRef]);
}