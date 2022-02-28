import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CloudLogo } from '../../../assets/cloud.svg';
import './style.scss';


const AccNav = ({ screenSize }) => {
  return (
    <ul className="mdw-nav__list-accounts">
      <li className="mdw-nav__list-item">
        <Link to="/cloud" className="mdw-nav__link-account">
          <CloudLogo/>
        </Link>
      </li>
      <li className="mdw-nav__list-item">
        {
          (screenSize === 'desktop') ? (<span className="mdw-nav__link">En</span>) : null
        }
      </li>
    </ul>
  )
}

export default AccNav;