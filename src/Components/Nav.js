import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/beach'>Beach</NavLink></li>
          <li><NavLink to='/coffee'>Coffee</NavLink></li>
        </ul>
      </nav>
);

export default Nav;