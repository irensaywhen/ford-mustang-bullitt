import React, { useContext } from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';
import Block from '../../common/UI/Wrappers/Block';
import VideoIframe from '../../common/UI/VideoIframe';
import FaultsList from '../../common/UI/FaultsList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

// data
import { faults, definitions } from './data/suspension';

const Suspension = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <VideoIframe
        title='How suspension work'
        src='https://www.youtube.com/embed/bSNQs3kj2d0'
      ></VideoIframe>
    ));

    modalContext.showModal();
  };

  return (
    <React.Fragment>
      <Block>
        <H3>Подвеска колес автомобиля</H3>
        <p className='pt-2'>
          Предназначена для смягчения и гашения колебаний, передаваемых от
          неровностей дороги на кузов автомобиля.<br></br>
          Благодаря подвеске колес кузов совершает линейные и угловые колебания,
          определяющие плавность хода автомобиля. Кузов перемещается
          относительно колес, едущих по дороге.<br></br>В данной модели
          использована <TextSemibold>независимая</TextSemibold> подвеска.
        </p>
      </Block>
      <Block>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
      </Block>

      <Block>
        <H4 className='pb-3 is-size-4'>Основные неисправности подвески</H4>
      </Block>
      <Block>
        <FaultsList faults={faults} />
      </Block>
      <Block className='pt-4'>
        <Accordion items={definitions}></Accordion>
      </Block>
    </React.Fragment>
  );
};

export default Suspension;
