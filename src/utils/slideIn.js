import gsap from 'gsap';

export const slideInFromLeft = el => {
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: `+=100`,
          // markers: true,
          toggleActions: "play none restart none"
        }
      });
      tl.from(el, {duration: .7,
          opacity: 0,
          ease: "Power2.out"
      })
      .from(el, {duration: 1.2,
          translateX: -200,
          ease: "Power2.out"
      });
}

export const slideInFromRight = el => {
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 50%",
          end: `+=100`,
          // markers: true,
          toggleActions: "play none restart none"
        }
      });
      tl.from(el, {duration: .7,
          opacity: 0,
          ease: "Power2.out"
      })
      .from(el, {duration: 1.2,
          translateX: 200,
          ease: "Power2.out"
      });
}

export const slideInFromTop = el => {
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: `+=100`,
          // markers: true,
          toggleActions: "play none restart none"
        }
      });
      tl.from(el, {duration: .7,
          opacity: 0,
          ease: "Power2.out"
      })
      .from(el, {duration: 1.2,
          translateY: -500,
          ease: "Power2.out"
      });
}

export const slideInFromBottom = el => {
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: `+=200`,
          // markers: true,
          toggleActions: "play reset restart reset"
        }
      });
      tl.from(el, {duration: .7,
          opacity: 0,
          ease: "Power2.out"
      })
      .from(el, {duration: 1.2,
          translateY: 100,
          ease: "Power2.out"
      });
}