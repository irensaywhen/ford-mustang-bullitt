import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import Section from '../common/UI/Section';

import routes from '../routes';

const StructureArticles = () => {
  const { path, url } = useRouteMatch();

  const documentationRoutes = Object.values(
    routes.documentation
  ).map((routeData, index) => (
    <Route
      key={index}
      path={`${path}${routeData.path}`}
      component={routeData.Component}
    />
  ));

  const documentationLinks = Object.values(routes.documentation).map(
    (routeData, index) => (
      <Link key={index} to={`${url}${routeData.path}`}>
        {routeData.name}
      </Link>
    )
  );

  const dashboardRoutes = Object.values(
    routes.dashboard
  ).map((routeData, index) => (
    <Route
      key={index}
      path={`${path}${routeData.path}`}
      component={routeData.Component}
    />
  ));
  console.log(routes.dashboard);
  const dashboardLinks = Object.values(routes.dashboard).map(
    (routeData, index) => (
      <Link key={index} to={`${url}${routeData.path}`}>
        {routeData.name}
      </Link>
    )
  );
  return (
    <React.Fragment>
      <Switch>
        {documentationRoutes}
        {dashboardRoutes}
        <Route path={routes.main.documentation.path}>
          <Section>
            {documentationLinks}
            {dashboardLinks}
          </Section>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default StructureArticles;
