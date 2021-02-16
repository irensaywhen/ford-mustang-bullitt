import React from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';

import Clutch from './Clutch';
import Gearbox from './Gearbox';
import Differential from './Differential';

const parts = [
  {
    tabName: 'Сцепление',
    tabLink: 'clutch',
    component: Clutch,
  },
  {
    tabName: 'Коробка Передач',
    tabLink: 'gearbox',
    component: Gearbox,
  },
  {
    tabName: 'Дифференциал',
    tabLink: 'differential',
    component: Differential,
  },
];

const Transmission = () => {
  const { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <Redirect to={`${path}/${parts[0].tabLink}`} />
      <Section>Transmission</Section>
      <Section>
        <Tabs tabs={parts} />
      </Section>
    </React.Fragment>
  );
};

export default Transmission;
