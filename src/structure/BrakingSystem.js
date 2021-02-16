import React, { useContext, useState } from 'react';

import brakesKit from '../assets/img/braking/braking-kit.jpg';
import brakeFluidReservoir from '../assets/img/braking/brake-fluid-reservoir.png';

import Section from '../common/UI/Section';
import Hero from '../common/UI/Hero';
import HeroTitle from '../common/UI/HeroTitle';
import SectionTitle from '../common/UI/SectionTitle';
import CenteredParagraph from '../common/UI/CenteredParagraph';
import BulletpointWithIcon from '../common/UI/BulletpointWithIcon';
import FeaturesList from '../common/UI/FeaturesList/FeaturesList';
import Modal from '../common/UI/Modal';

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
  'Предназначена для уменьшения скорости и остановки',
  'Состоит из тормозного привода и тормозных механизмов',
  'Тормозную жидкость необходимо заливать в резервуар, расположенный под буквой D',
];

const additionalBrakingSystemData = [
  'Тормозной привод служит для передачи усилия от педали к тормозным механизмам',
  'Оснащен вакуумным усилителем',
  'Тормозные механизмы уменьшают скорость вращения колеса',
];

const BrakingSystem = () => {
  const modalContext = useContext(ModalContext);

  const [currentVideoType, setCurrentVideoType] = useState('first');

  const openModal = video => {
    if (video === 'first' || video === 'second') {
      setCurrentVideoType(video);
    } else {
      throw new Error('Wrong video type');
    }

    modalContext.showModal();
  };

  const modalContent =
    currentVideoType === 'first' ? (
      <iframe
        title='Braking system part 1'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/MAuVDB-G-HQ'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    ) : (
      <iframe
        title='Braking system part 2'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/bGKJOICWmFQ'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    );

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

  const mainBrakingSystemData = brakingSystemData.map((title, index) => {
    return (
      <BulletpointWithIcon
        key={index}
        icon={<i className='far fa-check-circle'></i>}
        iconWrapperClasses={['has-text-success']}
      >
        <h3 className='title is-6 has-text-weight-normal'>{title}</h3>
      </BulletpointWithIcon>
    );
  });

  const mainBrakingSystemDataSecondPart = additionalBrakingSystemData.map(
    (title, index) => {
      return (
        <BulletpointWithIcon
          key={index}
          icon={<i className='far fa-check-circle'></i>}
          iconWrapperClasses={['has-text-success']}
        >
          <h3 className='title is-6 has-text-weight-normal'>{title}</h3>
        </BulletpointWithIcon>
      );
    }
  );
  return (
    <React.Fragment>
      <Modal hidePadding transparentBackground>
        <div className='has-text-centered videoWrapper'>{modalContent}</div>
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
          <div className='column is-6'>
            <figure className='image'>
              <img src={brakesKit} alt=''></img>
            </figure>
          </div>
          <div className='column is-6'>
            <div className='block'></div>
            <div className='block pt-3'>{mainBrakingSystemData}</div>
            <div className='block pt-4 has-text-centered'>
              <button
                className='button is-primary'
                onClick={() => openModal('first')}
              >
                Как это работает?
              </button>
            </div>
          </div>
        </div>

        <div className='columns'>
          <div className='column is-6'>
            <div className='block'></div>
            <div className='block pt-3'>{mainBrakingSystemDataSecondPart}</div>
            <div className='block pt-4 has-text-centered'>
              <button
                className='button is-primary'
                onClick={() => openModal('second')}
              >
                Что делает вакуумный усилитель?
              </button>
            </div>
          </div>
          <div className='column is-6'>
            <figure className='image'>
              <img src={brakeFluidReservoir} alt=''></img>
            </figure>
          </div>
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

export default BrakingSystem;
