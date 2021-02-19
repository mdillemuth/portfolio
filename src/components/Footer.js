import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <footer className='footer__container'>
      <div className='footer__content'>
        <ul className='footer__nav'>
          <li className='footer__logo'></li>
          <li className='footer__nav__item'>
            <NavLink exact to='/#nav' activeClassName='active' smooth>
              HOME
            </NavLink>
          </li>
          <li className='footer__nav__item'>
            <NavLink to='/portfolio#portfolio' activeClassName='active' smooth>
              PORTFOLIO
            </NavLink>
          </li>
          <li className='footer__nav__item'>
            <NavLink to='/contact#get-in-touch' activeClassName='active' smooth>
              CONTACT
            </NavLink>
          </li>
        </ul>
        <ul className='footer__icons'>
          <li className='footer__icons__item tooltip'>
            <span className='tooltiptext'>GitHub</span>
            <a
              href='https://github.com/mdillemuth'
              rel='noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon
                className='footer__fontawesome'
                icon={faGithub}
              />
            </a>
          </li>
          <li className='footer__icons__item tooltip'>
            <span className='tooltiptext'>Gmail</span>
            <a
              href='mailto:mattdillemuth@gmail.com'
              rel='noreferrer'
              target='_blank'
            >
              <FontAwesomeIcon
                className='footer__fontawesome'
                icon={faEnvelope}
              />
            </a>
          </li>
          <li className='footer__icons__item tooltip'>
            <span className='tooltiptext'>LinkedIn</span>
            <a
              href='https://www.linkedin.com/in/mdillemuth/'
              target='_blank'
              rel='noreferrer'
            >
              <FontAwesomeIcon
                className='footer__fontawesome'
                icon={faLinkedin}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
