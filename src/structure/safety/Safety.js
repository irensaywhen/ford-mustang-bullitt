import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';
import WhiteOutlineButton from '../../common/UI/Buttons/WhiteOutlineButton';
import Modal from '../../common/UI/Modal';
import ResponsiveVideoWrapper from '../../common/UI/ResponsiveVideoWrapper';
import Block from '../../common/UI/Wrappers/Block';
import NarrowContentWrapper from '../../common/UI/Wrappers/NarrowContentWrapper';

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

// data
import { activeSafetySystem, passiveSafetySystem } from './data/safety';

const Safety = () => {
  const { path } = useRouteMatch();
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <iframe
        className='has-ratio'
        title='Has electronics work in car'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/piX-MwO3xrI'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    ));

    modalContext.showModal();
  };
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
          classes.SafetyImage,
        ].join(' ')}
      >
        <Block>
          <HeroTitle>Безопасность</HeroTitle>
        </Block>
        <Block>
          <HeroSubtitle>
            Условно делится на <TextSemibold>активную</TextSemibold> и{' '}
            <TextSemibold>пассивную</TextSemibold>.
          </HeroSubtitle>
        </Block>
      </Hero>
      {<Redirect to={`${path}/${activeSafetySystem[0].tabLink}`} />}
      <Section>
        <Block>
          <H2 className='has-text-centered'>Активная безопасность</H2>
          <CenteredParagraphLg className='pt-2'>
            Это системы и устройства машины, которые позволяют ей избежать
            столкновения.
          </CenteredParagraphLg>
          <NarrowContentWrapper>
            <Tabs tabs={activeSafetySystem} />
          </NarrowContentWrapper>
        </Block>

        <Block>
          <H2 className='has-text-centered'>Пассивная безопасность</H2>
          <CenteredParagraphLg className='pt-2'>
            Это возможности автомобиля сохранить жизнь и здоровье пассажиров,
            если нештатная ситуация всё-таки произошла.
          </CenteredParagraphLg>
          <NarrowContentWrapper>
            <Tabs tabs={passiveSafetySystem} />
          </NarrowContentWrapper>
        </Block>
      </Section>
    </React.Fragment>
  );
};

export default Safety;
