import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const toggleColors = (container) => {

    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

    scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
    
      ScrollTrigger.create({
        trigger: colorSection,
        start: "top 50%",
        // markers: true,
        onEnter: () => 
          gsap.to("body", {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto"
          }),
        onLeaveBack: () =>
          gsap.to("body", {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto"
          })
      });
    });

    ScrollTrigger.refresh();
}


export default toggleColors;