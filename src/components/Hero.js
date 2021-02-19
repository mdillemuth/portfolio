import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Hero() {
  return (
    <div id='hero' className='hero__container'>
      <div className='hero__img'></div>
      <div className='hero__content'>
        <h1 className='hero__title'>
          Hey, I'm Matt Dillemuth, and I'm a full-stack developer
        </h1>
        <HashLink to='/#about' smooth>
          <button className='btn btn--primary'>
            <span className='btn__span--primary'>ABOUT ME</span>
          </button>
        </HashLink>
      </div>
    </div>
  );
}
