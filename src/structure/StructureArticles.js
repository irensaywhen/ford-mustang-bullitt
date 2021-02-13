import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import CarBody from './CarBody';
import SteeringSystem from './SteeringSystem';
import BrakingSystem from './BrakingSystem';
import Section from '../common/UI/Section';

import routes from '../routes';

const StructureArticles = () => {
  const { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}${routes.structure.body}`} component={CarBody} />
      <Route
        path={`${path}${routes.structure.steering}`}
        component={SteeringSystem}
      />
      <Route
        path={`${path}${routes.structure.braking}`}
        component={BrakingSystem}
      />
      <Route path={routes.structure.index}>
        <Section>
          <Link to={`${url}${routes.structure.body}`}>Car body Link</Link>
          <Link to={`${url}${routes.structure.steering}`}>
            Steering system link
          </Link>
          <Link to={`${url}${routes.structure.braking}`}>
            Braking system link
          </Link>
          This is structure articles list
        </Section>
      </Route>
    </Switch>
  );
};

export default StructureArticles;
