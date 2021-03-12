import React from 'react';
import MenuLabel from './MenuLabel';
import MenuList from './MenuList';

const DocumentationMenu = () => {
  return (
    <aside class='menu'>
      <MenuLabel>General</MenuLabel>
      <MenuList />
      <MenuLabel>Transactions</MenuLabel>
      <MenuList />
    </aside>
  );
};

export default DocumentationMenu;
