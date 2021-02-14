import React from 'react';

import Section from '../common/UI/Section';
import CenteredParagraph from '../common/UI/CenteredParagraph';
import BulletpointWithIcon from '../common/UI/BulletpointWithIcon';
import FeaturesList from '../common/UI/FeaturesList/FeaturesList';

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

const BrakingSystem = () => {
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
  return (
    <React.Fragment>
      <Section>Braking system</Section>
      <Section>
        <div className='block'>
          <FeaturesList featuresList={brakesFeatures} />
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
