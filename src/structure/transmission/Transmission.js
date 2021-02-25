import React, { useState, useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';
import Modal from '../common/UI/Modal';

import Clutch from './Clutch';
import Gearbox from './Gearbox';
import CardanJoint from './CardanJoint';
import Differential from './Differential';

import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

import classes from '../../assets/scss/pages/braking.module.scss';

import { ModalContext } from '../context/modal-context';

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

const videoNames = {
  clutch: 'clutch',
  gearbox: 'gearbox',
  cardanJoint: 'cardanJoint',
  differential: 'differential',
};

const Transmission = () => {
  const { path } = useRouteMatch();

  const modalContext = useContext(ModalContext);
  const [modalVideo, setModalVideo] = useState(null);

  // Start utilizing context API to set the current video type and open modal within
  // child conponents
  const openModal = video => {
    if (
      video === videoNames.clutch ||
      video === videoNames.gearbox ||
      videoNames.differential
    ) {
      setModalVideo(video);
    } else {
      throw new Error('Wrong video type');
    }

    modalContext.showModal();
  };

  let modalContent;

  switch (modalVideo) {
    case videoNames.clutch:
      modalContent = (
        <iframe
          title='clutch'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/BgZaz5b4JRk'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      );
      break;
    case videoNames.gearbox:
      modalContent = (
        <iframe
          title='gearbox'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/Bb7leiitIo4'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      );
      break;
    case videoNames.differential:
      modalContent = (
        <iframe
          title='differential'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/3mz1BpIE-Ec'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      );
      break;
    default:
      modalContent = null;
      break;
  }

  return (
    <React.Fragment>
      <Modal hidePadding transparentBackground>
        <div className='has-text-centered videoWrapper'>{modalContent}</div>
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
        <Tabs tabs={parts} />
      </Section>
    </React.Fragment>
  );
};

export default Transmission;
