import gsap from 'gsap';

export default function changeBorder(el) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            toggleActions: "restart pause resume reset"
          }
        });
        tl.from(el, {duration: 1,
            opacity: 0,
            ease: "Power2.out"
        })
        .from(el, {duration: 1.5,
            xPercent: -100,
            ease: "Power2.out"
        })
        .to(el, { 
            duration: 1.5,
            borderRadius: "30 0"
        });
        
         
}