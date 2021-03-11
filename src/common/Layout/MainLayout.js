import React, { useContext } from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

import { MobileMenuContext } from '../../context/mobile-menu-context';

const MainLayout = ({ children }) => {
  const mobileMenuContext = useContext(MobileMenuContext);
  return (
    <React.Fragment>
      <div className='content-wrapper' onClick={mobileMenuContext.closeMenu}>
        <Navigation />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
