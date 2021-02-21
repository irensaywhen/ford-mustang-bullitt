import React, { useState, useContext } from 'react';

import { MobileMenuContext } from '../../../context/mobile-menu-context';

import NavbarBrand from './NavbarBrand';
import Menu from './Menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const mobileMenuContext = useContext(MobileMenuContext);

  // console.log(mobileMenuContext);

  const toggleMenuHandler = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  return (
    <nav className='navbar is-fixed-top'>
      <div className='container'>
        <NavbarBrand />
        <Menu />
      </div>
    </nav>
  );
};

export default Navigation;
