import React, { useContext } from 'react';

import { MobileMenuContext } from '../../../context/mobile-menu-context';

import routes from '../../../routes';

import NavbarItem from './NavbarItem';
import NavbarDropdown from './NavbarDropdown';

const Menu = ({ isMenuOpen }) => {
  const navbarMenuClasses = ['navbar-menu'];

  const mobileMenuContext = useContext(MobileMenuContext);

  if (mobileMenuContext.isMobileMenuVisible) {
    navbarMenuClasses.push('is-active');
  }
  return (
    <div className={navbarMenuClasses.join(' ')}>
      <div className='navbar-end'>
        <NavbarItem url={routes.home}>Home</NavbarItem>

        <NavbarDropdown drodownTitle='Articles' itemsPageUrl={routes.articles}>
          <NavbarItem url={routes.history}>Car history</NavbarItem>
        </NavbarDropdown>

        <NavbarDropdown
          drodownTitle='Dashboard'
          itemsPageUrl={routes.dashboard.index}
        >
          <NavbarItem url={routes.dashboard.mainGauges}>Main gauges</NavbarItem>
          <NavbarItem url={routes.dashboard.warningLights}>
            Warning lights
          </NavbarItem>
        </NavbarDropdown>

        <NavbarItem url={routes.structure.index}>Устройство</NavbarItem>

        <NavbarItem url={routes.about}>About</NavbarItem>
        <NavbarItem url={routes.contact}>Contact</NavbarItem>
      </div>
    </div>
  );
};

export default Menu;
