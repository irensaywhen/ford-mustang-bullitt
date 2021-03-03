import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

const ignitionSystemPeculiarities = [
  'Точный контроль времени зажигания для каждого цилиндра по отдельности',
  'Уменьшение выбросов',
  'Более экономичный расход топлива',
  'Уменьшение потерей энергии',
];

const warnings = [
  {
    description:
      'Не водить машину по сухой траве (и похожим покрытиям). Система выбросов имеет высокие температуры. Такое вождение может стать причиной пожара.',
  },
  {
    description: 'Не чинить систему выброса газов до ее полного остужения.',
  },
  {
    description:
      'Если запах отработанных газов присуствует в кабине, необходимо немедленно предоставить машину в сервис на осмотр.',
  },
];

const catalyticConverterMaintainance = [
  'Использовать только рекомендованное топливо',
  'Не оставаться без топлива',
  'Не выключать зажигание в процессе движения',
  'Не разогревать двигатель более 10 секунд',
  'Do not run the engine with a spark plug lead disconnected.',
  'Do not push-start or tow-start your vehicle. Use booster cables. See Jump Starting the Vehicle (page 207).',
];

const definitions = [
  {
    header: 'Запас хода автомобиля',
    body:
      'Максимальное расстояние, которое может проехать автомобиль на одной заправке топлива',
  },
  {
    header: 'Топливный бак',
    body: 'Емкость для хранения топлива. Располагается сзади автомобиля.',
  },
  {
    header: 'Топливопроводы',
    body:
      'Трубки, предназначенные для доставки бензина от топливного бака до карбюратора.',
  },
  {
    header: 'Топливный фильтр',
    body:
      'Предназначен для тонкой очистки топлива, поступающего к топливному насосу.',
  },
  {
    header: 'Топливный насос',
    body:
      'Предназначен для принудительной подачи топлива из бака в карбюратор. Необходим, так как топливный бак располагается ниже карбюратора.',
  },
  {
    header: 'Воздушный фильтр',
    body:
      'Необходим для очистки воздуха, поступающего в цилиндры двигателя. Устанавливается на верхней части воздушной головины карбюратора.',
  },
  {
    header: 'Карбюратор',
    body:
      'Предназначен для приготовления горючей смеси и подачи ее в цилиндры двигателя. В зависимости от режимов работы двигателя, карбюратор меняет количество горючей смеси, а также соотношение воздуха и бензина в ней.',
  },
  {
    header: 'Нормальная горючая смесь',
    body:
      'Горючая смесь называется нормальной, если на одну часть бензина приходится 15 частей воздуха.',
  },
  {
    header: 'Обедненная горючая смесь',
    body: 'Смесь, где воздуха больше чем 15 частей на 1 часть бензина.',
  },
  {
    header: 'Обогащенная горючая смесь',
    body: 'Смесь, где воздуха меньше чем 15 частей на 1 часть бензина.',
  },
];

const Ignition = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <iframe
        title='differential'
        className='has-ratio'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/3mz1BpIE-Ec'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    ));

    modalContext.showModal();
  };

  const warningsList = warnings.map((warning, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-exclamation-triangle'></i>}
      iconWrapperClasses={['is-size-1', 'is-1', 'has-text-warning']}
    >
      <p>{warning.description}</p>
    </BulletpointWithIcon>
  ));

  const catalyticMaintainanceList = catalyticConverterMaintainance.map(
    (precaution, index) => (
      <BulletpointWithIcon
        key={index}
        icon={<i className='fas fa-exclamation-triangle'></i>}
        iconWrapperClasses={['is-size-1', 'is-1', 'has-text-warning']}
      >
        <p>{precaution}</p>
      </BulletpointWithIcon>
    )
  );

  return (
    <React.Fragment>
      <div className='block'>
        <H3>Система зажигания</H3>
        <p>
          Система зажигания является частью{' '}
          <TextSemibold>электрооборудования автомобиля</TextSemibold>. Она
          вступает в игру когда рабочую смесь в двигателе нужно поджечь. Данная
          модель оборудована{' '}
          <TextSemibold>
            бесконтактной системой зажигания COP(Coin on Plug)
          </TextSemibold>
        </p>
      </div>
      <div className='block'>
        <H4>Общий принцип работы контактной системы зажигания</H4>
        <p>
          Электрическая система автомобиля вырабатывает{' '}
          <TextSemibold>ток низкого напряжения</TextSemibold>, который подается
          на катушку. Рядом с ней устанавливается катушка с другим количеством
          витков. При изменении тока на катушке низкого напряжения, засчет
          закона электромагнитной индукции, на второй катушке также индуцируется
          переменный ток, но уже <TextSemibold>высокого</TextSemibold>{' '}
          напряжения. Это напряжение подается на{' '}
          <TextSemibold>свечу зажигания</TextSemibold>, позволяя пробить
          воздушный зазор и воспламенить горючую смесь в цилиндре.
        </p>
      </div>
      <div className='block'>
        <H4>Бесконтактная система зажигания</H4>
        <p>
          Отличается от контактной тем, что малые токи вырабатывает датчик
          Холла. Эти токи приходят на коммутатор, который передает более мощные
          токи на катушку зажигания.
        </p>
        <p className='pt-2'>
          Бесконтактная система зажигания позволяет получать более мощную искру
          по сравнению с контактной системой зажигания, поскольку в ней нет
          необходимости беречь контакты от того, чтобы они не перегорали. Более
          мощная искра облегчает пуск двигателя.
        </p>
      </div>
      <div className='block'>
        <H4 className='pb-2'>
          Особенности системы зажигания <TextSemibold>COP</TextSemibold>
        </H4>
        <p>
          Считается самой передовой системой зажигания. Ее особенность
          заключается в том, что зажигание каждой свечи контролируется по
          отдельности. Каждая свеча зажигания обсуживается отдельной катушкой
          зажигания.
        </p>
      </div>
      <div className='block'>
        <OrderedList listItems={ignitionSystemPeculiarities} />
      </div>
    </React.Fragment>
  );
};

export default Ignition;
