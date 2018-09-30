import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavMenu = () => (
  <div className='main-nav'>
    <div className='navbar navbar-inverse'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <Link className='navbar-brand' to={'/'}>React-TMDb</Link>
      </div>
      <div className='clearfix'></div>
      <div className='navbar-collapse collapse'>
        <ul className='nav navbar-nav'>
          <li>
            <NavLink exact to={'/'} activeClassName='active'>
              <span className='glyphicon glyphicon-home'></span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/moive'} activeClassName='active'>
              <span className='glyphicon glyphicon-education'></span> Moive
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default NavMenu;