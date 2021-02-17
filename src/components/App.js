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
import { projectData } from './projectData';

// Components

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
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
          <Route
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
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
