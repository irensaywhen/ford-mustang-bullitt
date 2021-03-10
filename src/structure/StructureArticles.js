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
      <Route
        path={`${path}${routes.structure.transmission}`}
        component={Transmission}
      />
      <Route path={`${path}${routes.structure.chasis}`} component={Chasis} />
      <Route path={`${path}${routes.structure.engine}`} component={Engine} />
      <Route
        path={`${path}${routes.structure.electronics}`}
        component={ElectronicSystems}
      />
      <Route
        path={`${path}${routes.dashboard.warningLights}`}
        component={WarningLights}
      />
      <Route path={`${path}${routes.structure.safety}`} component={Safety} />
      <Route path={routes.structure.index}>
        <Section>
          <Link to={`${url}${routes.structure.electronics}`}>
            Electronic Systems
          </Link>
          <Link to={`${url}${routes.dashboard.warningLights}`}>
            Warning Lights
          </Link>
          <Link to={`${url}${routes.structure.safety}`}>Safety</Link>
          <Link to={`${url}${routes.structure.body}`}>Car body Link</Link>
          <Link to={`${url}${routes.structure.steering}`}>
            Steering system link
          </Link>
          <Link to={`${url}${routes.structure.chasis}`}>Chasis</Link>
          <Link to={`${url}${routes.structure.braking}`}>
            Braking system link
          </Link>
          <Link to={`${url}${routes.structure.transmission}`}>
            Transmission
          </Link>
          <Link to={`${url}${routes.structure.engine}`}>Engine</Link>
          This is structure articles list
        </Section>
      </Route>
    </Switch>
  );
};

export default StructureArticles;
