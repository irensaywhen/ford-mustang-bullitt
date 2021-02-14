import React, { useContext } from 'react';

import Section from '../common/UI/Section';
import BulletpointWithIcon from '../common/UI/BulletpointWithIcon';
import Hero from '../common/UI/Hero';
import HeroTitle from '../common/UI/HeroTitle';
import HeroSectionTitle from '../common/UI/HeroSectionTitle';
import Card from '../common/UI/cards/Card';
import FeaturesList from '../common/UI/FeaturesList/FeaturesList';
import CenteredParagraph from '../common/UI/CenteredParagraph';
import Modal from '../common/UI/Modal';

import classes from '../assets/scss/pages/steering.module.scss';

import { ModalContext } from '../context/modal-context';

const faults = [
  {
    title: 'Увеличенный люфт рулевого колеса, стуки',
    description:
      'Может возникнуть из-за износа деталей, ослаблений креплений. Необходимо подтянуть крепления и заменить изношенные детали.',
    critical: false,
  },
  {
    title: 'Тугое вращение рулевого колеса',
    description:
      'Может возникнуть из-за недостатка смазки, нарушения углов установки передних колес.',
    critical: false,
  },
  {
    title: 'Суммарный люфт превышает 10 градусов',
    description:
      'Запрещена эксплуатация транспортного средства из-за затруднения управления и вероятности потери контроля.',
    critical: true,
  },
  {
    title: 'Неисправен или отсутствует усилитель рулевого колеса',
    description:
      'Запрещена эксплуатация транспортного средства из-за возрастающего усилия, необходимого для поворота.',
    critical: true,
  },
];

const powerSteeringFeaturs = [
  {
    text:
      'Требует меньше поддержки по сравнению с гидроусилителем, так как все контрлируется электрическими системами.',
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
  {
    text:
      'Рулевое колесо отзывчиво реагирует на малейшие движения, из-за чего управление чувствуется легче, а руль - более поддатливым.',
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
  {
    text:
      'Идеально рассчитывает необходимую для поворота силу в зависимости от скорости автомобиля, угла поворота и скорости вращения рулевого колеса.',
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
];

const steeringSystemCards = [
  {
    title: 'Электроусилитель рулевого колеса',
    prosAndCons: [
      {
        type: 'pro',
        description: 'Экономичный расход топлива',
      },
      {
        type: 'pro',
        description: 'Отзывчивое управление',
      },
      {
        type: 'pro',
        description: 'Меньше активной поддержки',
      },
      {
        type: 'pro',
        description:
          'Более точный рассчет прилагаемой силы, особенно к экстримальных условиях.',
      },
      {
        type: 'con',
        description: 'Руль может чувствоваться тяжелее',
      },
      {
        type: 'con',
        description: 'Высокая стоимость починки',
      },
    ],
  },
  {
    title: 'Гидроусилитель рулевого колеса',
    prosAndCons: [
      {
        type: 'pro',
        description: 'Цена и сравнительная простота',
      },
      {
        type: 'pro',
        description: 'Меньшие относительные размеры',
      },
      {
        type: 'pro',
        description: 'Автоматическое смазывание усилительной системы',
      },
      {
        type: 'con',
        description: 'Утечки масла',
      },
      {
        type: 'con',
        description: 'Большие потребления энергии',
      },
      {
        type: 'con',
        description: 'Зависимость параметров жидкости от температуры',
      },
    ],
  },
];

const SteeringSystem = () => {
  const modalContext = useContext(ModalContext);

  // List of possible faults in the system
  const faultsList = faults
    .sort((fault1, fault2) => {
      if (fault1.critical) {
        return 1;
      } else if (fault1.critical && fault2.critical) {
        return 0;
      }

      return -1;
    })
    .map((fault, index) => (
      <BulletpointWithIcon
        key={index}
        icon={<i className='fas fa-tools'></i>}
        iconWrapperClasses={fault.critical ? 'has-text-danger' : ''}
      >
        <h3 className='title is-5 mb-2'>{fault.title}</h3>
        <p>{fault.description}</p>
      </BulletpointWithIcon>
    ));

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
          iconWrapperClasses={
            listItem.type === 'pro' ? 'has-text-success' : 'has-text-danger'
          }
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
        <div className='has-text-centered videoWrapper'>
          <iframe
            title='Принцип работы рулевого управления'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/em1O8mz7sF0'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
      </Modal>

      <Hero
        classNames={['is-halfheight', 'has-text-centered', classes.HeroImage]}
      >
        <div className='pb-3'>
          <HeroTitle>Система Рулевого Управления</HeroTitle>
        </div>
        <h2 className='subtitle has-text-light has-text-weight-light pb-3'>
          Имеет <span className='has-text-weight-semibold'>реечный тип</span>{' '}
          и&nbsp;
          <span className='has-text-weight-semibold'>
            электроусилитель
          </span>{' '}
          рулевого колеса
        </h2>
        <button
          className='button is-white is-outlined'
          onClick={modalContext.showModal}
        >
          Как работает рулевой механизм?
        </button>
      </Hero>
      <Section>
        <div className='block'>
          <h2 className='title is-3 has-text-centered mb-3'>
            Электроусилитель рулевого колеса
          </h2>
          <div className='pb-5'>
            <CenteredParagraph>
              Впервые был использован компанией{' '}
              <span className='has-text-weight-semibold'>Ford</span> в 2011 году
              для моделей{' '}
              <span className='has-text-weight-semibold'>Ford Mustang GT</span>.
              Необходим для уменьшения усилия, необходимого для управления
              автомобилем.
            </CenteredParagraph>
          </div>
        </div>
        <div className='block'>
          <FeaturesList featuresList={powerSteeringFeaturs} />
        </div>
      </Section>

      <Hero
        classNames={['is-halfheight', 'has-text-centered', classes.ProsAndCons]}
      >
        <div className='container'>
          <div className='pb-6'>
            <HeroSectionTitle>
              Сравнение усилителей рулевого управления
            </HeroSectionTitle>
          </div>

          <div className='columns is-justify-content-center'>
            {powerSteeringCards}
          </div>
        </div>
      </Hero>

      <Section>
        <div className='block'>
          <h2 className='title is-3 has-text-centered'>
            Основные неисправности рулевого управления
          </h2>
        </div>

        <div className='block has-text-centered pb-2'>
          <CenteredParagraph>
            Знание основных неисправностей рулевого механизма, а также условий,
            при которых запрещена эксплуатация транспортного средства{' '}
            <strong className='has-text-danger'>критически важно</strong>.
            <br></br>
            Это убережет жизнь водителя и окружающих.
          </CenteredParagraph>
        </div>

        <div className='columns'>
          <div className='column is-10-tablet is-offset-1-tablet is-8-desktop is-offset-2-desktop'>
            <div className='block pt-5'>{faultsList}</div>
          </div>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default SteeringSystem;
