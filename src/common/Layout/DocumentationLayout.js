import React, { useContext } from 'react';
import { DocsMenuContext } from '../../context/docs-menu-context';

import Navigation from './Navigation/Navigation';
import DocumentationMenu from './DocumentationMenu/DocumentationMenu';
import Footer from './Footer/Footer';
import ContentWrapper from '../UI/Wrappers/ContentWrapper';

const DocumentationLayout = props => {
  const docsMenuContext = useContext(DocsMenuContext);
  return (
    <React.Fragment>
      <ContentWrapper>
        <Navigation />

        <DocumentationMenu />

        <div className='content-inner' onClick={docsMenuContext.closeMenu}>
          {props.children}
        </div>
      </ContentWrapper>
      <Footer />
    </React.Fragment>
  );
};

export default DocumentationLayout;
