import React, { useRef, useEffect } from 'react';
import inComing1 from '../../../assets/coming-soon.png';
import inComing2 from '../../../assets/welcome1.png';
import { slideInFromTop } from '../../../utils/slideIn';
import './style.scss';

const NewFeature = () => {
  const messageRef = useRef(null);

  useEffect(() => {
    slideInFromTop(messageRef.current)
  },[])
  return (
    <section className="new-features" data-bgcolor="#e7e7e7" data-textcolor="#4a4a4a">
        <div className="new-features__img1">
        <div className="reverse-img">
          <img
            src={inComing1}
            alt="welcome to site"
            className="slide-in from-left"
          />
        </div>
        </div>
        <div className="new-features__content slide-in from-right">
          <div className="new-features__msg" ref={messageRef}>
            <h2 className="new-features__title">MADVerse</h2>
            <p className="new-features__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              facere. Assumenda ipsam facilis voluptatem aut quibusdam
              recusandae pariatur sed rem repellat enim ut placeat officiis
              voluptas in eligendi
            </p>
            <h3>Coming Soon</h3>
          </div>
        </div>
        <div className="new-features__img2 img-container">
          <div className="img-reveal">
          <img
            src={inComing2}
            alt="welcome to site again"
            className="img-scroll"
          />
          </div>
        </div>
    </section>
  )
}

export default NewFeature