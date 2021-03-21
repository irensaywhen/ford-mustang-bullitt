import React, { useContext } from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';
import OrderedList from '../../common/UI/OrderedList';
import Table from '../../common/UI/Table';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';
import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';
import VideoIframe from '../../common/UI/VideoIframe';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';
import FaultsList from '../../common/UI/FaultsList';

import { ModalContext } from '../../context/modal-context';

import gearboxHandler from '../../assets/img/transmission/2019-Ford-Mustang-Bullitt-UK-Review-06.jpg';

// data
import {
  definitions,
  speed,
  gearRatios,
  gearboxParts,
  faults,
} from './data/gearbox';

const Gearbox = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <VideoIframe
        title='gearbox'
        src='https://www.youtube.com/embed/Bb7leiitIo4'
      ></VideoIframe>
    ));

    modalContext.showModal();
  };

  return (
    <React.Fragment>
      <Block>
        <H3>Коробка передач</H3>
        <p>
          Предназначена для изменения по{' '}
          <TextSemibold>величине и направлению</TextSemibold> крутящего момента
          и передачи его от двигателя на ведущие колеса.
        </p>
      </Block>
      <Block>
        <H4 className='mb-2'>Состоит из</H4>
        <OrderedList listItems={gearboxParts} />
      </Block>
      <Block>
        <H4>Принцип работы</H4>
        <p>
          Возможность иметь разные скорости вращения ведущих колес при
          практически постоянной скорости вращения, обеспеченной двигателем
          внутреннего сгорания, происходит из-за переключения между шестернями,
          имеющими <TextSemibold>разный диаметр</TextSemibold>.<br></br>
          <TextSemibold>Угловая скорость</TextSemibold>
          вращения шестерни одинаковая и <TextSemibold>не</TextSemibold> зависит
          от <TextSemibold>радиуса</TextSemibold>, в то время как{' '}
          <TextSemibold>линейная</TextSemibold>
          (тангенсальная) скорость <TextSemibold>зависит</TextSemibold> от{' '}
          <TextSemibold>радиуса</TextSemibold>, что позволяет обеспечить разные
          линейные скорости разными диаметрами (следовательно, разными
          количествами зубцов).<br></br>
          Переключая передачи, мы меняем соприкасающиеся шестерни, изменяя тем
          самым <TextSemibold>передаточное отношение</TextSemibold>
        </p>
        <div className='columns pt-5 pb-3 pl-3'>
          <div className='col'>
            <Table
              tHeaderCaption={
                <TextSemibold>Передаточные отношения</TextSemibold>
              }
              theadRow={gearRatios.thead}
              tbodyRows={gearRatios.tbody}
              hasTextLeft
            />
          </div>
        </div>
        <p className='pt-2'>
          Чем <TextSemibold>выше</TextSemibold> передача, тем двигателю{' '}
          <TextSemibold>тяжелее</TextSemibold> крутить колеса, но тем машина{' '}
          <TextSemibold>быстрее</TextSemibold>. <br></br>
          Чем передача <TextSemibold>ниже</TextSemibold>, тем двигателю{' '}
          <TextSemibold>легче</TextSemibold> крутить колеса, но тем машина{' '}
          <TextSemibold>медленнее</TextSemibold>.
        </p>
      </Block>
      <Block>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
      </Block>
      <Block>
        <H4>6-ти скоростная коробка передач</H4>
        <p>
          Не рекомендуется переключаться на 1 передачу когда скорость автомобиля
          больше <TextSemibold>24 км/ч</TextSemibold>. Это может привести к
          повреждению сцепления.
        </p>
      </Block>
      <Block className='pt-3'>
        <div className='columns'>
          <div className='col pr-5 pl-3 is-flex is-align-items-center is-justify-content-center is-hidden-mobile'>
            <Figure className='is-256x256' img={{ src: gearboxHandler }} />
          </div>
          <div className='col'>
            <Table
              theadRow={speed.thead}
              tbodyRows={speed.tbody}
              tFooterCaption='Точные скорости для оптимального использования топлива'
            />
          </div>
        </div>
      </Block>

      <Block className='pt-5'>
        <H4>Основные неисправности коробки передач. Эксплуатация.</H4>
        <p className='pb-5'>
          Как правило, неисправности в коробке передач связаны с грубым
          обращением с ней. <br></br>
          Рычаг переключения должен переводиться{' '}
          <TextSemibold>плавным </TextSemibold>
          движением, с <TextSemibold>микропаузами</TextSemibold> в нейтральном
          положении, чтобы успели сработать синхронизаторы. <br></br>
          Также, при эксплуатации коробки передач необходимо тщательно{' '}
          <TextSemibold>следить за уровнем масла</TextSemibold> в картере.
        </p>
        <FaultsList faults={faults} />
      </Block>
      <Block className='pt-4'>
        <Accordion items={definitions}></Accordion>
      </Block>
    </React.Fragment>
  );
};

export default Gearbox;
