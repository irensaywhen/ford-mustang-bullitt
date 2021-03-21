import React from 'react';

const MenuListItem = props => {
  return (
    <li onClick={() => console.log('List item clicked')}>{props.children}</li>
  );
};

export default MenuListItem;
