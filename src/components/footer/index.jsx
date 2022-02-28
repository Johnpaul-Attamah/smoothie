import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import wallet2 from '../../assets/wallet2.png';
import welcome1 from '../../assets/welcome1.png';
import mainLogo from '../../assets/logos/main-logo.svg';
import './style.scss'
import { slideInFromBottom } from '../../utils/slideIn';

const Footer = () => {
  const navRef = useRef(null);

  useEffect(() => {
    slideInFromBottom(navRef.current);
  },[])
  return (
    <section className="footer" data-bgcolor="#ffffff" data-textcolor="#4a4a4a">
        <div className="footer__img-sm">
            <div className="reverse-img">
            <img
            src={wallet2}
            alt="footer banner one"
            className="slide-in from-left"
            />
            </div>
        </div>
        <div className="footer__content-box">
          <div className="footer--logo">
            <Link to="/" className="footer--logo-link">
            <img src={mainLogo} alt="mad wallet logo" className='footer--logo__img'/>)
            </Link>
          </div>
          <nav className="footer__nav" ref={navRef}>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <Link to="/welcome" className="footer__nav-link">Welcome</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/features" className="footer__nav-link">Features</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/marketplace" className="footer__nav-link">Marketplace</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/community" className="footer__nav-link">Community</Link>
              </li>
            </ul>
          </nav>
          <div className="footer--copyright">
            <p className="copyright">&copy; Copyright All rights reserved, 2021.</p>
          </div>
        </div>
        <div className="footer__img-lg img-container">
          <div className="img-reveal">
          <img
            src={welcome1}
            alt="footer banner one"
            className="slide-in from-right"
          />
          </div>
        </div>
    </section>
  )
}

export default Footer;