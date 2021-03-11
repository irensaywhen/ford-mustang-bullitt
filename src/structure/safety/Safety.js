import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';
import WhiteOutlineButton from '../../common/UI/Buttons/WhiteOutlineButton';
import Table from '../../common/UI/Table';
import Modal from '../../common/UI/Modal';
import ResponsiveVideoWrapper from '../../common/UI/ResponsiveVideoWrapper';

// Active safety
import StabilityControl from './StabilityControl';
import ParkingAids from './ParkingAids';
import CruiseControl from './CruiseControl';
import ABS from './ABS';

// Passive safety
import Seatbelts from './Seatbelts';
import SupplementaryRestraintSystem from './SupplementaryRestraintSystem';

// Hero
import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../../common/UI/Titles/H2';
import H3 from '../../common/UI/Titles/H3';
import TextSemibold from '../../common/UI/Text/TextSemibold';
import CenteredParagraphLg from '../../common/UI/Paragraphs/CenteredParagraphLg';

// Images
import fugeTypes from '../../assets/img/electronics/fuse-types.jpg';

import classes from '../../assets/scss/pages/heroes.module.scss';

import { ModalContext } from '../../context/modal-context';

const activeSafetySystem = [
  {
    tabName: 'Stability Control',
    tabLink: 'stability-control',
    Component: StabilityControl,
  },
  {
    tabName: 'Помощь при парковке',
    tabLink: 'parking-aids',
    Component: ParkingAids,
  },
  {
    tabName: 'Круиз контроль',
    tabLink: 'cruise-control',
    Component: CruiseControl,
  },
  {
    tabName: 'ABS',
    tabLink: 'abs',
    Component: ABS,
  },
];

const passiveSafetySystem = [
  {
    tabName: 'Ремни безопасности',
    tabLink: 'seatbelts',
    Component: Seatbelts,
  },
  {
    tabName: 'Подушки безопасности',
    tabLink: 'supplementary-restraint-system',
    Component: SupplementaryRestraintSystem,
  },
];

const fusesTable = {
  thead: ['Обозначение', 'Тип'],
  tBody: [
    ['A', 'Micro 2'],
    ['B', 'Micro 3'],
    ['C', 'Maxi'],
    ['D', 'Mini'],
    ['E', 'M Case'],
    ['J', 'J Case'],
    ['G', 'J Case Low Profile'],
  ],
};

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
          classes.ElectronicsImage,
        ].join(' ')}
      >
        <div className='block'>
          <HeroTitle>Безопасность</HeroTitle>
        </div>
        <div className='block'>
          <HeroSubtitle>
            Условно делится на <TextSemibold>активную</TextSemibold> и{' '}
            <TextSemibold>пассивную</TextSemibold>.
          </HeroSubtitle>
        </div>
      </Hero>
      {<Redirect to={`${path}/${activeSafetySystem[0].tabLink}`} />}
      <Section>
        <div className='block'>
          <H2 className='has-text-centered'>Активная безопасность</H2>
          <CenteredParagraphLg className='pt-2'>
            Это системы и устройства машины, которые позволяют ей избежать
            столкновения.
          </CenteredParagraphLg>
          <div className='columns is-justify-content-center'>
            <div className='column is-12-mobile is-10-tablet is-8-desktop'>
              <Tabs tabs={activeSafetySystem} />
            </div>
          </div>
        </div>

        <div className='block'>
          <H2 className='has-text-centered'>Пассивная безопасность</H2>
          <CenteredParagraphLg className='pt-2'>
            Это возможности автомобиля сохранить жизнь и здоровье пассажиров,
            если нештатная ситуация всё-таки произошла.
          </CenteredParagraphLg>
          <div className='columns is-justify-content-center'>
            <div className='column is-12-mobile is-10-tablet is-8-desktop'>
              <Tabs tabs={passiveSafetySystem} />
            </div>
          </div>
        </div>

        <div className='block'>
          <div className='columns is-justify-content-center'>
            <div className='column is-12-mobile is-10-tablet is-8-desktop'>
              <div className='block'>
                <H2 className='has-text-centered'>Предохранители</H2>
                <p>
                  Часто неисправности, связанные с электрическими системами,
                  могут быть связаны с пробоем предохранителей. <br></br>{' '}
                  Предохранители нужны для защиты потребителей электрического
                  тока. <br></br>
                  Важно отметить, что перед заменой предохранителей необходимо
                  выключить аккумулятор. <br></br>
                  Заменять предохранители нужно на такие же (рассчитанные на
                  такие же токи). Проверять перегоревшие предохранители нужно
                  перед тем как приступать к попыткам починить другие элементы
                  электрообрудования автомобиля.
                </p>
              </div>

              <div className='block'>
                <H3 className='has-text-centered'>Типы предохранителей</H3>
                <div className='columns'>
                  <div className='column is-6'>
                    <Table
                      theadRow={fusesTable.thead}
                      tbodyRows={fusesTable.tBody}
                    />
                  </div>
                  <div className='column is-6'>
                    <figure className='image'>
                      <img src={fugeTypes} alt=''></img>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default Safety;
