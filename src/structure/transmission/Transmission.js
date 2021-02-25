import React from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';

import Clutch from './Clutch';
import Gearbox from './Gearbox';
import CardanJoint from './CardanJoint';
import Differential from './Differential';

import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

import classes from '../../assets/scss/pages/braking.module.scss';

const parts = [
  {
    tabName: 'Сцепление',
    tabLink: 'clutch',
    Component: Clutch,
  },
  {
    tabName: 'Коробка Передач',
    tabLink: 'gearbox',
    Component: Gearbox,
  },
  {
    tabName: 'Главная передача и Дифференциал',
    tabLink: 'differential',
    Component: Differential,
  },
  {
    tabName: 'Карданная передача',
    tabLink: 'cardan-joint',
    Component: CardanJoint,
  },
];

const Transmission = () => {
  const { path, url } = useRouteMatch();

  return (
    <React.Fragment>
      <Hero
        classNames={['is-halfheight', 'has-text-centered', classes.HeroImage]}
      >
        <div className='block'>
          <HeroTitle>Трансмиссия</HeroTitle>
        </div>
        <div className='block'>
          <HeroSubtitle>
            Предназначена для изменения скоростей при неизменной скорости,
            создаваемой двигателем.
          </HeroSubtitle>
        </div>
      </Hero>
      <Redirect to={`${path}/${parts[0].tabLink}`} />
      <Section>
        <Tabs tabs={parts} />
      </Section>
    </React.Fragment>
  );
};

export default Transmission;
