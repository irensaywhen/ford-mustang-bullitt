import React, { useState } from 'react';
import MenuLabel from './MenuLabel';
import MenuList from './MenuList';

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
      <MenuLabel>General</MenuLabel>
      <MenuList />
      <MenuLabel>Transactions</MenuLabel>
      <MenuList />
    </aside>
  );
};

export default DocumentationMenu;
