import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';
import Block from '../../common/UI/Wrappers/Block';
import NarrowContentWrapper from '../../common/UI/Wrappers/NarrowContentWrapper';

import Table from '../../common/UI/Table';

// data
import {
  parts,
  fielEfficiencyAutonomy,
  basicCharacteristics,
} from './data/engine';

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

const Transmission = () => {
  const { path } = useRouteMatch();
  return (
    <React.Fragment>
      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.HeroImage,
          classes.EngineImage,
        ].join(' ')}
      >
        <Block>
          <HeroTitle>Двигатель</HeroTitle>
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
        <H2 className='has-text-centered pb-4'>Общие характеристики</H2>
        <div className='columns is-justify-content-center'>
          <div className='column'>
            <H3>Расход топлива</H3>
            <Table tbodyRows={basicCharacteristics.tBody} />
          </div>
          <div className='column'>
            <H3>Двигатель</H3>
            <Table tbodyRows={fielEfficiencyAutonomy.tBody} />
          </div>
        </div>
      </Section>
      <Section>
        <NarrowContentWrapper>
          <H2 className='has-text-centered pb-4'>Части двигателя</H2>
          <Tabs tabs={parts} />
        </NarrowContentWrapper>
      </Section>
    </React.Fragment>
  );
};

export default Transmission;
