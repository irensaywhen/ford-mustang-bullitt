import React from 'react';

import OrderedList from '../../common/UI/OrderedList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import H5 from '../../common/UI/Titles/H5';
import TextSemibold from '../../common/UI/Text/TextSemibold';

const rearParkingAid = [
  'Когда автомобиль движется к неподвижному объекту со скоростью менее 5 км/ч',
  'Когда объект движется сзади к неподвижному автомобилю со скоростью менее 5 км/ч',
  'Когда автомобиль движется со скоростью менее 5 км/ч и объект, приближающийся сзади, имеет скорость менее 5 км/ч',
  'Когда припятствие на расстоянии 30 сантиметров или меньше',
];

const ParkingAids = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>Помощь при парковке</H3>
        <p>
          Система включается автоматически при включении двигателя и
          предназначена для обнаружения объектов в определенном радиусе от
          автомобиля. <br></br>
        </p>
      </div>

      <div className='block'>
        <H4>Помощь при парковке задом</H4>
        <p className='pt-2'>
          Данная система активна только в случае движения задним ходом.{' '}
          <br></br>
          При приближении к посторонним объектам, пищание усиливается. При
          приближении ближе чем на <TextSemibold>
            30 сантиметров
          </TextSemibold>{' '}
          звук становится монотонным.
        </p>
      </div>
      <div className='block'>
        <H5>Данная система активна в случаях:</H5>
        <OrderedList listItems={rearParkingAid} />
      </div>

      <div className='block'>
        <H4>Камера заднего вида</H4>
        <p className='pt-2'>
          Эта система предоставляет видео происходящего за автомобилем.{' '}
          <br></br>
          Расположена на багажнике. Включается при включении задней передачи.{' '}
          <br></br>
          Данная система показывает <TextSemibold>путь автомобиля</TextSemibold>
          , а также помогает{' '}
          <TextSemibold>отцентровать автомобиль</TextSemibold> с объектом.
          <br></br>
          Данная камера имеет три зоны: красную, желтую и зеленую. Эти зоны
          помогают оценить расстояния до объектов.
        </p>
      </div>
    </React.Fragment>
  );
};

export default ParkingAids;
