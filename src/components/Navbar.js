import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavHashLink as NavLink } from 'react-router-hash-link';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: true,
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: true });
  }

  render() {
    return (
      <nav id='nav' className='navbar'>
        <NavLink exact to='/' activeClassName='active' smooth>
          <div className='navbar__logo'></div>
        </NavLink>
        <div className='nav-mobile'>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.handleStateChange(state)}
          >
            <NavLink
              exact
              id='home'
              to='/'
              className='menu-item'
              activeClassName='active'
              smooth
              onClick={() => this.closeMenu()}
            >
              HOME
            </NavLink>
            <NavLink
              to='/portfolio'
              className='menu-item'
              activeClassName='active'
              smooth
              onClick={() => this.closeMenu()}
            >
              PORTFOLIO
            </NavLink>
            <NavLink
              to='/contact'
              className='menu-item'
              activeClassName='active'
              smooth
              onClick={() => this.closeMenu()}
            >
              CONTACT
            </NavLink>
          </Menu>
        </div>
        <div className='nav-desktop'>
          <ul className='navbar__links__container'>
            <NavLink
              exact
              to='/'
              className='navbar__link'
              activeClassName='active'
            >
              <li>HOME</li>
            </NavLink>
            <NavLink
              to='/portfolio'
              className='navbar__link'
              activeClassName='active'
            >
              <li>PORTFOLIO</li>
            </NavLink>
            <NavLink
              to='/contact'
              className='navbar__link'
              activeClassName='active'
            >
              <li>CONTACT ME</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
