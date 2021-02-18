import React from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';
import OrderedList from '../../common/UI/OrderedList';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import Table from '../../common/UI/Table';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';

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

const assistiveClutchParts = [
  'Педали',
  'Главного цлиндра (передает усилие от педали на рабочий цилиндр)',
  'Рабочего цилиндра (передает усилие на механизм сцепления)',
  'Вилки выключения сцепления',
  'Нажимного подшипника',
  'Трубопроводов',
];

const gearboxParts = [
  'Картера',
  'Первичного и вторичного промежуточного валов с шестернями',
  'Дополнительного вала и шестерни заднего хода',
  'Синхронизаторов',
  'Механизма переключения передач с замковым и блокирующим устройствами',
  'Рычагами переключения',
];

const releaseClutchPedalSteps = [
  'Приотпустить педаль, чтобы подвести ведомый диск к маховику до их легкого соприкосновения. Ведомый диск засчет сил трения начинает медленно вращаться.',
  'Удержать педаль сцепления в фиксированном положении, чтобы ведущий диск начал вращаться со скоростью ведущего диска',
  'Отпустить педаль сцепления. Оба диска вращаются с одинаковой скорость.',
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
          <span className='has-text-weight-semibold'>
            величине и направлению
          </span>{' '}
          крутящего момента и передачи его от двигателя на ведущие колеса.
          <br></br>
          <br></br>
          Состоит из:
        </p>
        <p className='pt-2'>
          <OrderedList listItems={gearboxParts} />
        </p>
      </div>
      <div className='block'>
        <H4>Принцип работы</H4>
        <p>
          Возможность иметь разные скорости вращения ведущих колес при
          практически постоянной скорости вращения, обеспеченной двигателем
          внутреннего сгорания, происходит из-за переключения между шестернями,
          имеющими{' '}
          <span className='has-text-weight-semibold'>разный диаметр</span>.
          <br></br>
          <span className='has-text-weight-semibold'></span>
          <span className='has-text-weight-semibold'>Угловая скорость</span>
          вращения шестерни одинаковая и{' '}
          <span className='has-text-weight-semibold'>не</span> зависит от
          <span className='has-text-weight-semibold'>радиуса</span>, в то время
          как <span className='has-text-weight-semibold'>линейная</span>
          (тангенсальная) скорость{' '}
          <span className='has-text-weight-semibold'>зависит</span> от{' '}
          <span className='has-text-weight-semibold'>радиуса</span>, что
          позволяет обеспечить разные линейные скорости разными диаметрами
          (следовательно, разными количествами зубцов).<br></br>
          Переключая передачи, мы меняем соприкасающиеся шестерни, изменяя тем
          самым{' '}
          <span className='has-text-weight-semibold'>
            передаточное отношение
          </span>
        </p>
        <p className='pt-2'>
          Чем <span className='has-text-weight-semibold'>выше</span> передача,
          тем двигателю{' '}
          <span className='has-text-weight-semibold'>тяжелее</span> крутить
          колеса, но тем машина{' '}
          <span className='has-text-weight-semibold'>быстрее</span>. <br></br>
          Чем передача <span className='has-text-weight-semibold'>ниже</span>,
          тем двигателю <span className='has-text-weight-semibold'>легче</span>{' '}
          крутить колеса, но тем машина{' '}
          <span className='has-text-weight-semibold'>медленнее</span>.
        </p>
      </div>
      <div className='block'>
        <H4>6-ти скоростная коробка передач</H4>
        <p>
          Не рекомендуется переключаться на 1 передачу когда скорость автомобиля
          больше <span className='has-text-weight-semibold'>24 км/ч</span>. Это
          может привести к повреждению сцепления.
        </p>
        <Table
          theadRow={gearboxSwitchingThead}
          tbodyRows={gearboxSwitchingTbody}
          tFooterCaption='Точные скорости для оптимального использования топлива'
        />
        Здесь нужно описать, какая скорость для чего нужна (возможно, в
        табличке)
      </div>
      <div className='block'>
        <H4>
          Отпускать педаль сцепления всегда нужно в <em>три</em> этапа:
        </H4>
        <OrderedList listItems={releaseClutchPedalSteps} />
      </div>
      <div className='block'>
        <H4>Выключение сцепления.</H4>
        <p>
          Для выключения сцепления, необходимо{' '}
          <span className='has-text-weight-semibold'>нажать</span> на педаль
          сцепления. При этом передача крутящего момента прерывается. Нажимать
          на педаль сцепления следует быстро, но не резко.
        </p>
      </div>
      <div className='block'>
        <H4>Основные неисправности коробки передач. Эксплуатация</H4>
        <p className='pb-5'>
          Как правило, неисправности в коробке передач связаны с грубым
          обращением с ней. <br></br>
          Рычаг переключения должен переводиться{' '}
          <span className='has-text-weight-semibold'>плавным </span>
          движением, с{' '}
          <span className='has-text-weight-semibold'>микропаузами</span> в
          нейтральном положении, чтобы успели сработать синхронизаторы.{' '}
          <br></br>
          Также, при эксплуатации коробки передач необходимо тщательно{' '}
          <span className='has-text-weight-semibold'>
            следить за уровнем масла
          </span>{' '}
          в картере.
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
