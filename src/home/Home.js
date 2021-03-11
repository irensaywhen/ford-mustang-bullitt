import React from 'react';

// import Hero from './Hero';
import TextSemibold from '../common/UI/Text/TextSemibold';
import Block from '../common/UI/Wrappers/Block';
import Figure from '../common/UI/Figure/Figure';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../common/UI/Titles/H2';
import EmphasizedPagargraph from '../common/UI/Paragraphs/EmphasizedPagargraph';
import CenteredParagraphLg from '../common/UI/Paragraphs/CenteredParagraphLg';

// Other UI elements
import Section from '../common/UI/Section';
import FeaturesList from '../common/UI/FeaturesList/FeaturesList';

// Data and images
import featuresList from './data/featuresList';
import jacket from '../assets/img/home/jacket.jpg';
import noviceSymbol from '../assets/img/home/novice.jpg';

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
      <Section className='is-medium pt-6'>
        <Block>
          <H2 className='is-size-3 has-text-centered pb-6'>
            Обязательные атрибуты
          </H2>
        </Block>
        <Block>
          <div className='columns is-justify-content-center has-text-centered'>
            <div className='column is-4 is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
              <EmphasizedPagargraph className='pb-4'>
                Светоотражающая жилетка
              </EmphasizedPagargraph>
              <Figure className='is-128x128' img={{ src: jacket }} />
            </div>
            <div className='column is-4 is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
              <EmphasizedPagargraph className='pb-4'>
                Знак <TextSemibold>Стаж вождения меньше 2 лет</TextSemibold>
              </EmphasizedPagargraph>
              <Figure className='is-128x128' img={{ src: noviceSymbol }} />
            </div>
          </div>
        </Block>
      </Section>
    </div>
  );
};

export default Home;
