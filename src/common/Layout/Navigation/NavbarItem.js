import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { MobileMenuContext } from '../../../context/mobile-menu-context';

const NavbarItem = ({ url, children }) => {
  const mobileMenuContext = useContext(MobileMenuContext);
  return (
    <NavLink
      to={url}
      activeClassName='is-active'
      className='navbar-item'
      onClick={mobileMenuContext.toggleMenuVisibility}
      exact
    >
      {children}
    </NavLink>
  );
};

export default NavbarItem;
