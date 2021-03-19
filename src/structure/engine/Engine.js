import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';
import Block from '../../common/UI/Wrappers/Block';
import NarrowContentWrapper from '../../common/UI/Wrappers/NarrowContentWrapper';
import Figure from '../../common/UI/Figure/Figure';
import UnorderedList from '../../common/UI/UnorderedList';
import Modal from '../../common/UI/Modal';
import ResponsiveVideoWrapper from '../../common/UI/ResponsiveVideoWrapper';

import Table from '../../common/UI/Table';

// data
import { parts, specifications, underTheHoodData } from './data/engine';
import underTheHood from '../../assets/img/engine/under-the-hood.png';

// Hero
import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../../common/UI/Titles/H2';
import H3 from '../../common/UI/Titles/H3';

import classes from '../../assets/scss/pages/heroes.module.scss';

import { ModalContext } from '../../context/modal-context';

const Transmission = () => {
  const { path } = useRouteMatch();
  const modalContext = useContext(ModalContext);

  const specificationsData = specifications.map((specificationData, index) => (
    <div key={index} className='column is-6 '>
      <H3>{specificationData.tableTitle}</H3>
      <Table
        theadRow={specificationData.tableData.thead}
        tbodyRows={specificationData.tableData.tbody}
      />
    </div>
  ));
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
        <Block>
          <H2 className='has-text-centered'>Общие характеристики</H2>
          <NarrowContentWrapper>
            <p className='has-text-centered'>
              Двигатель автомобиля - сложный механизм, имеющий большое
              количество различных характеристик.
            </p>
          </NarrowContentWrapper>
        </Block>
        <div className='columns is-multiline'>{specificationsData}</div>
      </Section>
      <Section>
        <H2 className='has-text-centered'>Обзор Подкапотного простраства</H2>

        <div className='columns'>
          <div className='column is-5'>
            <Figure img={{ src: underTheHood }} />
          </div>
          <div className='column is-7'>
            <UnorderedList className='pt-5' listItems={underTheHoodData} />
          </div>
        </div>
      </Section>
      <Section>
        <NarrowContentWrapper>
          <H2 className='has-text-centered pb-4'>Системы двигателя</H2>
          <Tabs tabs={parts} />
        </NarrowContentWrapper>
      </Section>
    </React.Fragment>
  );
};

export default Transmission;
