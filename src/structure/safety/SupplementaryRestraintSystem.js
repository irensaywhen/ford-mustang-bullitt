import React from 'react';

import OrderedList from '../../common/UI/OrderedList';

import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import H5 from '../../common/UI/Titles/H5';

// Images
import frontAirbag from '../../assets/img/safety/front-airbag.png';
import sideAirbag from '../../assets/img/safety/side-airbag.png';
import safetyCanopy from '../../assets/img/safety/safety-canopy.png';

const warnings = [
  {
    description:
      'Подушки безопасности срабатывают резко. Есть риск получения травмы от надувшейся подушки безопаности.',
  },
  {
    description:
      'Подушки безопасности должны применяться вместе с ремнями безопасности. Полагаясь исключительно на подушки безопасности, пассажиры и водитель увеличивают риск травм и смерти.',
  },
  {
    description:
      'Дети до 12 лет должны быть должным образом зафиксированы в специальном средстве.',
  },
  {
    description:
      'Область перед подушкой безопасности, такде как место хранения подушки безопасности должны быть свободны от посторонних предметов.',
  },
  {
    description:
      'Недопустимо пытаться чинить или вносить изменения в данную систему безопасности самостоятельно.',
  },
  {
    description:
      'После срабатывания данной системы безопасности, она не будет функционировать повторно.',
  },
  {
    description:
      'Рекомендуется иметь расстояние не менее 25 сантиметров между модулем подушки безопасности и грудью пассажира или водителя.',
  },
];

const detectingFromntPassengerSteps = [
  'Выключить двигатель и попросить пассажира сесть по центру, ровно.',
  'Включить двигатель и попросить пассажира посидеть в фиксированном положении на протяжении двух минут',
  'Если индикатор по прежнему не может зафиксировать наличие впереди сидящего пассажира, пассажиру лучше пересесть назад',
];

const SupplementaryRestraintSystem = () => {
  const warningsList = warnings.map((warning, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-exclamation-triangle'></i>}
      iconWrapperClasses={['is-size-1', 'is-1', 'has-text-warning']}
    >
      <p>{warning.description}</p>
    </BulletpointWithIcon>
  ));

  return (
    <React.Fragment>
      <div className='block'>
        <H3>Подушки безопасности</H3>
        <p>
          Являются частью пассивной безопасности и должны быть использованы
          вместе с ремнями безопасности. <br></br>
          При срабатывании подушек безопасности, будет слышен громкий хлопок.
          Также может появиться порошок в воздухе. Это нормальное поведение
          системы.<br></br>
          Подушки безопасности водителя и переднего пассажира срабатывают при
          серьезных лобовых и боковых столкновениях.
        </p>
      </div>
      <div className='block'>
        <H4>Система детектирования впереди сидящего пассажира</H4>

        <div className='columns is-mobile'>
          <div className='column is-9'>
            <p className='pt-2'>
              Данная система определяет наличие впереди сидящего пассажира и
              необходимость срабатывания его подушки безопасности. <br></br>
              Индикатор системы кратковременно загорается при включении
              зажигания.
            </p>
          </div>
          <div className='column is-3'>
            <figure className='image'>
              <img src={frontAirbag} alt=''></img>
            </figure>
          </div>
        </div>
      </div>
      <div className='block'>
        <p>
          Если пассажир сидит на переднем сидении, но система вылючена, это
          может означать, что пассажир сидит неправильно. <br></br>
        </p>
      </div>
      <div className='block'>
        <H5>
          В таком случае необходимо выполнить следующую последовательность
          действий:
        </H5>
        <OrderedList listItems={detectingFromntPassengerSteps} />
      </div>
      <div className='block'>
        <H4>Боковые подушки безопасности</H4>
        <div className='columns'>
          <div className='column is-7'>
            <p className='pt-2'>
              Данные подушки безопасности могут срабатывать при боковых
              столкновениях.
            </p>
          </div>
          <div className='column is-5'>
            <figure className='image'>
              <img src={sideAirbag} alt=''></img>
            </figure>
          </div>
        </div>
      </div>
      <div className='block'>
        <H4>Коленные подушки безопасности</H4>
        <p>
          Коленная подушка безопасности водителя расположена под приборной
          панелью. <br></br>
          Коленная подушка безопасности впереди сидящего пассажира расположена
          под бардачком.
        </p>
      </div>
      <div className='block'>
        <H4>Навесные подушки безопасности</H4>
        <div className='columns'>
          <div className='column is-7'>
            <p className='pt-2'>
              Данные подушки безопасности могут срабатывать при боковых
              столкновениях и в случае вероятности переворота автомобиля.
            </p>
          </div>
          <div className='column is-5'>
            <figure className='image'>
              <img src={safetyCanopy} alt=''></img>
            </figure>
          </div>
        </div>
      </div>
      <div className='block'>{warningsList}</div>
    </React.Fragment>
  );
};

export default SupplementaryRestraintSystem;
