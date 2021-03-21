import React from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';
import OrderedList from '../../common/UI/OrderedList';
import Block from '../../common/UI/Wrappers/Block';

import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

// data
import { definitions, cardanJointParts } from './data/cardanJoint';

const CardanJoint = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>Карданная передача</H3>
        <p>
          Есть только у <TextSemibold>заднеприводных</TextSemibold> автомобилей
          и предназначена для передачи крутящего момента от вторичного вала
          коробки передач к главной передаче под изменяющимся углом.
        </p>
      </Block>
      <Block>
        <H4>Состоит из:</H4>
        <OrderedList listItems={cardanJointParts} />
      </Block>
      <Block>
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
      </Block>
      <Block className='pt-4'>
        <Accordion items={definitions}></Accordion>
      </Block>
    </React.Fragment>
  );
};

export default CardanJoint;
