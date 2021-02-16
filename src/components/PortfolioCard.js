import React from 'react';

export default function PortfolioCard(props) {
  const { id, title, img, description } = props;

  // The whole card
  const renderCardOrientation = (id) => {
    let classes = 'portfolioCard__container';
    return id % 2 === 0
      ? (classes += ' portfolioCard__container--even')
      : classes;
  };

  // Content within the card
  const renderContentOrientation = (id) => {
    let classes = 'portfolioCard__content';
    return id % 2 === 0
      ? (classes += ' portfolioCard__content--even')
      : classes;
  };

  return (
    <div className={renderCardOrientation(id)}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className='portfolioCard__img'
      />
      <div className={renderContentOrientation(id)}>
        <hr className='portfolioCard__hr' />
        <h2 className='portfolioCard__title'>{title}</h2>
        <p className='portfolioCard__text'>{description}</p>
        <button className='btn btn--secondary portfolioCard__btn'>
          <span className='btn__span--secondary'>VIEW PROJECT</span>
        </button>
        <hr className='portfolioCard__hr' />
      </div>
    </div>
  );
}
