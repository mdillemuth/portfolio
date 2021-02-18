import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav id='nav' className='navbar'>
      <NavLink exact to='/' activeClassName='active'>
        <div className='navbar__logo'></div>
      </NavLink>
      <div className='navbar__hamburger'>
        <FontAwesomeIcon className='navbar__hamburger--icon' icon={faBars} />
      </div>
      <ul className='navbar__links__container'>
        <NavLink exact to='/' className='navbar__link' activeClassName='active'>
          <li>HOME</li>
        </NavLink>
        <NavLink
          to='/portfolio'
          className='navbar__link'
          activeClassName='active'
        >
          <li>PORTFOLIO</li>
        </NavLink>
        <NavLink
          to='/contact'
          className='navbar__link'
          activeClassName='active'
        >
          <li>CONTACT ME</li>
        </NavLink>
      </ul>
    </nav>
  );
}
