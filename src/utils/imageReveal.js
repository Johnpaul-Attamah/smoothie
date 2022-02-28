import gsap from 'gsap';

export default function imageReveal(parentContainer, reverse) {
    parentContainer.forEach(container => {
        const image = container.querySelector('img');
  
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "restart pause resume reset"
          }
        });
        tl.set(container, { autoAlpha: 1 });
        if(!reverse) {
            tl.from(container, {duration: 1.5,
              xPercent: -100,
              ease: "Power2.out"
            });
            tl.from(image, {duration: 1.5,
              xPercent: 100,
              scale: 1.3,
              delay: -1.5,
              ease: "Power2.out"
            });
        } else {
            tl.from(container, {duration: 1.5,
                xPercent: 100,
                ease: "Power2.out"
              });
              tl.from(image, {duration: 1.5,
                xPercent: -100,
                scale: 1.3,
                delay: -1.5,
                ease: "Power2.out"
              });
        }
      });
  
}