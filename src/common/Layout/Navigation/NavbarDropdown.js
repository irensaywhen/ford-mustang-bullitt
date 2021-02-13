import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarDropdown = ({ children, drodownTitle, itemsPageUrl }) => {
  return (
    <div className='navbar-item has-dropdown is-hoverable'>
      <NavLink
        to={itemsPageUrl}
        activeClassName='is-active'
        className='navbar-link is-arrowless'
        exact
      >
        {drodownTitle}
      </NavLink>

      <div className='navbar-dropdown is-boxed'>{children}</div>
    </div>
  );
};

export default NavbarDropdown;
