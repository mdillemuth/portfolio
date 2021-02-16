import React from 'react';
import { Link } from 'react-router-dom';

export default function ContactFooter() {
  return (
    <div className='contactFooter__container'>
      <h2 className='contactFooter__title'>
        Interested in doing a project together?
      </h2>
      <hr className='contactFooter__hr' />
      <Link to='/contact'>
        <button className='btn btn--secondary'>CONTACT ME</button>
      </Link>
    </div>
  );
}
