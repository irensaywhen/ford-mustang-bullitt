import React from 'react';

import OrderedList from '../../common/UI/OrderedList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

const startingEngineParts = [
  'Стартера с тяговым реле и механизмом привода',
  'Реле включения стартера',
  'Замка зажигания',
];

const StartingEngine = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>Система пуска двигателя</H3>
        <p>
          Презназначена для поддержания нормального теплового режима работы
          двигателяю <br></br>
          При работе двигателя температура в его цилиндрах поднимается выше{' '}
          <TextSemibold>2000 градусов</TextSemibold>, а средняя составляет{' '}
          <TextSemibold>800 - 900 градусов</TextSemibold>. Это приводит к
          необходимости его постоянно охлождать.
        </p>
      </div>
      <div className='block'>
        <H4>Состоит из:</H4>
        <OrderedList listItems={startingEngineParts} />
        <p className='pt-2'>
          Работа стартера состоить из трех этапов. <br></br>
          При запуске двигателя, стартер начинает вращаться. <br></br>
          Засчет реле, он приводится в зацепление с коленчатым валом двигателя.{' '}
          <br></br>
          Когда скорость вращеняи коленчатого вала сравнивается со скоростью
          вращеняи стартера, он выводится из зацепления.
        </p>
      </div>

      <div className='block'>
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
      </div>
    </React.Fragment>
  );
};

export default StartingEngine;
