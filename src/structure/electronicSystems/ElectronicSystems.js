import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';

import Table from '../../common/UI/Table';

// Tab components
import Battery from './Battery';
import Generator from './Generator';
import StartingEngine from './StartingEngine';

// Hero
import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../../common/UI/Titles/H2';
import H3 from '../../common/UI/Titles/H3';
import TextSemibold from '../../common/UI/Text/TextSemibold';
import CenteredParagraphLg from '../../common/UI/Paragraphs/CenteredParagraphLg';

import classes from '../../assets/scss/pages/heroes.module.scss';

import { ModalContext } from '../../context/modal-context';

const supplyParts = [
  {
    tabName: 'Аккумуляторная батарея',
    tabLink: 'battery',
    Component: Battery,
  },
  {
    tabName: 'Генератор',
    tabLink: 'generator',
    Component: Generator,
  },
];

const consumersParts = [
  {
    tabName: 'Система пуска двигателя',
    tabLink: 'starting-engine',
    Component: StartingEngine,
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

const ElectronicSystems = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.HeroImage,
          classes.ElectronicsImage,
        ].join(' ')}
      >
        <div className='block'>
          <HeroTitle>Электрооборудование автомобиля</HeroTitle>
        </div>
        <div className='block'>
          <HeroSubtitle>
            Включает в себя <TextSemibold>источники</TextSemibold> и{' '}
            <TextSemibold>потребители</TextSemibold> тока.
          </HeroSubtitle>
        </div>
      </Hero>
      {<Redirect to={`${path}/${supplyParts[0].tabLink}`} />}
      <Section>
        <div className='block'>
          <H2 className='has-text-centered'>Источники тока</H2>
          <CenteredParagraphLg className='pt-2'>
            К источникам тока относятся{' '}
            <TextSemibold>аккумуляторная батарея</TextSemibold> и{' '}
            <TextSemibold>генератор</TextSemibold>.
          </CenteredParagraphLg>
          <div className='columns is-justify-content-center'>
            <div className='column is-12-mobile is-10-tablet is-8-desktop'>
              <Tabs tabs={supplyParts} />
            </div>
          </div>
        </div>

        <div className='block'>
          <H2 className='has-text-centered'>Потребители тока</H2>
          <CenteredParagraphLg className='pt-2'>
            К потребителям тока относятся системы:{' '}
            <TextSemibold>зажигания</TextSemibold>,{' '}
            <TextSemibold>пуска двигателя</TextSemibold>,{' '}
            <TextSemibold>освещения и сигнализации</TextSemibold>,{' '}
            <TextSemibold>контрольно-измерительные приборы</TextSemibold>,{' '}
            <TextSemibold>дополнительное оборудование</TextSemibold>.
          </CenteredParagraphLg>
          <div className='columns is-justify-content-center'>
            <div className='column is-12-mobile is-10-tablet is-8-desktop'>
              <Tabs tabs={consumersParts} />
            </div>
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

export default ElectronicSystems;
