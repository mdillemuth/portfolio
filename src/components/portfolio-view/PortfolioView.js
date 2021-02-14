import React from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from '../projectData';

export default function PortfolioView() {
  return projectData.map((project) => (
    <ProjectCard key={project.id} {...project} />
  ));
}
