import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import ProjectCardDemo from './ProjectCardDemo'

export default function ProjectCard({ match, projects }) {
  // Finds the project that is being rendered
  const project = projects.find(
    (project) => project.projectId === match.params.projectId
  )

  // Determines previous project to link to in tabs at bottom
  const findPrevProject = () => {
    const index = project.id
    return index === 0 ? projects[projects.length - 1] : projects[index - 1]
  }

  // Determines next project to link to in tabs at bottom
  const findNextProject = () => {
    const index = project.id
    return index === projects.length - 1 ? projects[0] : projects[index + 1]
  }

  // Renders button with link to website for projects that have a website
  const renderWebsiteBtn = () => {
    if (project.links.website !== null) {
      return (
        <a
          className='btn--projectCard'
          href={project.links.website}
          target='_blank'
          rel='noreferrer'
        >
          <button className='btn btn--secondary'>
            <span className='btn__span--secondary'>VISIT WEBSITE</span>
          </button>
        </a>
      )
    }
  }

  // Renders button with link to alternate website for project with alternate website
  const renderAltWebsiteBtn = () => {
    if (project.links.websiteAlt !== null) {
      return (
        <a
          className='btn--projectCard'
          href={project.links.websiteAlt}
          target='_blank'
          rel='noreferrer'
        >
          <button className='btn btn--secondary'>
            <span className='btn__span--secondary'>
              VISIT ALTERNATE WEBSITE
            </span>
          </button>
        </a>
      )
    }
  }

  // Renders button with link to case study for projects that have a case study
  const renderCaseStudyBtn = () => {
    if (project.links.caseStudy !== null) {
      return (
        <a
          className='btn--projectCard'
          href={project.links.caseStudy}
          target='_blank'
          rel='noreferrer'
        >
          <button className='btn btn--secondary'>
            <span className='btn__span--secondary'>READ CASE STUDY</span>
          </button>
        </a>
      )
    }
  }

  const prevProject = findPrevProject()
  const nextProject = findNextProject()

  return (
    <article id='project' className='projectCard__container'>
      <img
        className='projectCard__img projectCard__img--overview'
        src={project.imgSrc.img1}
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
                {project.categories.primary}
              </div>
              <div className='projectCard__categories'>
                {project.categories.secondary}
              </div>
            </div>
            <ProjectCardDemo demo={project.imgSrc.demo} />
            {renderWebsiteBtn()}
            {renderAltWebsiteBtn()}
            {renderCaseStudyBtn()}
            <a
              className='btn--projectCard'
              href={project.links.github}
              target='_blank'
              rel='noreferrer'
            >
              <button className='btn btn--secondary'>
                <span className='btn__span--secondary'>VIEW CODE</span>
              </button>
            </a>
          </section>
          <hr className='projectCard__hr projectCard__hr--bottom' />
        </div>
        <section className='projectCard__section--background'>
          <h3 className='projectCard__subtitle--background'>Background</h3>
          <p className='projectCard__text--background'>{project.background}</p>
          <h3 className='projectCard__subtitle--preview'>Previews</h3>
          <img
            className='projectCard__img projectCard__img--static projectCard__img--static--1'
            src={project.imgSrc.img2}
            alt='img'
          />
          <img
            className='projectCard__img  projectCard__img--static projectCard__img--static--2'
            src={project.imgSrc.img3}
            alt='img'
          />
        </section>
      </div>

      {/* Menu Tabs At Bottom */}
      <section className='projectCard__menu'>
        <div className='projectCard__menu__content'>
          <div className='projectCard__menu__content--left'>
            <HashLink to={`/portfolio/${prevProject.projectId}#project`} smooth>
              <FontAwesomeIcon
                className='projectCard__menu__content--left--symbol'
                icon={faChevronLeft}
              />
              <div>
                <h3 className='projectCard__menu__content--left--title'>
                  {prevProject.title}
                </h3>
                <div className='projectCard__menu__content--left--label'>
                  Previous
                </div>
              </div>
            </HashLink>
          </div>
          <div className='projectCard__menu__content--middle'></div>
          <div className='projectCard__menu__content--right'>
            <HashLink to={`/portfolio/${nextProject.projectId}#project`} smooth>
              <FontAwesomeIcon
                className='projectCard__menu__content--right--symbol'
                icon={faChevronRight}
              />
              <div>
                <h3 className='projectCard__menu__content--right--title'>
                  {nextProject.title}
                </h3>
                <div className='projectCard__menu__content--right--label'>
                  Next
                </div>
              </div>
            </HashLink>
          </div>
        </div>
      </section>
    </article>
  )
}
