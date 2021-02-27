import React, { useContext } from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';
import OrderedList from '../../common/UI/OrderedList';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';
import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

const definitions = [
  {
    header: 'Привод механизмов',
    body:
      'Служит для передачи усилия к тому или иному механизму от водителя или другого механизма.',
  },
  {
    header: 'Механизм сцепления',
    body:
      'Представляет собой устойство, в котором происходит передача крутящего момента за счет работы сил трения. Именно он позволяет разъединять двигатель и коробку передач.',
  },
];

const assistiveClutchParts = [
  'Педали',
  'Главного цлиндра (передает усилие от педали на рабочий цилиндр)',
  'Рабочего цилиндра (передает усилие на механизм сцепления)',
  'Вилки выключения сцепления',
  'Нажимного подшипника',
  'Трубопроводов',
];

const clutchParts = [
  'Картера и кожуха',
  'Ведущего диска (присоединен к двигателю)',
  'Нажимного диска с пружинами',
  'Ведомого диска (присоединен к коробке передач)',
];

const releaseClutchPedalSteps = [
  'Приотпустить педаль, чтобы подвести ведомый диск к маховику до их легкого соприкосновения. Ведомый диск засчет сил трения начинает медленно вращаться.',
  'Удержать педаль сцепления в фиксированном положении, чтобы ведущий диск начал вращаться со скоростью ведущего диска',
  'Отпустить педаль сцепления. Оба диска вращаются с одинаковой скорость.',
];

const faults = [
  {
    title: 'Сцепление ведет',
    description:
      'Сцепление выключается не полностью из-за большого свободного хода педали, перекоса нажимного подшипника, поломки пружин, неисправности нажимного диска.',
  },
  {
    title: 'Сцепление пробуксовывает',
    description:
      'Сцепление включается не полностью из-за малого свободного хода педали, замасливания или износа накладок, поломки пружин.',
  },
  {
    title: 'Сцепление включается резко',
    description:
      'Вследствие заедания в механизмах привода, разрушения элементов сцепления.',
  },
  {
    title: 'Подтекание тормозной жидкости в приводе выключения сцепления',
    description:
      'Возможно из главного или рабочего цилиндров, в соединительных трубках.',
  },
];

const Clutch = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <iframe
        title='clutch'
        className='has-ratio'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/BgZaz5b4JRk'
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
      </div>
      <div className='block'>
        <PrimaryButton onClick={openModal}>
          Как работает сцепление?
        </PrimaryButton>
      </div>
      <div className='block'>
        <H4>Привод выключения сцепления</H4>
        <p>
          Модель имеет гидравлический привод сцепления. Тормозная система и
          гидропривод сцепления используют одну и ту же жидкость{' '}
          <TextSemibold>DOT 4 Low Viscosity High Perfomance</TextSemibold>
        </p>
      </div>
      <div className='block'>
        <H4 className='mb-2'>Гидропривод состоит из:</H4>
        <OrderedList listItems={assistiveClutchParts} />
        <p className='pt-2'>
          Гидропривод сцепления работает по принципу передачи давления от педали
          сцепления через жидкость на механизм сцепления. <br></br>
          При отпускании педали сцепления засчет{' '}
          <TextSemibold>возвратных пружин</TextSemibold> все детали возвращаются
          в исходное положение.
        </p>
      </div>
      <div className='block'>
        <H4>Механизм сцепления</H4>
        <p>
          Позволяет кратковременно разъединить двигатель и коробку передач, а
          затем соединить их.
        </p>
      </div>
      <div className='block'>
        <H4 className='mb-2'>Состоит из:</H4>
        <OrderedList listItems={clutchParts} />
        <p className='pt-4'>
          Когда сцепление <TextSemibold>включено</TextSemibold>, механизм
          сцепления вращается вместе с двигателем. <br></br>
          Когда сцепление <TextSemibold>выключено</TextSemibold>, механизм
          сцепления отсоединен от двигателя. <br></br> Для того, чтобы начать
          движение, нужно <TextSemibold>включить</TextSemibold> сцепление.
        </p>
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
          <TextSemibold>нажать</TextSemibold> на педаль сцепления. При этом
          передача крутящего момента прерывается. Нажимать на педаль сцепления
          следует быстро, но не резко.
        </p>
      </div>
      <div className='block'>
        <H4>Основные неисправности сцепления. Эксплуатация.</H4>
        <p className='pb-5'>
          Для того, чтобы машина служила,{' '}
          <span className='has-text-weight-semibold has-text-danger'>
            важно
          </span>{' '}
          следить за исправностью сцепления. Лучше избежать чрезмерного
          использования сцепления первые 150 километров в городе, и первые 1500
          километров за городом.
        </p>
        {faultsList}
      </div>
      <div className='block pt-4'>
        <Accordion items={definitions}></Accordion>
      </div>
    </React.Fragment>
  );
};

export default Clutch;
