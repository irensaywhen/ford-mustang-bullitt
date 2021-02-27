import React, { useContext } from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';
import OrderedList from '../../common/UI/OrderedList';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import Table from '../../common/UI/Table';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';
import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

import gearboxHandler from '../../assets/img/transmission/2019-Ford-Mustang-Bullitt-UK-Review-06.jpg';

const definitions = [
  {
    header: 'Картер',
    body:
      'Содержит в себе все основные детали и узлы коробки передач. Крепится к картеру сцепления, который закреплен на двигателе. Картер наполовину своего объема залит трансмиссионным маслом Motorcraft® Dual Clutch Transmission Fluid XT-11-QDC Windshield washer f',
  },
  {
    header: 'Валы коробки передач',
    body:
      'Вращаются в подшипниках и имеют наборы шестерен с различным числом зубцов.',
  },
  {
    header: 'Синхронизаторы',
    body:
      'Необходимы для плавного бесшумного переключения передач путем выравнивания угловых скоростей вращающихся подшипников.',
  },
  {
    header: 'Механизмы переключения передач',
    body:
      'Служат для смены передач в коробке. Управляются водителем с помощью рычага из салона автомобиля.',
  },
  {
    header: 'Замковое устройство',
    body: 'Не позволяет включаться одновременно двум передачам.',
  },
  {
    header: 'Блокирующее устройство',
    body: 'Удерживает передачи от самопроизвольного выключения.',
  },
  {
    header: 'Передаточное отношение',
    body:
      'Отношение числа зубцов между соприкасающимися шестернями, определяющее, во сколько раз изменяется скорость, передаваемая от двигателя на ведущие колеса.',
  },
  {
    header: 'Прямая передача',
    body:
      'Передача, на которой скорость вращения первичного и вторичного валов одинакова (четвертая).',
  },
];

const gearboxSwitchingThead = ['Переключение между', 'Скорость'];

// Array for rows
const gearboxSwitchingTbody = [
  ['1 - 2', '23 км/ч'],
  ['2 - 3', '40 км/ч'],
  ['3 - 4', '56 км/ч'],
  ['4 - 5', '66 км/ч'],
  ['5 - 6', '77 км/ч'],
];

const gearRatios = {
  tHead: [
    <span className='has-text-weight-bold'>Передача</span>,
    1,
    2,
    3,
    4,
    5,
    6,
  ],
  tBody: [
    [
      <span className='has-text-weight-bold'>Отношение</span>,
      '3.237',
      '2.104',
      '1.422',
      '1',
      '0.814',
      '0.622',
    ],
  ],
};

const gearboxParts = [
  'Картера',
  'Первичного и вторичного промежуточного валов с шестернями',
  'Дополнительного вала и шестерни заднего хода',
  'Синхронизаторов',
  'Механизма переключения передач с замковым и блокирующим устройствами',
  'Рычагами переключения',
];

const faults = [
  {
    title: 'Подтекание масла',
    description:
      'Возможно из-за повреждения уплотнительных прокладок, сильников, ослабления крепления крышек картера.',
  },
  {
    title: 'Шум при работе',
    description:
      'Может возникнуть из-за неисправного синхронизатора, износа подшипников, шестерен, соединений.',
  },
  {
    title: 'Затрудненное включение передач',
    description:
      'Может происходить из-за поломок деталей механизма переключения, износа синхронизаторов или шестерен.',
  },
  {
    title: 'Самовыключение',
    description:
      'Случается из-за неисправности блокировочного устройтва, приизносе синхронизаторов или шестерен.',
  },
];

const Gearbox = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <iframe
        title='gearbox'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/Bb7leiitIo4'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    ));

    modalContext.showModal();
  };

  const faultsList = faults.map((fault, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-tools'></i>}
      iconWrapperClasses={['is-size-3', 'is-1']}
    >
      <h5 className='is-5 has-text-weight-bold'>{fault.title}</h5>
      <p>{fault.description}</p>
    </BulletpointWithIcon>
  ));

  return (
    <React.Fragment>
      <div className='block'>
        <H3>Коробка передач</H3>
        <p>
          Предназначена для изменения по{' '}
          <TextSemibold>величине и направлению</TextSemibold> крутящего момента
          и передачи его от двигателя на ведущие колеса.
        </p>
      </div>
      <div className='block'>
        <H4 className='mb-2'>Состоит из</H4>
        <OrderedList listItems={gearboxParts} />
      </div>
      <div className='block'>
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
          <div className='columns pt-5 pb-3 pl-3'>
            <div className='col'>
              <Table
                tHeaderCaption={
                  <TextSemibold>Передаточные отношения</TextSemibold>
                }
                theadRow={gearRatios.tHead}
                tbodyRows={gearRatios.tBody}
                hasTextLeft
              />
            </div>
          </div>
        </p>
        <p className='pt-2'>
          Чем <TextSemibold>выше</TextSemibold> передача, тем двигателю{' '}
          <TextSemibold>тяжелее</TextSemibold> крутить колеса, но тем машина{' '}
          <TextSemibold>быстрее</TextSemibold>. <br></br>
          Чем передача <TextSemibold>ниже</TextSemibold>, тем двигателю{' '}
          <TextSemibold>легче</TextSemibold> крутить колеса, но тем машина{' '}
          <TextSemibold>медленнее</TextSemibold>.
        </p>
      </div>
      <div className='block'>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
      </div>
      <div className='block'>
        <H4>6-ти скоростная коробка передач</H4>
        <p>
          Не рекомендуется переключаться на 1 передачу когда скорость автомобиля
          больше <TextSemibold>24 км/ч</TextSemibold>. Это может привести к
          повреждению сцепления.
        </p>
      </div>
      <div className='block pt-3'>
        <div className='columns'>
          <div className='col pr-5 pl-3 is-flex is-align-items-center is-justify-content-center is-hidden-mobile'>
            <figure className='image is-256x256'>
              <img src={gearboxHandler} alt=''></img>
            </figure>
          </div>
          <div className='col'>
            <Table
              theadRow={gearboxSwitchingThead}
              tbodyRows={gearboxSwitchingTbody}
              tFooterCaption='Точные скорости для оптимального использования топлива'
            />
          </div>
        </div>
      </div>

      <div className='block pt-5'>
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
        {faultsList}
      </div>
      <div className='block pt-4'>
        <Accordion items={definitions}></Accordion>
      </div>
    </React.Fragment>
  );
};

export default Gearbox;
