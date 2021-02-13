import React, { useState } from 'react';

import NavbarBrand from './NavbarBrand';
import Menu from './Menu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuHandler = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  return (
    <nav className='navbar is-fixed-top'>
      <div className='container'>
        <NavbarBrand toggleMenuHandler={toggleMenuHandler} />
        <Menu isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
};

export default Navigation;
