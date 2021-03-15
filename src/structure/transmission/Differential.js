import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';
import Block from '../../common/UI/Wrappers/Block';
import VideoIframe from '../../common/UI/VideoIframe';
import FaultsList from '../../common/UI/FaultsList';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

// data
import { mainJointParts, faults } from './data/differential';

const Differential = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <VideoIframe
        title='differential'
        src='https://www.youtube.com/embed/3mz1BpIE-Ec'
      ></VideoIframe>
    ));

    modalContext.showModal();
  };

  return (
    <React.Fragment>
      <Block>
        <H3>Главная передача</H3>
        <p>
          Предназначена для увеличения крутящего момента и передачи его на
          полуоси колес под углом 90 градусов.
        </p>
      </Block>
      <Block>
        <H4 className='mb-2'>Состоит из</H4>
        <OrderedList listItems={mainJointParts} />
      </Block>
      <Block>
        <H3>Дифференциал</H3>
        <p>
          Предназначен для распределения крутящего момента между полуосями
          ведущих колес при повороте автомобиля и при движении по неровностям
          дороги. Это позволяет колесам вращаться с разной угловой скоростью и
          проходить неодинаковый путь бес проскальзывания относительно покрытия
          дороги.
        </p>
      </Block>
      <Block>
        <H4>Главная передача и дифференциал</H4>
        <p>
          Работают вместе. Главная передача способствует передаче крутящего
          момента под углом, а дифференциал позволяет распределять крутящий
          момент в определенной пропорции, избавляя от заносов.
        </p>
      </Block>
      <Block>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
      </Block>

      <Block className='pt-5'>
        <H4>Основные неисправности главной передачи и дифференциала</H4>
        <p className='pb-5'>
          Для увеличения срока службы главной передачи и дифференциала,
          необходимо следить за <TextSemibold>уровнем масла</TextSemibold> в
          заднем картере.<br></br> Также необходимо избегать резкого старта и
          торможения, грубого включения сцепления.
          <br></br>
          Кроме того, картер всегда должен иметь связь с атмосферой через{' '}
          <TextSemibold>сапун</TextSemibold>, чтобы избежать повышения давления
          и частого вытекания масла.
        </p>
        <FaultsList faults={faults} />
      </Block>
    </React.Fragment>
  );
};

export default Differential;
