import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import CarBody from './CarBody';
import SteeringSystem from './SteeringSystem';
import BrakingSystem from './BrakingSystem';
import Transmission from './transmission/Transmission';
import Engine from './engine/Engine';
import Chasis from './chasis/Chasis';
import Safety from './safety/Safety';
import ElectronicSystems from './electronicSystems/ElectronicSystems';
import WarningLights from '../dashboard/WarningLights';
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

  const documentationLinks = Object.values(
    routes.documentation
  ).map((routeData, index) => (
    <Link to={`${url}${routeData.path}`}>{routeData.name}</Link>
  ));
  return (
    <React.Fragment>
      <Switch>
        {documentationRoutes}
        <Route path={routes.main.documentation.path}>
          <Section>{documentationLinks}</Section>
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default StructureArticles;
