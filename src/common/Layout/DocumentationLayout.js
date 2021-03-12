import React from 'react';
import Navigation from './Navigation/Navigation';
import DocumentationMenu from './DocumentationMenu/DocumentationMenu';
import Footer from './Footer/Footer';
import ContentWrapper from '../UI/Wrappers/ContentWrapper';

const DocumentationLayout = props => {
  return (
    <React.Fragment>
      <ContentWrapper>
        <Navigation />
        <DocumentationMenu />
        {props.children}
      </ContentWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default DocumentationLayout;
