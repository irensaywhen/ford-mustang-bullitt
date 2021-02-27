import React, { useContext, useState } from 'react';

import brakesKit from '../assets/img/braking/braking-kit.jpg';
import brakeFluidReservoir from '../assets/img/braking/brake-fluid-reservoir.png';

import Section from '../common/UI/Section';
import Hero from '../common/UI/Hero';
import HeroTitle from '../common/UI/HeroTitle';
import CenteredParagraph from '../common/UI/CenteredParagraph';
import BulletpointWithIcon from '../common/UI/BulletpointWithIcon';
import FeaturesList from '../common/UI/FeaturesList/FeaturesList';
import Modal from '../common/UI/Modal';
import H3 from '../common/UI/Titles/H3';
import HalfWidthColumn from '../common/UI/HalfWidthColumn';
import PrimaryButton from '../common/UI/Buttons/PrimaryButton';
import ResponsiveVideoWrapper from '../common/UI/ResponsiveVideoWrapper';

import classes from '../assets/scss/pages/braking.module.scss';

import { ModalContext } from '../context/modal-context';

const faults = [
  {
    title: 'Мягкая педаль тормоза',
    description:
      'Случается из-за сильного износа тормозных колодок, наличия воздуха в тормозной системе, недостатка тормозной жидкости и(или) ее утечке.',
    critical: false,
  },
  {
    title: 'Увод автомобиля в сторону при торможении',
    description:
      'Возможен при выходе из строя одного из тормозных цилиндров, износа или замасливания накладок.',
    critical: false,
  },
  {
    title: 'Вибрации и шум при нажатии на педаль тормоза.',
    description:
      'Могут возникать при загрязнении тормозных механизмов, износа накладок тормозных колодок, неравномерного износа тормозных дисков или барабанов.',
    critical: false,
  },
  {
    title: 'Тормозной путь более 12.2 метра, замедление более 6.8 м/с2 ',
    description:
      'Испытания проводятся на горизонтальном участке дороги с ровным, сухим, чистым цементированным или асфальтированным покрытием при начальной скорости 40 км/ч.',
    critical: true,
  },
  {
    title: 'Нарушена герметичность гидравлического тормозного привода',
    description:
      'Негерметичность трубок, шлангов или цилиндров может повлечь появление пузырьков воздуха в тормозной системе, что может привести к провалу педали при резком нажатии на педаль тормоза.',
    critical: true,
  },
  {
    title: 'Стояночная тормозная система не обеспечивает неподвижное состояние',
    description:
      'Испытания проводятся для легкового автомобиля в снаряженном состоянии на уклоне до 23% включительно.',
    critical: true,
  },
];

const brakesFeatures = [
  {
    text: (
      <p>
        Дисковой тормозной механизм с диаметрами дисков{' '}
        <strong className='has-text-weight-semibold'>33 сантиметра</strong> у
        задних колес и{' '}
        <strong className='has-text-weight-semibold'>38 сантиметров</strong> у
        передних.
      </p>
    ),
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
  {
    text: (
      <p>
        <strong className='has-text-weight-semibold'>Электрический</strong>{' '}
        стояночный тормоз в виде классического "ручника", расположенный между
        передними пассажирскими сидениями.
      </p>
    ),
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
  {
    text: (
      <p>
        Тормозная жидкость{' '}
        <strong className='has-text-weight-semibold'>DOT 4</strong> Low
        Viscosity High Perfomance
      </p>
    ),
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
];

const brakingSystemData = [
  {
    title: 'Тормозная система',
    description:
      'Состоит из рабочей и стоячей тормозных систем и предназначена как для уменьшения скорости и остановки(РТС), так и для удержания автомобиля на месте(СТС).',
  },
  {
    title: 'Рабочая тормозная система',
    description:
      'Состоит из тормозного привода и тормозных механизмов колес. Привод служит для передачи усилия от педали на механизмы, которые с помощью сил трения останавливают автомобиль.',
  },
  {
    title: 'Тормозной привод',
    description:
      'Состоит из педали тормоза, главного тормозного цилиндра, рабочих тормозных цилиндров, трубок и вакуумного усилителя.',
  },
];

const additionalBrakingSystemData = [
  {
    title: 'Тормозные механизмы',
    description: 'Делятся на дисковые и барабанные (дисковые у Ford Bullitt).',
  },
  {
    title: 'Стояночный тормоз',
    description:
      'Приводится в действие поднятием рычага стояночного тормоза. Имеет разные типа (в данной модели - электрический)',
  },
  {
    title: 'Тормозная жидкость',
    description:
      'Является необходимой для функционирования тормозной системы. В данной модели заливается в бак под буквой D.',
  },
];

const BrakingSystem = () => {
  const modalContext = useContext(ModalContext);

  console.log(modalContext);

  const openModal = videoType => {
    // Set modal content based on the provided video type
    switch (videoType) {
      case 'first':
        modalContext.setModalContent(() => (
          <iframe
            title='Braking system part 1'
            className='has-ratio'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/MAuVDB-G-HQ'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        ));
        break;
      case 'second':
        modalContext.setModalContent(() => (
          <iframe
            title='Braking system part 2'
            className='has-ratio'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/bGKJOICWmFQ'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        ));
        break;
      default:
        throw new Error('Wrong video type');
        break;
    }

    // Open modal
    modalContext.showModal();
  };

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
        iconWrapperClasses={fault.critical ? ['has-text-danger'] : ''}
      >
        <H3>{fault.title}</H3>
        <p>{fault.description}</p>
      </BulletpointWithIcon>
    ));

  const mainBrakingSystemData = brakingSystemData.map((data, index) => {
    return (
      <BulletpointWithIcon
        key={index}
        icon={<i className='far fa-check-circle'></i>}
        iconWrapperClasses={['has-text-success']}
      >
        <H3>{data.title}</H3>
        <p>{data.description}</p>
      </BulletpointWithIcon>
    );
  });

  const mainBrakingSystemDataSecondPart = additionalBrakingSystemData.map(
    (data, index) => {
      return (
        <BulletpointWithIcon
          key={index}
          icon={<i className='far fa-check-circle'></i>}
          iconWrapperClasses={['has-text-success']}
        >
          <H3>{data.title}</H3>
          <p>{data.description}</p>
        </BulletpointWithIcon>
      );
    }
  );
  return (
    <React.Fragment>
      <Modal hidePadding transparentBackground>
        <ResponsiveVideoWrapper>
          {modalContext.modalContent}
        </ResponsiveVideoWrapper>
      </Modal>
      <Hero
        classNames={['is-halfheight', 'has-text-centered', classes.HeroImage]}
      >
        <div className='pb-3'>
          <HeroTitle>Тормозная система</HeroTitle>
        </div>
        <h2 className='subtitle has-text-light has-text-weight-light pb-3'>
          Состоит из{' '}
          <span className='has-text-weight-semibold'>
            рабочей тормозной системы
          </span>{' '}
          и{' '}
          <span className='has-text-weight-semibold'>
            стояночной тормозной системы
          </span>
          .
        </h2>
      </Hero>

      <Section>
        <div className='block'>
          <FeaturesList featuresList={brakesFeatures} />
        </div>
      </Section>

      <Section>
        <div className='columns'>
          <HalfWidthColumn>
            <figure className='image'>
              <img src={brakesKit} alt=''></img>
            </figure>
          </HalfWidthColumn>
          <HalfWidthColumn>
            <div className='block pt-3'>{mainBrakingSystemData}</div>
            <div className='block pt-4 has-text-centered'>
              <PrimaryButton onClick={() => openModal('first')}>
                Как это работает?
              </PrimaryButton>
            </div>
          </HalfWidthColumn>
        </div>

        <div className='columns columns-reverse-tablet'>
          <HalfWidthColumn>
            <figure className='image'>
              <img src={brakeFluidReservoir} alt=''></img>
            </figure>
          </HalfWidthColumn>
          <HalfWidthColumn>
            <div className='block'></div>
            <div className='block pt-3'>{mainBrakingSystemDataSecondPart}</div>
            <div className='block pt-4 has-text-centered'>
              <PrimaryButton onClick={() => openModal('second')}>
                Что делает вакуумный усилитель?
              </PrimaryButton>
            </div>
          </HalfWidthColumn>
        </div>
      </Section>
      <Section>
        <div className='block'>
          <h2 className='title is-3 has-text-centered'>
            Основные неисправности тормозных систем
          </h2>
        </div>

        <div className='block has-text-centered pb-2'>
          <CenteredParagraph>
            Знание неисправностей тормозной системы не только{' '}
            <span className='has-text-weight-semibold'>убережет жизнь</span>
            водителя и окружающих, но и поможет{' '}
            <span className='has-text-weight-semibold'>
              избежать больших затрат
            </span>{' '}
            на починку тормозных систем.
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

export default BrakingSystem;
