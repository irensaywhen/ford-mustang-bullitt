import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarItem = ({ url, children }) => {
  return (
    <NavLink to={url} activeClassName='is-active' className='navbar-item' exact>
      {children}
    </NavLink>
  );
};

export default NavbarItem;
