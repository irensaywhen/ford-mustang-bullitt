import React from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import H5 from '../../common/UI/Titles/H5';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import parkingAid from '../../assets/img/safety/parking-aid.jpg';
import rearViewCamera from '../../assets/img/safety/rear-view-camera.jpg';
import { rearParkingAid } from './data/parkingAids';

const ParkingAids = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>Помощь при парковке</H3>
        <p>
          Данный автомобиль оборудован{' '}
          <TextSemibold>сенсорными панелями</TextSemibold> и{' '}
          <TextSemibold>камерой заднего виде</TextSemibold>.<br></br>
          Для того, чтобы система могла правильно определять находящиеся позади
          предметы, необходимо поддерживать чистоту сенсоров, не очищать их
          острыми предметами. <br></br>В случае повреждения бампера или
          закрепления дополнительных элементов на нем или за ним, система может
          срабатывать неправильно. Например, при закреплении прицепа. Система
          включается автоматически при включении двигателя и предназначена для
          обнаружения объектов в определенном радиусе от автомобиля.
        </p>
      </Block>

      <Block>
        <div className='columns is-mobile'>
          <div className='column is-narrow'>
            <Figure className='pt-2' img={{ src: parkingAid }} />
          </div>
          <div className='column '>
            <H4>Помощь при парковке задом</H4>
            <p className='pt-2'>
              Данная система активна только в случае движения задним ходом.{' '}
              <br></br>
              При приближении к посторонним объектам, пищание усиливается. При
              приближении ближе чем на{' '}
              <TextSemibold>30 сантиметров</TextSemibold> звук становится
              монотонным.
            </p>
            <p>
              Данная система может обнаруживать предметы в радиусе 1.8 метров от
              бампера.
            </p>
          </div>
        </div>
      </Block>
      <Block>
        <H5>Данная система активна в случаях:</H5>
        <OrderedList listItems={rearParkingAid} />
      </Block>

      <Block>
        <H4>Камера заднего вида</H4>
        <div className='columns'>
          <div className='column is-8'>
            <p>
              Камера заднего вида должна быть использована как помощь при
              парковке. При этом водитель все еще должен использовать зеркала
              заднего вида, для того чтобы обеспечить себе максимальный обзор.{' '}
              <br></br>
              Стоит иметь ввиду, что предметы, которые находятся под бампером
              или по бокам могут быть не видны на камере. <br></br>
            </p>
          </div>
          <div className='column is-4'>
            <Figure img={{ src: rearViewCamera }} />
          </div>
        </div>
      </Block>

      <Block>
        <p>
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
      </Block>
    </React.Fragment>
  );
};

export default ParkingAids;
