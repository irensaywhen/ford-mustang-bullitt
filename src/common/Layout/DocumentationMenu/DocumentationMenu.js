import React from 'react';
import MenuLabel from './MenuLabel';
import MenuList from './MenuList';

const DocumentationMenu = () => {
  return (
    <aside class='menu is-active'>
      <div class='menu-btn'>
        <div class='btn-line'></div>
        <div class='btn-line'></div>
        <div class='btn-line'></div>
      </div>
      <MenuLabel>General</MenuLabel>
      <MenuList />
      <MenuLabel>Transactions</MenuLabel>
      <MenuList />
    </aside>
  );
};

export default DocumentationMenu;
