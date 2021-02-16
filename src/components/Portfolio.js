import React from 'react';
import PortfolioCard from './PortfolioCard';
import { projectData } from './projectData';

export default function Portfolio() {
  return (
    <>
      <div className='portfolio__container'>
        {projectData.map((project) => (
          <PortfolioCard key={project.id} {...project} />
        ))}
      </div>
    </>
  );
}
