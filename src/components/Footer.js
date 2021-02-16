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
          <li className='footer__icons__item'>
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
          <li className='footer__icons__item'>
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
