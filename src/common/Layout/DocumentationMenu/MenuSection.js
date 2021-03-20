import React from 'react';
import MenuLabel from './MenuLabel';
import MenuList from './MenuList';

const MenuSection = props => {
  return (
    <>
      <MenuLabel>{props.menuLabel}</MenuLabel>
      <MenuList routes={props.routes} />
    </>
  );
};

export default MenuSection;
