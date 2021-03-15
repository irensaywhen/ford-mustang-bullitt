import React, { useContext } from 'react';

import brakesKit from '../../assets/img/braking/braking-kit.jpg';
import brakeFluidReservoir from '../../assets/img/braking/brake-fluid-reservoir.png';

import Section from '../../common/UI/Section';
import CenteredParagraphLg from '../../common/UI/Paragraphs/CenteredParagraphLg';
import FeaturesList from '../../common/UI/FeaturesList/FeaturesList';
import Modal from '../../common/UI/Modal';
import HalfWidthColumn from '../../common/UI/HalfWidthColumn';
import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';
import ResponsiveVideoWrapper from '../../common/UI/ResponsiveVideoWrapper';
import FaultsList from '../../common/UI/FaultsList';
import NarrowContentWrapper from '../../common/UI/Wrappers/NarrowContentWrapper';
import VideoIframe from '../../common/UI/VideoIframe';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';

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

// data
import faults from './data/faults';
import {
  brakesFeatures,
  brakingSystemData,
  additionalBrakingSystemData,
} from './data/features';

const BrakingSystem = () => {
  const modalContext = useContext(ModalContext);

  const openModal = videoType => {
    // Set modal content based on the provided video type
    switch (videoType) {
      case 'first':
        modalContext.setModalContent(() => (
          <VideoIframe
            title='Braking system part 1'
            src='https://www.youtube.com/embed/MAuVDB-G-HQ'
          ></VideoIframe>
        ));
        break;
      case 'second':
        modalContext.setModalContent(() => (
          <VideoIframe
            title='Braking system part 2'
            src='https://www.youtube.com/embed/bGKJOICWmFQ'
          ></VideoIframe>
        ));
        break;
      default:
        throw new Error('Wrong video type');
    }

    // Open modal
    modalContext.showModal();
  };

  const mainBrakingSystemData = brakingSystemData.map((data, index) => (
    <Block key={index}>
      <H3 className='mb-3'>{data.title}</H3>
      <p>{data.description}</p>
    </Block>
  ));

  const mainBrakingSystemDataSecondPart = additionalBrakingSystemData.map(
    (data, index) => (
      <Block key={index}>
        <H3 className='mb-3'>{data.title}</H3>
        <p>{data.description}</p>
      </Block>
    )
  );
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
          classes.BrakingImage,
        ].join(' ')}
      >
        <Block>
          <HeroTitle>Тормозная система</HeroTitle>
        </Block>
        <Block>
          <HeroSubtitle>
            Состоит из рабочей и стояночной тормозных систем.
          </HeroSubtitle>
        </Block>
      </Hero>

      <Section>
        <FeaturesList featuresList={brakesFeatures} />
      </Section>

      <Section>
        <div className='columns'>
          <HalfWidthColumn>
            <Figure img={{ src: brakesKit }} />
          </HalfWidthColumn>
          <HalfWidthColumn>
            <Block className='block pt-3'>{mainBrakingSystemData}</Block>
            <Block>
              <H3>Тормозная система</H3>
              <p>
                Состоит из рабочей и стоячей тормозных систем и предназначена
                как для уменьшения скорости и остановки(РТС), так и для
                удержания автомобиля на месте(СТС).
              </p>
            </Block>
            <Block className='pt-4 has-text-centered'>
              <PrimaryButton onClick={() => openModal('first')}>
                Как это работает?
              </PrimaryButton>
            </Block>
          </HalfWidthColumn>
        </div>

        <div className='columns columns-reverse-tablet'>
          <HalfWidthColumn>
            <Figure img={{ src: brakeFluidReservoir }} />
          </HalfWidthColumn>
          <HalfWidthColumn>
            <div className='block pt-3'>{mainBrakingSystemDataSecondPart}</div>
            <Block className='pt-4 has-text-centered'>
              <PrimaryButton onClick={() => openModal('second')}>
                Что делает вакуумный усилитель?
              </PrimaryButton>
            </Block>
          </HalfWidthColumn>
        </div>
      </Section>
      <Section>
        <Block>
          <H2 className='has-text-centered'>
            Основные неисправности тормозных систем
          </H2>
        </Block>

        <Block className='has-text-centered pb-2'>
          <CenteredParagraphLg>
            Знание неисправностей тормозной системы не только{' '}
            <TextSemibold>убережет жизнь</TextSemibold> водителя и окружающих,
            но и поможет <TextSemibold>избежать больших затрат</TextSemibold> на
            починку тормозных систем.
          </CenteredParagraphLg>
        </Block>

        <NarrowContentWrapper>
          <FaultsList faults={faults} />
        </NarrowContentWrapper>
      </Section>
    </React.Fragment>
  );
};

export default BrakingSystem;
