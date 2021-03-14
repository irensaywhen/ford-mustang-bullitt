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
        {/*<div className='columns content-inner'>
          <div className='column is-3 is-2-desktop menu-wrapper is-active'>
            <DocumentationMenu />
          </div>
          <div className='column is-12 is-10-desktop'>{props.children}</div>
  </div>*/}
        {/*<div className='is-flex'>
        <div className='menu-wrapper'>*/}
        <DocumentationMenu />
        {/*</div>*/}
        <div className='content-inner'>{props.children}</div>
        {/*</div>*/}
      </ContentWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default DocumentationLayout;
