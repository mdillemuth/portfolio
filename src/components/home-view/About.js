import React from 'react';

export default function About() {
  return (
    <div className='about__container'>
      <div className='about__img'></div>
      <div className='about__content'>
        <hr className='about__hr' />
        <h2 className='about__title'> About Me</h2>
        <p className='about__text'>
          I'm a full-stack developer looking for a new role in an exciting
          company. I focus on using JavaScript related technologies such as
          Node.js, Express.js, and React, but I am always learning new things
          and am happy to adapt to whatever tools are required.
        </p>
        <p className='about__text'>
          I'm based on the Treasure Coast in Southeast Florida, but I am open to
          working remotely and have experience collaborating remotely. When I'm
          not behind my computer, I'm likely at the gym exercising or practicing
          Muay Thai. I'd love for you to check out my work.
        </p>
        <button className='btn btn--secondary about__btn'>
          GO TO PORTFOLIO
        </button>
      </div>
      <hr className='about__hr' />
    </div>
  );
}
