import React from 'react';
import ProjectCard from './ProjectCard';
import Contact from '../Contact';
import { projectData } from '../projectData';

export default function PortfolioView() {
  return (
    <>
      <div className='portfolioView__container'>
        {projectData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <Contact />
    </>
  );
}
