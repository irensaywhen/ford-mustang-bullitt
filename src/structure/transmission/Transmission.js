import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';
import Modal from '../../common/UI/Modal';
import Block from '../../common/UI/Wrappers/Block';
import NarrowContentWrapper from '../../common/UI/Wrappers/NarrowContentWrapper';

import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

import ResponsiveVideoWrapper from '../../common/UI/ResponsiveVideoWrapper';

import classes from '../../assets/scss/pages/heroes.module.scss';

import { ModalContext } from '../../context/modal-context';

// data
import { parts } from './data/transmission';

const Transmission = () => {
  const { path } = useRouteMatch();

  const modalContext = useContext(ModalContext);

  return (
    <React.Fragment>
      <Modal hidePadding transparentBackground>
        <ResponsiveVideoWrapper>
          {modalContext.modalContent}
        </ResponsiveVideoWrapper>
      </Modal>
      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.HeroImage,
          classes.TransmissionImage,
        ].join(' ')}
      >
        <Block>
          <HeroTitle>Трансмиссия</HeroTitle>
        </Block>
        <Block>
          <HeroSubtitle>
            Предназначена для изменения скоростей при неизменной скорости,
            создаваемой двигателем.
          </HeroSubtitle>
        </Block>
      </Hero>
      <Redirect to={`${path}/${parts[0].tabLink}`} />
      <Section>
        <NarrowContentWrapper>
          <Tabs tabs={parts} />
        </NarrowContentWrapper>
      </Section>
    </React.Fragment>
  );
};

export default Transmission;
