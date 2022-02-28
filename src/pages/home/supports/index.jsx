import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import features1 from '../../../assets/features1.png';
import features2 from '../../../assets/features2.png';
import changeBorder from '../../../utils/changeBorder';
import { slideInFromRight } from '../../../utils/slideIn';
import './style.scss';

const Supports = () => {
  const buttonRef = useRef(null);
  const messageRef = useRef(null);

useEffect(() => {
  changeBorder(buttonRef.current); 
  slideInFromRight(messageRef.current);
},[])

  return (
    <section className="platforms" data-bgcolor="#ffffff" data-textcolor="#4a4a4a">
        <div className="platforms__img">
          <div className="img-one">
          <div className="reverse-img">
            <img
              src={features1}
              alt="welcome to site"
              className="slide-in from-right"
            />
          </div>
          </div>
          <div className="img-two img-container">
            <div className="img-reveal">
            <img
              src={features2}
              alt="welcome to site again"
              className="slide-in from-right"
            />
            </div>
          </div>
        </div>
        <div className="platforms__msg" ref={messageRef}>
          <h2 className="features__title">Headline</h2>
          <p className="features__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, facere.
            Assumenda ipsam facilis voluptatem aut quibusdam recusandae pariatur
            sed rem repellat enim ut placeat officiis voluptas in eligendi
          </p>

          <div className="support">
            <Link to="/downloads" className="btn btn__cta" ref={buttonRef}>Download Extension</Link>
            <div className="support__content">
              <h4 className="support__title">Supported Platforms</h4>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Supports;