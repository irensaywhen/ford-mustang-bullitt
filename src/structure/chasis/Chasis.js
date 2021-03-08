import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Suspension from './Suspension';
import WheelsAndTires from './WheelsAndTires';

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

import classes from '../../assets/scss/pages/heroes.module.scss';

import { ModalContext } from '../../context/modal-context';

const parts = [
  {
    tabName: 'Подвеска',
    tabLink: 'suspension',
    Component: Suspension,
  },
  {
    tabName: 'Колеса и шины',
    tabLink: 'wheels-and-tires',
    Component: WheelsAndTires,
  },
];

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
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.HeroImage,
          classes.CarBodyImage,
        ].join(' ')}
      >
        <div className='block'>
          <HeroTitle>Ходовая часть</HeroTitle>
        </div>
        <div className='block'>
          <HeroSubtitle>
            Предназначена для перемещения автомобиля по дороге с определенным
            уровнем комфорта, без тряски и вибраций. Механизмы и детали
            холодовой части связывают колеса с кузовом и гасят его колебания.
            <br></br>
            Состоит из передней и задней подвесок колес, колес и шин.
          </HeroSubtitle>
        </div>
      </Hero>
      <Redirect to={`${path}/${parts[0].tabLink}`} />
      <Section>
        <div className='columns is-justify-content-center'>
          <div className='column is-12-mobile is-10-tablet is-8-desktop'>
            <Tabs tabs={parts} />
          </div>
        </div>
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
      </Section>
    </React.Fragment>
  );
};

export default Chasis;
