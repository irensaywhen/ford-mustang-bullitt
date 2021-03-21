import React, { useContext } from 'react';
import MenuSection from './MenuSection';

import { DocsMenuContext } from '../../../context/docs-menu-context';

import routes from '../../../routes';

const DocumentationMenu = () => {
  const docsMenuContext = useContext(DocsMenuContext);

  const menuClasses = ['menu'];

  if (docsMenuContext.isDocsMenuVisible) {
    menuClasses.push('is-active');
  }

  return (
    <aside className={menuClasses.join(' ')}>
      <div className='menu-btn' onClick={docsMenuContext.toggleMenuVisibility}>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>

      <MenuSection menuLabel='Устройство' routes={routes.documentation} />
      <MenuSection menuLabel='Приборная панель' routes={routes.dashboard} />
    </aside>
  );
};

export default DocumentationMenu;
