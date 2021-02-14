import React from 'react';

export default function ProjectCard(props) {
  const { title, img, description } = props;

  return (
    <div className='projectCard__container'>
      <img className='projectCard__img' src={img} alt='project-img' />
      <hr className='projectCard__hr' />
      <h3 className='projectCard__title'>{title}</h3>
      <p className='projectCard__text'>{description}</p>
      <button className='btn btn--secondary projectCard__btn'>
        VIEW PROJECT
      </button>
      <hr className='projectCard__hr' />
    </div>
  );
}
