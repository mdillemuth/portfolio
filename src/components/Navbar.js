import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <div className='navbar__logo'></div>
      </Link>
      <div className='navbar__hamburger'>
        <FontAwesomeIcon className='navbar__hamburger--icon' icon={faBars} />
      </div>
      <ul className='navbar__links__container'>
        <Link className='navbar__link' to='/'>
          <li>HOME</li>
        </Link>
        <Link className='navbar__link' to='/portfolio'>
          <li>PORTFOLIO</li>
        </Link>
        <Link className='navbar__link' to='/contact'>
          <li>CONTACT ME</li>
        </Link>
      </ul>
    </nav>
  );
}
