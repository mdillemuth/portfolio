import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function About() {
  return (
    <div id='about' className='about__container'>
      <div className='about__img'></div>
      <div className='about__content'>
        <hr />
        <h2>About Me</h2>
        <p>
          I am a full-stack JavaScript developer passionate about learning and
          working with others. I received my education from a project-based web
          development bootcamp where my work was reviewed by industry
          professionals. In addition to being interested in working with React
          and the frontend, I am passionate about helping other students learn
          web development. Currently, I am developing an e-commerce platform
          using the MERN stack.
        </p>
        <HashLink to='/portfolio#portfolio' smooth>
          <button className='btn btn--secondary about__btn'>
            <span className='btn__span--secondary'>GO TO PORTFOLIO</span>
          </button>
        </HashLink>
        <hr />
      </div>
    </div>
  )
}
