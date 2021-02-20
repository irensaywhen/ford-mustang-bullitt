import React from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
