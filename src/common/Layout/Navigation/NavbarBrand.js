import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { MobileMenuContext } from '../../../context/mobile-menu-context';

import routes from '../../../routes';

const NavbarBrand = () => {
  const mobileMenuContext = useContext(MobileMenuContext);

  return (
    <div className='navbar-brand'>
      <Link to={routes.main.home.path} className='navbar-item'>
        <div className='brand'>Mustang Bullitt</div>
      </Link>

      <div
        role='button'
        className='navbar-burger'
        aria-label='menu'
        aria-expanded='false'
        onClick={mobileMenuContext.toggleMenuVisibility}
      >
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </div>
    </div>
  );
};

export default NavbarBrand;
