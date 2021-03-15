import discBrakes from '../../../assets/img/braking/disc-brakes.jpg';
import parkingBrake from '../../../assets/img/braking/parking-brake.jpg';
import DOT from '../../../assets/img/braking/dot4.jpg';

export const brakesFeatures = [
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
    image: discBrakes,
  },
  {
    text: (
      <p>
        <strong className='has-text-weight-semibold'>Электрический</strong>{' '}
        стояночный тормоз в виде классического "ручника", расположенный между
        передними пассажирскими сидениями.
      </p>
    ),
    image: parkingBrake,
  },
  {
    text: (
      <p>
        Тормозная жидкость{' '}
        <strong className='has-text-weight-semibold'>DOT 4</strong> Low
        Viscosity High Perfomance
      </p>
    ),
    image: DOT,
  },
];

export const brakingSystemData = [
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

export const additionalBrakingSystemData = [
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
