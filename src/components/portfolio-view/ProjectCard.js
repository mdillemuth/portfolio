import React from 'react';

export default function ProjectCard(props) {
  const { id, title, img, description } = props;

  // Flips content for every other card
  const renderContentOrientation = (id) => {
    let classes = 'projectCard__content';
    return id % 2 === 0 ? (classes += ' projectCard__content--even') : classes;
  };

  // Flips content for every other card
  const renderCardOrientation = (id) => {
    let classes = 'projectCard__container';
    return id % 2 === 0
      ? (classes += ' projectCard__container--even')
      : classes;
  };

  return (
    <div className={renderCardOrientation(id)}>
      <img className='projectCard__img' src={img} alt={title} />
      <div className={renderContentOrientation(id)}>
        <hr className='projectCard__hr' />
        <h3 className='projectCard__title'>{title}</h3>
        <p className='projectCard__text'>{description}</p>
        <button className='btn btn--secondary projectCard__btn'>
          VIEW PROJECT
        </button>
        <hr className='projectCard__hr' />
      </div>
    </div>
  );
}
