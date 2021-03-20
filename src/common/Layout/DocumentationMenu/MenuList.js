import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import MenuListItem from './MenuListItem';

const MenuList = props => {
  const { url } = useRouteMatch();

  const documentationLinks = Object.values(props.routes).map(
    (routeData, index) => (
      <MenuListItem key={index}>
        <Link to={`${url}${routeData.path}`}>{routeData.name}</Link>
      </MenuListItem>
    )
  );

  return (
    <>
      <ul className='menu-list'>{documentationLinks}</ul>
    </>
  );
};

export default MenuList;
