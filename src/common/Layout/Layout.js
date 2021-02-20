import React from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <Navigation />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
