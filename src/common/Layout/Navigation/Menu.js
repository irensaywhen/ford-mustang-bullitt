import React, { useContext } from 'react';

import { MobileMenuContext } from '../../../context/mobile-menu-context';

import routes from '../../../routes';

import NavbarItem from './NavbarItem';

const Menu = () => {
  const navbarMenuClasses = ['navbar-menu'];

  const mobileMenuContext = useContext(MobileMenuContext);

  if (mobileMenuContext.isMobileMenuVisible) {
    navbarMenuClasses.push('is-active');
  }

  const navItems = Object.values(routes.main).map((routeData, index) => (
    <NavbarItem key={index} url={routeData.path}>
      {routeData.name}
    </NavbarItem>
  ));
  return (
    <div className={navbarMenuClasses.join(' ')}>
      <div className='navbar-end'>{navItems}</div>
    </div>
  );
};

export default Menu;
