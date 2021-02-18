import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import GetInTouch from './GetInTouch';
import ContactForm from './ContactForm';
import ContactFooter from './ContactFooter';
import Footer from './Footer';
import ProjectCard from './ProjectCard';
// Data
import { projectData } from './projectData';
// Transition animations
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Components

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Route
          render={({ location }) => {
            const { key } = location;
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
                        );
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
                        );
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
                        );
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
                        );
                      }}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
