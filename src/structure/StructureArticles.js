import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

import CarBody from './CarBody';
import SteeringSystem from './SteeringSystem';
import Section from '../common/UI/Section';

import routes from '../routes';

const StructureArticles = () => {
  const { path, url } = useRouteMatch();

  console.log(path, url);
  console.log(`${path}${routes.structure.body}`);
  return (
    <Switch>
      <Route path={`${path}${routes.structure.body}`} component={CarBody} />
      <Route
        path={`${path}${routes.structure.steering}`}
        component={SteeringSystem}
      />
      <Route path={routes.structure.index}>
        <Section>
          <Link to={`${url}${routes.structure.body}`}>Car body Link</Link>
          <Link to={`${url}${routes.structure.steering}`}>
            Steering system link
          </Link>
          This is structure articles list
        </Section>
      </Route>
    </Switch>
  );
};

export default StructureArticles;
