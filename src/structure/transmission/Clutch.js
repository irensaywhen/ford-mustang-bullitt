import React, { useContext } from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';
import OrderedList from '../../common/UI/OrderedList';
import VideoIframe from '../../common/UI/VideoIframe';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';
import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';
import Block from '../../common/UI/Wrappers/Block';
import FaultsList from '../../common/UI/FaultsList';

import { ModalContext } from '../../context/modal-context';

import {
  definitions,
  assistiveClutchParts,
  clutchParts,
  releaseClutchPedalSteps,
  faults,
} from './data/clutch';

const Clutch = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <VideoIframe
        title='clutch'
        src='https://www.youtube.com/embed/BgZaz5b4JRk'
      ></VideoIframe>
    ));

    modalContext.showModal();
  };
  return (
    <React.Fragment>
      <Block>
        <H3>Сцепление</H3>
        <p>
          Является первым устройством трансмиссии и предназначено для передачи
          крутящего момента от двигателя к первичному валу коробки передач.
        </p>
        <p>
          Чтобы переключение передач происходило плавно, нужно кратковременно
          прекратить передачу крутящего момента с двигателя на коробку передач,
          отделив двигатель от трансмиссии. Сцепление состоит из{' '}
          <TextSemibold>привода</TextSemibold> и{' '}
          <TextSemibold>механизма сцепления</TextSemibold>.
        </p>
      </Block>
      <Block>
        <PrimaryButton onClick={openModal}>
          Как работает сцепление?
        </PrimaryButton>
      </Block>
      <Block>
        <H4>Привод выключения сцепления</H4>
        <p>
          Модель имеет гидравлический привод сцепления. Тормозная система и
          гидропривод сцепления используют одну и ту же жидкость{' '}
          <TextSemibold>DOT 4 Low Viscosity High Perfomance</TextSemibold>
        </p>
      </Block>
      <Block>
        <H4 className='mb-2'>Гидропривод состоит из:</H4>
        <OrderedList listItems={assistiveClutchParts} />
        <p className='pt-2'>
          Гидропривод сцепления работает по принципу передачи давления от педали
          сцепления через жидкость на механизм сцепления. <br></br>
          При отпускании педали сцепления засчет{' '}
          <TextSemibold>возвратных пружин</TextSemibold> все детали возвращаются
          в исходное положение.
        </p>
      </Block>
      <Block>
        <H4>Механизм сцепления</H4>
        <p>
          Позволяет кратковременно разъединить двигатель и коробку передач, а
          затем соединить их.
        </p>
      </Block>
      <Block>
        <H4 className='mb-2'>Состоит из:</H4>
        <OrderedList listItems={clutchParts} />
        <p className='pt-4'>
          Когда сцепление <TextSemibold>включено</TextSemibold>, механизм
          сцепления вращается вместе с двигателем. <br></br>
          Когда сцепление <TextSemibold>выключено</TextSemibold>, механизм
          сцепления отсоединен от двигателя. <br></br> Для того, чтобы начать
          движение, нужно <TextSemibold>включить</TextSemibold> сцепление.
        </p>
      </Block>
      <Block>
        <H4>
          Отпускать педаль сцепления всегда нужно в <em>три</em> этапа:
        </H4>
        <OrderedList listItems={releaseClutchPedalSteps} />
      </Block>
      <Block>
        <H4>Выключение сцепления.</H4>
        <p>
          Для выключения сцепления, необходимо{' '}
          <TextSemibold>нажать</TextSemibold> на педаль сцепления. При этом
          передача крутящего момента прерывается. Нажимать на педаль сцепления
          следует быстро, но не резко.
        </p>
      </Block>
      <Block>
        <H4>Основные неисправности сцепления. Эксплуатация.</H4>
        <p className='pb-5'>
          Для того, чтобы машина служила,{' '}
          <TextSemibold className='has-text-danger'>важно</TextSemibold> следить
          за исправностью сцепления. Лучше избежать чрезмерного использования
          сцепления первые 150 километров в городе, и первые 1500 километров за
          городом.
        </p>
        <FaultsList faults={faults} />
      </Block>
      <Block className='pt-4'>
        <Accordion items={definitions}></Accordion>
      </Block>
    </React.Fragment>
  );
};

export default Clutch;
