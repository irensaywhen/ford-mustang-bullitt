import React from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import ContentWrapper from '../UI/Wrappers/ContentWrapper';

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <ContentWrapper>
        <Navigation />
        {children}
      </ContentWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;
