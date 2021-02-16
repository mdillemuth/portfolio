import React from 'react';

export default function Hero() {
  return (
    <div className='hero__container'>
      <div className='hero__img'></div>
      <div className='hero__content'>
        <h1 className='hero__title'>
          Hey, I'm Matt Dillemuth, and I'm a full-stack developer
        </h1>
        <button className='btn btn--primary'>
          <span className='btn__span--primary'>ABOUT ME</span>
        </button>
      </div>
    </div>
  );
}
