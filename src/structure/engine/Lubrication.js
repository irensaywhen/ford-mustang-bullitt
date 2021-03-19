import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import FaultsList from '../../common/UI/FaultsList';
import VideoIframe from '../../common/UI/VideoIframe';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

import dipstick from '../../assets/img/engine/dipstick.png';

import {
  faults,
  definitions,
  lubricationSystemParts,
  oilCheckProcedure,
} from './data/lubrication';

const Lubrication = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <VideoIframe
        title='Принцип работы системы смазки'
        src='https://www.youtube.com/embed/Y7NZBJ1w5PI'
      ></VideoIframe>
    ));

    modalContext.showModal();
  };

  return (
    <React.Fragment>
      <Block>
        <H3>Система смазки</H3>
        <p>
          Предназначена для подачи масла к трущимся деталям, их частичного
          охлаждения и удаления продуктов износа.
        </p>
        <p className='pt-2'>
          В системе охлаждения имеется два круга циркуляции охлаждающей
          жидкости. Один предназначен для скорейшего прогрева охлаждающей
          жидкости, когда двигатель начинает работу, другой - для его охдаждения
          в процессе работы.
        </p>
      </Block>
      <Block>
        <H4>Состоит из:</H4>
        <OrderedList listItems={lubricationSystemParts} />
      </Block>
      <Block>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
      </Block>
      <Block>
        <H4>Контроль уровня масла</H4>
        <p>
          Для нормальной работы двигателя необходимо следить за уровнем и
          давлением масла. <br></br>В случае{' '}
          <TextSemibold>недостатка</TextSemibold> давления масла, детали
          двигателя могут претерпеть серьезные повреждения. <br></br>В случае
          избыточного давление может происходить подтекание масла.<br></br>
          Для данной модели рекомендуют использовать масло{' '}
          <TextSemibold>
            Motorcraft SAE 5W-30 Premium Synthetic Blend Motor Oil XO-5W30-QSP
          </TextSemibold>
          .
        </p>
      </Block>
      <Block>
        <H4>Как проверить уровень масла</H4>
        <p>
          Для проверки уровня масла существует специальный измерительный щуп,
          имеющий отметки минимально и максимально допустимых уровней масла.
        </p>
      </Block>
      <Block>
        <div className='columns'>
          <div className='column is-6'>
            <OrderedList listItems={oilCheckProcedure} />
          </div>
          <div className='column is-6'>
            <Figure img={{ src: dipstick }} />
          </div>
        </div>
      </Block>

      <Block>
        <H4>Масляные фильтры</H4>
        <p>
          Помимо контроля за уровней масла, необходимо также регулярно менять
          масляные фильтры.
        </p>
      </Block>

      <Block>
        <H4>Основные неисправности системы смазки</H4>
        <p>
          Неисправности системы смазки опасны тем, что из-за них может
          значительно усилиться трение деталей двигателя, из-за чего они быстро
          выйдут из строя.
        </p>
      </Block>
      <Block>
        <FaultsList faults={faults} />
      </Block>
      <Block>
        <Accordion items={definitions}></Accordion>
      </Block>
    </React.Fragment>
  );
};

export default Lubrication;
