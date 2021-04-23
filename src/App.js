import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import GetInTouch from './components/GetInTouch'
import ContactForm from './components/ContactForm'
import ContactFooter from './components/ContactFooter'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
// Data
import { projectData } from './projectData'
// Transition animations
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Components

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Route
          render={({ location }) => {
            const { key } = location
            return (
              <TransitionGroup>
                <CSSTransition key={key} timeout={500} classNames='fade'>
                  <Switch location={location}>
                    <Route
                      exact
                      path='/'
                      render={() => {
                        return (
                          <div className='Home'>
                            <Hero />
                            <About />
                            <ContactFooter />
                          </div>
                        )
                      }}
                    />
                    <Route
                      path='/portfolio/:projectId'
                      render={(props) => {
                        return (
                          <div>
                            <ProjectCard {...props} projects={projectData} />
                            <ContactFooter />
                          </div>
                        )
                      }}
                    />
                    <Route
                      path='/portfolio'
                      render={() => {
                        return (
                          <div className='Portfolio'>
                            <Portfolio projects={projectData} />
                            <ContactFooter />
                          </div>
                        )
                      }}
                    />
                    <Route
                      path='/contact'
                      render={() => {
                        return (
                          <div className='Contact'>
                            <GetInTouch />
                            <ContactForm />
                          </div>
                        )
                      }}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )
          }}
        />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
