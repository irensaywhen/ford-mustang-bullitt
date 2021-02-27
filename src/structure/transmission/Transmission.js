import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';
import Modal from '../../common/UI/Modal';

import Clutch from './Clutch';
import Gearbox from './Gearbox';
import CardanJoint from './CardanJoint';
import Differential from './Differential';

import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

import classes from '../../assets/scss/pages/braking.module.scss';

import { ModalContext } from '../../context/modal-context';

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
  const { path } = useRouteMatch();

  const modalContext = useContext(ModalContext);

  return (
    <React.Fragment>
      <Modal hidePadding transparentBackground>
        <div className='has-text-centered videoWrapper'>
          {modalContext.modalContent}
        </div>
      </Modal>
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
        <div className='columns is-justify-content-center'>
          <div className='column is-12-mobile is-10-tablet is-8-desktop'>
            <Tabs tabs={parts} />
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default Transmission;
