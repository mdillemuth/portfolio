import React from 'react';
import PortfolioCard from './PortfolioCard';

export default function Portfolio({ projects }) {
  return (
    <>
      <div className='portfolio__container'>
        {projects.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}
