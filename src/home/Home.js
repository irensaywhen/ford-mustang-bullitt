import React from 'react';

// import Hero from './Hero';
import TextSemibold from '../common/UI/Text/TextSemibold';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../common/UI/Titles/H2';

// Other UI elements
import Section from '../common/UI/Section';
import FeaturesList from '../common/UI/FeaturesList/FeaturesList';

// Data
import featuresList from './data/featuresList';

import classes from '../assets/scss/pages/heroes.module.scss';

const Home = () => {
  return (
    <div>
      <Hero
        className={[
          'is-fullheight',
          'has-text-centered',
          classes.HeroImage,
          classes.HomeImage,
        ].join(' ')}
      >
        <div className='block'>
          <HeroTitle className='is-1 pb-4'>Ford Mustang Bullitt</HeroTitle>
        </div>
        <div className='block'>
          <HeroSubtitle className='is-4'>
            Cпецверсия в честь пятидесятилетия Буллита.
          </HeroSubtitle>
        </div>
      </Hero>
      <Section>
        <H2 className='is-size-3 has-text-centered pb-6'>
          Каждый водитель должен помнить
        </H2>
        <FeaturesList featuresList={featuresList} />
      </Section>
    </div>
  );
};

export default Home;
