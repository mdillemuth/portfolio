import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function ContactFooter() {
  return (
    <div className='contactFooter__container'>
      <h2 className='contactFooter__title'>
        Interested in doing a project together?
      </h2>
      <hr className='contactFooter__hr' />
      <Link to='/contact#get-in-touch' smooth>
        <button className='btn btn--secondary about__btn'>
          <span className='btn__span--secondary'>CONTACT ME</span>
        </button>
      </Link>
    </div>
  );
}
