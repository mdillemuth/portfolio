import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import ContactFooter from './ContactFooter';
import Footer from './Footer';

// Components

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            path='/portfolio'
            render={() => {
              return (
                <div className='Portfolio'>
                  <Portfolio />
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
                  <Contact />
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
