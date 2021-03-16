import React, { useContext } from 'react';

import Section from '../../common/UI/Section';
import ComparisonCards from '../../common/UI/cards/ComparisonCards';
import FeaturesList from '../../common/UI/FeaturesList/FeaturesList';
import CenteredParagraph from '../../common/UI/Paragraphs/CenteredParagraph';
import Modal from '../../common/UI/Modal';
import FaultsList from '../../common/UI/FaultsList';
import NarrowContentWrapper from '../../common/UI/Wrappers/NarrowContentWrapper';
import Block from '../../common/UI/Wrappers/Block';
import VideoIframe from '../../common/UI/VideoIframe';

import WhiteOutlineButton from '../../common/UI/Buttons/WhiteOutlineButton';

// Hero
import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

// Text
import TextSemibold from '../../common/UI/Text/TextSemibold';
import H2 from '../../common/UI/Titles/H2';

import ResponsiveVideoWrapper from '../../common/UI/ResponsiveVideoWrapper';

import heroClasses from '../../assets/scss/pages/heroes.module.scss';
import classes from '../../assets/scss/pages/steering.module.scss';

import { ModalContext } from '../../context/modal-context';

// data
import faults from './data/faults';
import { powerSteeringFeaturs, steeringSystemCards } from './data/features';

const SteeringSystem = () => {
  const modalContext = useContext(ModalContext);

  return (
    <React.Fragment>
      <Modal hidePadding transparentBackground>
        <ResponsiveVideoWrapper>
          <VideoIframe
            title='Принцип работы рулевого управления'
            src='https://www.youtube.com/embed/em1O8mz7sF0'
          ></VideoIframe>
        </ResponsiveVideoWrapper>
      </Modal>
      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          heroClasses.HeroImage,
          heroClasses.SteeringImage,
        ].join(' ')}
      >
        <Block>
          <HeroTitle>Система Рулевого Управления</HeroTitle>
        </Block>
        <Block>
          <HeroSubtitle>
            Имеет реечный тип и электроусилитель рулевого колеса
          </HeroSubtitle>
        </Block>
        <Block>
          <WhiteOutlineButton onClick={modalContext.showModal}>
            Как работает рулевой механизм?
          </WhiteOutlineButton>
        </Block>
      </Hero>
      <Section>
        <Block>
          <H2 className='has-text-centered'>
            Электроусилитель рулевого колеса
          </H2>
        </Block>
        <Block className='pb-5'>
          <CenteredParagraph>
            Впервые был использован компанией <TextSemibold>Ford</TextSemibold>{' '}
            в 2011 году для моделей <TextSemibold>Ford Mustang GT</TextSemibold>
            . Необходим для уменьшения усилия, необходимого для управления
            автомобилем.
          </CenteredParagraph>
        </Block>
        <Block>
          <FeaturesList featuresList={powerSteeringFeaturs} />
        </Block>
      </Section>

      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.ProsAndCons,
        ].join(' ')}
      >
        <HeroTitle className='has-text-centered pb-6'>
          Сравнение усилителей рулевого управления
        </HeroTitle>

        <div className='columns is-justify-content-center'>
          <ComparisonCards cardsData={steeringSystemCards} />
        </div>
      </Hero>

      <Section>
        <Block>
          <h2 className='title is-3 has-text-centered'>
            Основные неисправности рулевого управления
          </h2>
        </Block>

        <Block className='has-text-centered pb-2'>
          <CenteredParagraph>
            Знание основных неисправностей рулевого механизма, а также условий,
            при которых запрещена эксплуатация транспортного средства{' '}
            <strong className='has-text-danger'>критически важно</strong>.
            <br></br>
            Это убережет жизнь водителя и окружающих.
          </CenteredParagraph>
        </Block>
        <NarrowContentWrapper>
          <FaultsList faults={faults} />
        </NarrowContentWrapper>
      </Section>
    </React.Fragment>
  );
};

export default SteeringSystem;
