import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function PortfolioCard(props) {
  const { id, projectId, title, imgSrc, description } = props;

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
        style={{ backgroundImage: `url(${imgSrc.img1})` }}
        className='portfolioCard__img'
      />
      <div className={renderContentOrientation(id)}>
        <hr />
        <h2>{title}</h2>
        <p>{description}</p>
        <HashLink to={`/portfolio/${projectId}#project`}>
          <button className='btn btn--secondary'>
            <span className='btn__span--secondary'>VIEW PROJECT</span>
          </button>
        </HashLink>
        <hr />
      </div>
    </div>
  );
}
