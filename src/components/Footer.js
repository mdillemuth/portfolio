import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className='footer__container'>
      <ul className='footer__nav'>
        <li className='footer__logo'></li>
        <li className='footer__nav__item'>HOME</li>
        <li className='footer__nav__item'>PORTFOLIO</li>
        <li className='footer__nav__item'>CONTACT</li>
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
    </footer>
  );
}
