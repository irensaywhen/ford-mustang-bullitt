import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import WarningsList from '../../common/UI/WarningsList';
import ComparisonCards from '../../common/UI/cards/ComparisonCards';
import Accordion from '../../common/UI/Accordion/Accordion';
import VideoIframe from '../../common/UI/VideoIframe';
import Block from '../../common/UI/Wrappers/Block';
import FaultsList from '../../common/UI/FaultsList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

import {
  faults,
  definitions,
  coolingSystemParts,
  coolantComparisonData,
  warnings,
  mantainanceTips,
} from './data/cooling';

const Cooling = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <VideoIframe
        title='Принцип работы системы охлаждения'
        src='https://www.youtube.com/embed/w9b8fN6PgHg'
      ></VideoIframe>
    ));

    modalContext.showModal();
  };

  return (
    <React.Fragment>
      <Block>
        <H3>Система охлаждения</H3>
        <p>
          Презназначена для поддержания нормального теплового режима работы
          двигателяю <br></br>
          При работе двигателя температура в его цилиндрах поднимается выше{' '}
          <TextSemibold>2000 градусов</TextSemibold>, а средняя составляет{' '}
          <TextSemibold>800 - 900 градусов</TextSemibold>. Это приводит к
          необходимости его постоянно охлождать.
        </p>
      </Block>
      <Block>
        <H4>Состоит из:</H4>
        <OrderedList listItems={coolingSystemParts} />
        <p className='pt-2'>
          В системе охлаждения имеется два круга циркуляции охлаждающей
          жидкости. Один предназначен для скорейшего прогрева охлаждающей
          жидкости, когда двигатель начинает работу, другой - для его охдаждения
          в процессе работы.
        </p>
      </Block>
      <Block>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
      </Block>
      <Block>
        <H4>Охлаждающая жидкость</H4>
        <p>
          В качестве охлаждающей жидкости можно использовать{' '}
          <TextSemibold>воду</TextSemibold>,{' '}
          <TextSemibold>антифриз</TextSemibold>
          или <TextSemibold>тосол</TextSemibold>.
        </p>
      </Block>
      <Block>
        <H4>Сравнение видов охлаждающей жидкости</H4>
        <p>
          Использование специальной жидкости для охлаждения, несмотря на
          недостаток в виде цены, может повысить срок службы двигателя, так как
          не вызывает коррозии и не расширяется при замерзании.
        </p>
      </Block>
      <Block>
        <div className='columns is-justify-content-center'>
          <ComparisonCards cardsData={coolantComparisonData} cardsSize='is-6' />
        </div>
      </Block>

      <Block>
        <H4>Эксплуатация</H4>
        <p>
          Рекомендуется использовать только жидкость{' '}
          <TextSemibold>
            Orange Prediluted Antifreeze/Coolant VC-3DIL-B
          </TextSemibold>
          . Цвет жидкости -{' '}
          <TextSemibold className='has-text-warning'>оранжевый</TextSemibold>.
          При эксплуатации может становиться{' '}
          <TextSemibold className='has-text-danger'>розовым</TextSemibold> или{' '}
          <TextSemibold className='has-text-danger-dark'>
            красноватым
          </TextSemibold>
          .
        </p>
      </Block>
      <Block>
        <H4>Меры предосторожности</H4>
        <OrderedList listItems={mantainanceTips} />
      </Block>
      <Block>
        <WarningsList warnings={warnings} />
      </Block>
      <Block>
        <H4>Fail-safe mode</H4>
        <p>
          Этот режим предназначен для экстренного движения в случае
          неисправности системы охлаждения. Если температура двигателя выходит
          за рамки допустимой, двигатель автоматически переключается в данный
          режим.<br></br>
          При этом выключается система кондиционирования салона, а также
          возможности двигателя уменьшаются. При длительном вождении в таком
          режиме, двигатель может автоматически выключиться. <br></br>
          При этом, когда двигатель остынет, его можно будет включить и
          некоторое время продолжать движение в том же режиме.<br></br>
          Этот режим предназначен только для того, чтобы доехать до сервиса, где
          можно будет устранить неисправности системы охлаждения.
        </p>
      </Block>

      <Block>
        <H4>Основные неисправности системы охлаждения</H4>
        <p>
          Неисправности системы охлаждения могут приводить к перегреву
          двигателя. В случае, если двигатель перегревается, необходимо ехать с
          особой осторожностью и периодическими остановками, чтобы дать
          двигателю остыть.
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

export default Cooling;
