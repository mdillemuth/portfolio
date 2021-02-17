import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
// import { projectData } from './projectData';

// const project = projectData[0];

export default function ProjectCard(props) {
  const { projects, match } = props;

  const project = projects.find(
    (project) => project.url === match.params.projectId
  );

  return (
    <article className='projectCard__container'>
      <img
        className='projectCard__img projectCard__img--overview'
        src={project.img1}
        alt='img'
      />
      <div className='projectCard__desktop-container'>
        <div className='projectCard__group'>
          <hr className='projectCard__hr projectCard__hr--top' />
          <section className='projectCard__section--overview'>
            <h2 className='projectCard__title'>{project.title}</h2>
            <p className='projectCard__text--description'>
              {project.description}
            </p>
            <div className='projectCard__categories__container'>
              <div className='projectCard__categories'>
                Interaction Design / Front End Development
              </div>
              <div className='projectCard__categories'>HTML / CSS / JS</div>
            </div>
            <button className='btn btn--secondary'>VISIT WEBSITE</button>
          </section>
          <hr className='projectCard__hr projectCard__hr--bottom' />
        </div>
        <section className='projectCard__section--background'>
          <h3 className='projectCard__subtitle--background'>
            Project Background
          </h3>
          <p className='projectCard__text--background'>{project.background}</p>
          <h3 className='projectCard__subtitle--preview'>Static Previews</h3>
          <img
            className='projectCard__img projectCard__img--static--1'
            src={project.img2}
            alt='img'
          />
          <img
            className='projectCard__img projectCard__img--static--2'
            src={project.img3}
            alt='img'
          />
        </section>
      </div>

      {/* Menu Tabs At Bottom */}
      <section className='projectCard__menu'>
        <div className='projectCard__menu__content'>
          <div className='projectCard__menu__content--left'>
            <FontAwesomeIcon
              className='projectCard__menu__content--left--symbol'
              icon={faChevronLeft}
            />
            <div>
              <h3 className='projectCard__menu__content--left--title'>Left</h3>
              <div className='projectCard__menu__content--left--label'>
                Previous Project
              </div>
            </div>
          </div>
          <div className='projectCard__menu__content--middle'></div>
          <div className='projectCard__menu__content--right'>
            <FontAwesomeIcon
              className='projectCard__menu__content--right--symbol'
              icon={faChevronRight}
            />
            <div>
              <h3 className='projectCard__menu__content--right--title'>
                Right
              </h3>
              <div className='projectCard__menu__content--right--label'>
                Next Project
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
