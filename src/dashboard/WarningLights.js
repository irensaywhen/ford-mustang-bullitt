import React from 'react';

import Section from '../common/UI/Section';
import Block from '../common/UI/Wrappers/Block';
import warningLightsImage from '../assets/img/dacia-logan-dashboard-warning-lights.jpg';
import WarningLightsList from './WarningLightsList';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../common/UI/Hero/HeroSubtitle';

// import criticalWarnings from './warningLights/data/criticalWarnings';
// import nonCriticalWaningLights from './warningLights/data/nonCriticalWarnings';
import lightningSymbols from './warningLights/data/lightningSymbols';
import commonSymbols from './warningLights/data/commonSymbols';

// data
import { criticalWarnings, nonCriticalWanings } from './data/warningLights';
import classes from '../assets/scss/pages/heroes.module.scss';
import warningLightsClasses from '../assets/scss/pages/dashboard.module.scss';

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
            Некоторые загораются при включении двигателя, чтобы проверить их
            работоспособность.
          </HeroSubtitle>
        </Block>
      </Hero>
      <Section className={warningLightsClasses.Section}>
        <WarningLightsList
          listTitle={criticalWarnings.metaData.title}
          listDescription={criticalWarnings.metaData.description}
          warningsList={criticalWarnings.list}
        />

        <WarningLightsList
          listTitle={nonCriticalWanings.metaData.title}
          listDescription={nonCriticalWanings.metaData.description}
          warningsList={nonCriticalWanings.list}
        />

        <WarningLightsList
          listTitle='Световые индикаторы'
          warningsList={lightningSymbols}
        />
      </Section>
    </>
  );
};

export default WarningLights;
