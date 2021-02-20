import React from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';
import OrderedList from '../../common/UI/OrderedList';

import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';

const definitions = [
  {
    header: 'Шарниры с вилками и крестовинами',
    body:
      'Обеспечивают возможность передачи крутящего момента под изменяющимся углом. ',
  },
  {
    header: 'Шлицевое соединение',
    body:
      'Компенсирует линейное перемещение карданной передачи относительно кузова автомобиля при изменении угла передачи крутящего момента.',
  },
  {
    header: 'Эластичная муфта',
    body:
      'Служит для принятия ударной волны, проходящей по трансмиссии при грубой работе с педалью сцепления.',
  },
];

const cardanJointParts = [
  'Переднего и заднего валов',
  'Промежуточной опоры с подшипником',
  'Шарниров с вилками и крестовинами',
  'Шлицевого соединения',
  'Эластичной муфты',
];

const CardanJoint = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>Карданная передача</H3>
        <p>
          Есть только у{' '}
          <span className='has-text-weight-semibold'>заднеприводных</span>{' '}
          автомобилей и предназначена для передачи крутящего момента от
          вторичного вала коробки передач к главной передаче под изменяющимся
          углом.
          <br></br>
          <br></br>
          Состоит из:
        </p>
        <p className='pt-2'>
          <OrderedList listItems={cardanJointParts} />
        </p>
      </div>
      <div className='block'>
        <H4>Назначение и принцип работы</H4>
        <p>
          Задний мост у автомобиля связан с кузовом не жестко. <br></br>В
          противовес этому, двигатель, коробка передач и передний вал карданной
          передачи крепятся жестко.<br></br>
        </p>
        <p className='pt-2'>
          {' '}
          Назначение карданной передачи - обеспечить подвижность заднего моста
          относительно кузова.
          <br></br>
          Благодаря карданной передачи, кузов автомобиля может свободно
          перемещаться относительно заднего моста.
        </p>
        <p className='pt-2'>
          Задний вал карданной передачи имеет два шарнира, позволяющие
          передавать крутящий момент без рывков и толчков.
        </p>
        <p>
          Линейное расстояние между главной передачей и коробкой передач также
          величина переменная. Для этого необходимо шлицевое соединение.
        </p>
      </div>
      <div className='block pt-4'>
        <Accordion items={definitions}></Accordion>
      </div>
    </React.Fragment>
  );
};

export default CardanJoint;