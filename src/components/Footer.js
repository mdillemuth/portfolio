import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer__container'>
      <div className='footer__content'>
        <ul className='footer__nav'>
          <li className='footer__logo'></li>
          <li className='footer__nav__item'>
            <Link to='/'>HOME</Link>
          </li>
          <li className='footer__nav__item'>
            <Link to='/portfolio'>PORTFOLIO</Link>
          </li>
          <li className='footer__nav__item'>
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>
        <ul className='footer__icons'>
          <li className='footer__icons__item'>
            <FontAwesomeIcon
              className='footer__icons__item--fontawesome'
              icon={faGithub}
            />
          </li>
          <li className='footer__icons__item'>
            <FontAwesomeIcon
              className='footer__icons__item--fontawesome'
              icon={faEnvelope}
            />
          </li>
          <li className='footer__icons__item'>
            <FontAwesomeIcon
              className='footer__icons__item--fontawesome'
              icon={faLinkedin}
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
