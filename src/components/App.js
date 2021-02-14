import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

// Components
import Navbar from './Navbar';
import HomeView from './home-view/HomeView';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' component={HomeView} />
      </Switch>
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}