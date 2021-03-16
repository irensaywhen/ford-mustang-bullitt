import React from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import keylessStart from '../../assets/img/electronics/keyless-start.jpg';
import { startingEngineParts } from './data/startingEngine';

const StartingEngine = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>Система пуска двигателя</H3>
        <p>
          Презназначена для поддержания нормального теплового режима работы
          двигателя. <br></br>
          При работе двигателя температура в его цилиндрах поднимается выше{' '}
          <TextSemibold>2000 градусов</TextSemibold>, а средняя составляет{' '}
          <TextSemibold>800 - 900 градусов</TextSemibold>. Это приводит к
          необходимости его постоянно охлождать.
        </p>
      </Block>
      <Block>
        <H4>Состоит из:</H4>
        <OrderedList listItems={startingEngineParts} />
        <p>
          Работа стартера состоить из трех этапов. <br></br>
          При запуске двигателя, стартер начинает вращаться. <br></br>
          Засчет реле, он приводится в зацепление с коленчатым валом двигателя.{' '}
          <br></br>
          Когда скорость вращеняи коленчатого вала сравнивается со скоростью
          вращеняи стартера, он выводится из зацепления.
        </p>
      </Block>

      <Block>
        <H4>Безключевое зажигание</H4>
        <p>
          Данная модель имеет систему безключевого зажигания. При этом ключ
          должен находиться внутри автомобиля. <br></br>
          <TextSemibold>Система безключевого зажигания</TextSemibold> имеет три
          опции:<br></br>
          <TextSemibold>Off</TextSemibold> - когда двигатель работает, но
          автомобиль не движется, нажать на кнопку без одновременного нажатия
          педалей.<br></br>
          <TextSemibold>On</TextSemibold> - двигатель работает, все лампочки
          горят. <br></br>
          <TextSemibold>Start</TextSemibold> - включить двигатель. Нужно нажать
          на педаль сцепления и затем нажать на кнопку. Тогда двигатель
          заработает.
        </p>
        <Figure className='pt-4' img={{ src: keylessStart }} />
      </Block>
    </React.Fragment>
  );
};

export default StartingEngine;
