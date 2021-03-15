import React, { useContext } from 'react';

import Section from '../../common/UI/Section';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import Card from '../../common/UI/cards/Card';
import ComparisonCards from '../../common/UI/cards/ComparisonCards';
import FeaturesList from '../../common/UI/FeaturesList/FeaturesList';
import CenteredParagraph from '../../common/UI/CenteredParagraph';
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

import ResponsiveVideoWrapper from '../../common/UI/ResponsiveVideoWrapper';

import heroClasses from '../../assets/scss/pages/heroes.module.scss';
import classes from '../../assets/scss/pages/steering.module.scss';

import { ModalContext } from '../../context/modal-context';

// data
import faults from './data/faults';
import { powerSteeringFeaturs, steeringSystemCards } from './data/features';

const SteeringSystem = () => {
  const modalContext = useContext(ModalContext);

  // Power steering comparison cards
  const powerSteeringCards = steeringSystemCards.map((card, index) => {
    // Pros and cons of this type of steering
    const prosAndCons = card.prosAndCons
      .sort((item1, item2) => {
        if (item1.type === 'con') {
          return 1;
        } else if (item1.type === 'con' && item2.type === 'con') {
          return 0;
        }

        return -1;
      })
      .map((listItem, index) => (
        <BulletpointWithIcon
          key={index}
          icon={
            listItem.type === 'pro' ? (
              <i class='far fa-check-circle'></i>
            ) : (
              <i class='far fa-times-circle'></i>
            )
          }
          iconWrapperClasses={[
            listItem.type === 'pro' ? 'has-text-success' : 'has-text-danger',
          ]}
        >
          <p className='has-text-left is-size-5'>{listItem.description}</p>
        </BulletpointWithIcon>
      ));
    return (
      <div key={index} className='column is-5-tablet is-4-desktop'>
        <Card title={<h3 className='title is-5'>{card.title}</h3>}>
          {prosAndCons}
        </Card>
      </div>
    );
  });
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
            Имеет <TextSemibold>реечный тип</TextSemibold> и&nbsp;
            <TextSemibold>электроусилитель</TextSemibold> рулевого колеса
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
          <h2 className='title is-3 has-text-centered mb-3'>
            Электроусилитель рулевого колеса
          </h2>
          <div className='pb-5'>
            <CenteredParagraph>
              Впервые был использован компанией{' '}
              <TextSemibold>Ford</TextSemibold> в 2011 году для моделей{' '}
              <TextSemibold>Ford Mustang GT</TextSemibold>. Необходим для
              уменьшения усилия, необходимого для управления автомобилем.
            </CenteredParagraph>
          </div>
        </Block>
        <Block>
          <FeaturesList featuresList={powerSteeringFeaturs} />
        </Block>
      </Section>

      <Hero
        classNames={['is-halfheight', 'has-text-centered', classes.ProsAndCons]}
      >
        <div className='container'>
          <div className='pb-6'>Сравнение усилителей рулевого управления</div>

          <div className='columns is-justify-content-center'>
            <ComparisonCards cardsData={steeringSystemCards} />
          </div>
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
