import React from 'react';
import { Link } from 'react-router-dom'
import './style.scss';

const Menu = ({ screenSize, menuToggle }) => {
  return (
    <ul className={menuToggle ? "mdw-nav__list open-nav" : "mdw-nav__list"}>
     <li className="mdw-nav__list-item">
      <Link to="/" className="mdw-nav__link">homepage</Link>
     </li>
     <li className="mdw-nav__list-item">
      <Link to="/features" className="mdw-nav__link">Features</Link>
     </li>
     <li className="mdw-nav__list-item">
      <Link to="/marketplace" className="mdw-nav__link">MarketPlace</Link>
     </li>
     <li className="mdw-nav__list-item">
      <Link to="/community" className="mdw-nav__link">Community</Link>
     </li>
        { (screenSize === 'mobile') ?
          (<li className="mdw-nav__list-item">
            <span className="mdw-nav__link">En</span>
          </li>) : null
        }
    </ul>
  )
}

export default Menu;