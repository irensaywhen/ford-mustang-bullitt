import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../../routes';

const NavbarBrand = ({ toggleMenuHandler }) => {
  return (
    <div className='navbar-brand'>
      <Link to={routes.home} className='navbar-item'>
        Car
      </Link>

      <div
        role='button'
        className='navbar-burger'
        aria-label='menu'
        aria-expanded='false'
        onClick={toggleMenuHandler}
      >
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
        <span aria-hidden='true'></span>
      </div>
    </div>
  );
};

export default NavbarBrand;
