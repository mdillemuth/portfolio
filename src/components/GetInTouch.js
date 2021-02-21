import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import pdf from '../dillemuth-matt-resume.pdf';

export default function GetInTouch() {
  return (
    <div id='get-in-touch' className='getInTouch__container'>
      <hr />
      <div className='getInTouch__grid'>
        <h2>Get in Touch</h2>
        <div className='getIntouch__content'>
          <p>
            If you're looking for a developer for your project I'd love to hear
            from you and see how I could help. Currently, I'm seeking a new
            position as a full-stack JavaScript developer, but I am also
            interested in roles in frontend development or software development.
            My ideal position would involve working in a team where I could
            learn from others and continue to develop my skills. I also enjoy
            teaching others and contributing to the tech community.
          </p>
          <a href={pdf} target='_blank' rel='noreferrer'>
            <button className='btn btn--secondary getInTouch__btn'>
              <span className='btn__span--secondary'>RESUME / CV</span>
            </button>
          </a>{' '}
          <ul className='getInTouch__icons'>
            <li className='getInTouch__icons__item tooltip'>
              <span className='tooltiptext'>GitHub</span>
              <a
                href='https://github.com/mdillemuth'
                rel='noreferrer'
                target='_blank'
              >
                <FontAwesomeIcon
                  className='getInTouch__fontawesome'
                  icon={faGithub}
                />
              </a>
            </li>
            <li className='getInTouch__icons__item tooltip'>
              <span className='tooltiptext'>Gmail</span>
              <a
                href='mailto:mattdillemuth@gmail.com'
                rel='noreferrer'
                target='_blank'
              >
                <FontAwesomeIcon
                  className='getInTouch__fontawesome'
                  icon={faEnvelope}
                />
              </a>
            </li>
            <li className='getInTouch__icons__item tooltip'>
              <span className='tooltiptext'>LinkedIn</span>
              <a
                href='https://www.linkedin.com/in/mdillemuth/'
                target='_blank'
                rel='noreferrer'
              >
                <FontAwesomeIcon
                  className='getInTouch__fontawesome'
                  icon={faLinkedin}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}
