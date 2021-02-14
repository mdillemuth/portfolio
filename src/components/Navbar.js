import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'></div>
      <div className='navbar__hamburger'>
        <FontAwesomeIcon className='navbar__hamburger--icon' icon={faBars} />
      </div>
      <ul className='navbar__links__container'>
        <li className='navbar__link'>Home</li>
        <li className='navbar__link'>Portfolio</li>
        <li className='navbar__link'>Contact Me</li>
      </ul>
    </nav>
  );
}
