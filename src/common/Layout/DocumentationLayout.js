import React from 'react';
import DocumentationMenu from './DocumentationMenu/DocumentationMenu';
import Footer from './Footer/Footer';

const DocumentationLayout = props => {
  return (
    <React.Fragment>
      <div className='content-wrapper'>
        <DocumentationMenu />
        {props.children}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default DocumentationLayout;
