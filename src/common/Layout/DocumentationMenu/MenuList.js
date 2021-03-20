import React from 'react';
import { Route, useRouteMatch, Link } from 'react-router-dom';

import MenuListItem from './MenuListItem';

const MenuList = props => {
  const { path, url } = useRouteMatch();

  const documentationRoutes = Object.values(
    props.routes
  ).map((routeData, index) => (
    <Route
      key={index}
      path={`${path}${routeData.path}`}
      component={routeData.Component}
    />
  ));

  const documentationLinks = Object.values(props.routes).map(
    (routeData, index) => (
      <MenuListItem key={index}>
        <Link to={`${url}${routeData.path}`}>{routeData.name}</Link>
      </MenuListItem>
    )
  );

  return (
    <>
      {documentationRoutes}
      <ul className='menu-list'>{documentationLinks}</ul>
    </>
  );
};

export default MenuList;
