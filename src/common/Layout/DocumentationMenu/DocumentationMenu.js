import React, { useState } from 'react';
import MenuSection from './MenuSection';

import routes from '../../../routes';

const DocumentationMenu = () => {
  const [docsMenuVisible, setDocsMenuVisible] = useState(false);

  const toggleDocsMenuVisibility = () => {
    setDocsMenuVisible(isMenuVisible => !isMenuVisible);
  };

  const menuClasses = ['menu'];

  if (docsMenuVisible) {
    menuClasses.push('is-active');
  }

  return (
    <aside className={menuClasses.join(' ')}>
      <div className='menu-btn' onClick={toggleDocsMenuVisibility}>
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
