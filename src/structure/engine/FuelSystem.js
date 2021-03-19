import React, { useContext } from 'react';

import FaultsList from '../../common/UI/FaultsList';
import Accordion from '../../common/UI/Accordion/Accordion';
import VideoIframe from '../../common/UI/VideoIframe';
import Block from '../../common/UI/Wrappers/Block';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

import { faults, definitions } from './data/fuelSystem';

const FuelSystem = () => {
  const modalContext = useContext(ModalContext);

  const openModal = videoType => {
    let modalContent;

    switch (videoType) {
      case 'main':
        modalContent = (
          <VideoIframe
            title='Система питания'
            src='https://www.youtube.com/embed/0rgqG8Qoe6E'
          ></VideoIframe>
        );
        break;
      case 'carburetor':
        modalContent = (
          <VideoIframe
            title='Устройство карбюратора'
            src='https://www.youtube.com/embed/Lrds070lu4I'
          ></VideoIframe>
        );
        break;
      default:
        throw new Error('Incorrect video type');
    }
    // Set video content
    modalContext.setModalContent(() => modalContent);

    modalContext.showModal();
  };

  return (
    <React.Fragment>
      <Block>
        <H3>Система питания</H3>
        <p>
          Предназначена для хранения, очистки и подачи топлива, очистки водуха,
          приготовления горючей смеси и подачи ее в цилиндры двигателя. На
          различных режимах работы двигателя количество и качество горючей смеси
          должно быть различным. Это также обеспечивается системой питания.
        </p>
      </Block>
      <Block>
        <PrimaryButton onClick={() => openModal('main')}>
          Узнать подробнее об общем устройстве
        </PrimaryButton>
      </Block>
      <Block>
        <H4>Карбюратор</H4>
        <p>
          Это один из самых сложных устройств автомобиля.<br></br>
          Усправление карбюратором происходит через{' '}
          <TextSemibold>педаль газа</TextSemibold>. Когда водитель давит на газ,
          он управляет <TextSemibold>дроссельной заслонкой</TextSemibold>.
        </p>
      </Block>
      <Block>
        <PrimaryButton onClick={() => openModal('carburetor')}>
          Как работает карбюратор?
        </PrimaryButton>
      </Block>

      <Block>
        <H4>Основные неисправности системы питания</H4>
        <p>
          Имеется большое количество потенциальных неисправностей в системе
          питания, при большинстве из которых разрешается эксплуатация
          транспортного средства, но делать это не рекомендуется.
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

export default FuelSystem;
