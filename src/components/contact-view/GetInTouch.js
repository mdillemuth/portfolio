import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function GetInTouch() {
  return (
    <div className='getInTouch__container'>
      <h3 className='getInTouch__title'>Get in Touch</h3>
      <div className='getInTouch__content'>
        <p className='getInTouch__text'>
          If you're looking for a developer for your project I'd love to hear
          from you and see how I could help. Currently, I'm seeking a new
          position as a full-stack JavaScript developer, but I am also
          interested in roles in frontend development or software development.
          My ideal position would involve working in a team where I could learn
          from others and continue to develop my skills. I also enjoy teaching
          others and contributing to the tech community.
        </p>
        <ul className='getInTouch__icons'>
          <li className='getInTouch__icons__item'>
            <FontAwesomeIcon
              className='footer__icons__item--fontawesome'
              icon={faGithub}
            />
          </li>
          <li className='getInTouch__icons__item'>
            <FontAwesomeIcon
              className='footer__icons__item--fontawesome'
              icon={faEnvelope}
            />
          </li>
          <li className='getInTouch__icons__item'>
            <FontAwesomeIcon
              className='footer__icons__item--fontawesome'
              icon={faLinkedin}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
