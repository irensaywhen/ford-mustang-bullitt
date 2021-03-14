import React from 'react';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import ContentWrapper from '../UI/Wrappers/ContentWrapper';

const MainLayout = ({ children }) => {
  console.log('Rendering main layout');
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
