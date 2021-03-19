import React from 'react';

import Section from '../common/UI/Section';
import Block from '../common/UI/Wrappers/Block';
import WarningLightsList from './WarningLightsList';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../common/UI/Hero/HeroSubtitle';

// data
import {
  criticalWarnings,
  lightsIndicators,
  nonCriticalWanings,
} from './data/warningLights';
import classes from '../assets/scss/pages/heroes.module.scss';
import warningLightsClasses from '../assets/scss/pages/dashboard.module.scss';

// Swiper configs
const swiperConfigs = {
  lampsIndicators: {
    loop: false,
  },
  criticalWarnings: {
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      580: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      990: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  },
};

const WarningLights = () => {
  return (
    <>
      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.HeroImage,
          classes.GaugesImage,
        ].join(' ')}
      >
        <Block>
          <HeroTitle>Световые индикаторы</HeroTitle>
        </Block>
        <Block>
          <HeroSubtitle>
            Электрическая система, помогающая водителю обнаруживать
            неисправности оборудования, предотвращать поломки, а также видеть
            работающие приборы.
          </HeroSubtitle>
        </Block>
      </Hero>
      <Section className={warningLightsClasses.Section}>
        <WarningLightsList
          listTitle={criticalWarnings.metaData.title}
          listDescription={criticalWarnings.metaData.description}
          warningsList={criticalWarnings.list}
          swiperConfig={swiperConfigs.criticalWarnings}
        />

        <WarningLightsList
          listTitle={nonCriticalWanings.metaData.title}
          listDescription={nonCriticalWanings.metaData.description}
          warningsList={nonCriticalWanings.list}
        />

        <WarningLightsList
          listTitle={lightsIndicators.metaData.title}
          listDescription={lightsIndicators.metaData.description}
          warningsList={lightsIndicators.list}
          swiperConfig={swiperConfigs.lampsIndicators}
        />
      </Section>
    </>
  );
};

export default WarningLights;
