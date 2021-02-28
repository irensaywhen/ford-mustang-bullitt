import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';

import Table from '../../common/UI/Table';

// Hero
import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

// Titles
import H2 from '../../common/UI/Titles/H2';

import classes from '../../assets/scss/pages/braking.module.scss';

import { ModalContext } from '../../context/modal-context';

// const parts = [
//   {
//     tabName: 'Сцепление',
//     tabLink: 'clutch',
//     Component: Clutch,
//   },
//   {
//     tabName: 'Коробка Передач',
//     tabLink: 'gearbox',
//     Component: Gearbox,
//   },
//   {
//     tabName: 'Главная передача и Дифференциал',
//     tabLink: 'differential',
//     Component: Differential,
//   },
//   {
//     tabName: 'Карданная передача',
//     tabLink: 'cardan-joint',
//     Component: CardanJoint,
//   },
// ];

const gearboxSwitchingThead = ['Переключение между', 'Скорость'];

// Array for rows
const gearboxSwitchingTbody = [
  ['1 - 2', '23 км/ч'],
  ['2 - 3', '40 км/ч'],
  ['3 - 4', '56 км/ч'],
  ['4 - 5', '66 км/ч'],
  ['5 - 6', '77 км/ч'],
];

const Transmission = () => {
  return (
    <React.Fragment>
      <Hero
        classNames={['is-halfheight', 'has-text-centered', classes.HeroImage]}
      >
        <div className='block'>
          <HeroTitle>Двигатель</HeroTitle>
        </div>
        <div className='block'>
          <HeroSubtitle>
            Предназначена для изменения скоростей при неизменной скорости,
            создаваемой двигателем.
          </HeroSubtitle>
        </div>
      </Hero>
      {/*<Redirect to={`${path}/${parts[0].tabLink}`} />*/}
      <Section>
        {/*<div className='columns is-justify-content-center'>
          <div className='column is-12-mobile is-10-tablet is-8-desktop'>
            <Tabs tabs={parts} />
          </div>
        </div>*/}
        <H2 className='has-text-centered mb-3'>Общие характеристики</H2>
        <Table
          theadRow={gearboxSwitchingThead}
          tbodyRows={gearboxSwitchingTbody}
          tFooterCaption='Точные скорости для оптимального использования топлива'
        />
      </Section>
    </React.Fragment>
  );
};

export default Transmission;
