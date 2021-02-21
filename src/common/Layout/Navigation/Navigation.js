import React from 'react';

import NavbarBrand from './NavbarBrand';
import Menu from './Menu';

const Navigation = () => {
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
