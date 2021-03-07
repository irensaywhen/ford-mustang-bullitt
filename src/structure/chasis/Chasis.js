import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';

import Table from '../../common/UI/Table';

// Hero
import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../../common/UI/Titles/H2';
import H3 from '../../common/UI/Titles/H3';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import classes from '../../assets/scss/pages/braking.module.scss';

import { ModalContext } from '../../context/modal-context';

// const parts = [
//   {
//     tabName: 'Система питания',
//     tabLink: 'fuel-system',
//     Component: FuelSystem,
//   },
//   {
//     tabName: 'Топливо',
//     tabLink: 'fuel',
//     Component: Fuel,
//   },
//   {
//     tabName: 'Выброс отработанного топлива',
//     tabLink: 'emission',
//     Component: Emission,
//   },
//   {
//     tabName: 'OBD-II',
//     tabLink: '/obd-system',
//     Component: OBDSystem,
//   },
//   {
//     tabName: 'Система зажигания',
//     tabLink: '/ignition',
//     Component: Ignition,
//   },
//   {
//     tabName: 'Система охлаждения',
//     tabLink: '/cooling',
//     Component: Cooling,
//   },
//   {
//     tabName: 'Система смазки',
//     tabLink: '/lubrication',
//     Component: Lubrication,
//   },
// ];

const fielEfficiencyAutonomy = {
  tBody: [
    ['Город', '16.4 л/100 км'],
    ['Магистраль', '10.2 л/100 км'],
    ['Комбинированный', '13.6 л/100 км'],
    ['Запас хода', '588 км'],
    [
      <span>
        Выброс CO<sub>2</sub>
      </span>,
      '319 г/км',
    ],
  ],
};

const basicCharacteristics = {
  tBody: [
    ['Двигатель', '5,0 l V8'],
    ['Сила', '480 лошадиных сил, 7,000 об/мин (358 кВт)'],
    ['Крутящий момент', '569 H/м, 4,600 об/мин'],
    ['Зажигание', 'Атмосферное'],
    ['Тип топлива', '16.4 л/100 км'],
    ['Город', '16.4 л/100 км'],
    ['Город', '16.4 л/100 км'],
  ],
};

const Chasis = () => {
  const { path } = useRouteMatch();
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
      {/*<Redirect to={`${path}/${parts[0].tabLink}`} />
      <Section>
        {
          <div className='columns is-justify-content-center'>
            <div className='column is-12-mobile is-10-tablet is-8-desktop'>
              <Tabs tabs={parts} />
            </div>
          </div>
        }
        <H2 className='has-text-centered pb-4'>Общие характеристики</H2>
        <div className='columns is-justify-content-center'>
          <div className='column'>
            <H3>Двигатель</H3>
            <Table tbodyRows={fielEfficiencyAutonomy.tBody} />
          </div>
          <div className='column'>
            <H3>Расход топлива</H3>
            <Table tbodyRows={basicCharacteristics.tBody} />
          </div>
        </div>
      </Section>*/}
    </React.Fragment>
  );
};

export default Chasis;
