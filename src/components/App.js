import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

// Components
import Navbar from './Navbar';
import HomeView from './home-view/HomeView';
import ContactView from './contact-view/ContactView';
import PortfolioView from './portfolio-view/PortfolioView';
import Footer from './Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/contact' component={ContactView} />
        <Route path='/portfolio' component={PortfolioView} />
        <Route path='/' component={HomeView} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
