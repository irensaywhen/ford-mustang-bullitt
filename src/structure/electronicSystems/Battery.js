import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import Card from '../../common/UI/cards/Card';

import motorParts from '../../assets/img/motor-parts.png';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

const faults = [
  {
    title: 'Подтекание охлаждающей жидкости',
    description: 'Может происходить из различных элементов охлаждающей системы',
  },
  {
    title: 'Заклинивание термостата',
    description:
      'Это может приводить как к перегреву, так и к недогреву охлаждающей жидкости, в зависимости от положения, в котором его заклинит.',
  },
  {
    title: 'Хруст в водяном насосе',
    description: 'Может возникать засчет износа подшипников в нем.',
  },
];

const definitions = [
  {
    header: 'Рубашка охлаждения',
    body:
      'Состоит из множества каналов, по которым цикрулирует охлаждающая жидкость',
  },
  {
    header: 'Насос центробежного типа',
    body:
      'Заставляет жидкость перемещаться по рубашке охлаждения двигателя и всей системе. Приводится во вращение через соединение с коленчатым валом двигателя.',
  },
  {
    header: 'Термостат',
    body:
      'Предназначен для поддержания оптимального теплового режима. Позволяет переключаться между двумя кругами, по которым циркулирует охлаждающая жидкость, тем самым либо нагревая, либо охлаждая ее.',
  },
  {
    header: 'Радиатор',
    body: 'Охлаждает жидкость потоком воздуха, проходящего через него',
  },
  {
    header: 'Расширительный бачок',
    body:
      'Необходим для компенсации изменения объема и давления охлаждающей жидкости при ее нагреве или охлаждении.',
  },
  {
    header: 'Вентилятор',
    body:
      'Предназначен для принудительного увеличения потока воздуха, проходящего через радиатор движущегося автомобиля, а также для создания потока воздуха в случае, когда автомобиль стоит на месте.',
  },
  {
    header: 'Патрубки и шланги',
    body:
      'Служат для соединения рубашки охлаждения с термостатом, насосом, радиатором и расширительным бачком.',
  },
  {
    header: 'Отопитель салона',
    body:
      'Горячая охлаждающая жидкость проходит через радиатор отопителя и нагревает воздух в салоне.',
  },
];

const coolingSystemParts = [
  'Рубашки охлаждения',
  'Центробежного насоса',
  'Термостата',
  'Радиатора с расширительым бачком',
  'Соединительныъх патрубков и шлангов',
  'Отопитель салона',
];

const coolantComparisonData = [
  {
    title: 'Антифриз или тосол',
    prosAndCons: [
      {
        type: 'pro',
        description: 'Не вызывает коррозию',
      },
      {
        type: 'pro',
        description: 'Замерзает при очень низких температурах',
      },
      {
        type: 'pro',
        description:
          'Не расширяется при замерзании и не может из-за этого разрушить жидкость',
      },
      {
        type: 'con',
        description: 'Цена',
      },
    ],
  },
  {
    title: 'Вода',
    prosAndCons: [
      {
        type: 'pro',
        description: 'Цена',
      },

      {
        type: 'con',
        description: 'Вызывает коррозию элементов охлаждения',
      },
      {
        type: 'con',
        description: 'При замерзании может разрушить двигатель',
      },
    ],
  },
];

const warnings = [
  {
    description:
      'Не использовать охлаждающую жидкость в качестве очистителя для лобового стекла.',
  },
  {
    description:
      'Не снимать крышку с резервуара с охлаюждающей жидкостью до полного остужения двигателя. Подождать примерно 10 минут.',
  },
  {
    description:
      'Не наливать охлаждающую жидкость выше максимального допустимого уровня.',
  },
  {
    description:
      'Не смешивать разные охлаждающие жидкости. Использовать Orange Prediluted Antifreeze/Coolant VC-3DIL-B. Если есть необходимость подлить охлаждающую жидкость, но нет необходимой, разбавить в соотношении 50/50 с водой.',
  },
  {
    description:
      'Не снимать крышку с резервуара с охлаюждающей жидкостью до полного остужения двигателя. Подождать примерно 10 минут.',
  },
];

const mantainanceTips = [
  'Контролировать уровень охлаждающей жидкости.',
  'Если есть необходимость подливать больше литра охлаждающей жидкости в месяц, возможно, имеются серьезные потери жидкости.',
  'Охлаждающая жидкость может поменять цвет с оранжевой на розовую или красную. Если жидкость однородная, смена цвета допустима.',
  'В крайнем случае можно долить воду и доехать до сервиса.',
  'Не допускать перегрева двигателя.',
  'У жидкости есть срок службы. Ее необходимо менять.',
];

const Battery = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <iframe
        title='How cooling system work'
        width='560'
        height='315'
        className='has-ratio'
        src='https://www.youtube.com/embed/w9b8fN6PgHg'
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
      iconWrapperClasses={['is-1']}
    >
      <h5 className='is-5 has-text-weight-bold'>{fault.title}</h5>
      <p>{fault.description}</p>
    </BulletpointWithIcon>
  ));

  const warningsList = warnings.map((warning, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-exclamation-triangle'></i>}
      iconWrapperClasses={['is-size-1', 'is-1', 'has-text-warning']}
    >
      <p>{warning.description}</p>
    </BulletpointWithIcon>
  ));

  // Power steering comparison cards
  const powerSteeringCards = coolantComparisonData.map((card, index) => {
    // Pros and cons of this type of steering
    const prosAndCons = card.prosAndCons
      .sort((item1, item2) => {
        if (item1.type === 'con') {
          return 1;
        } else if (item1.type === 'con' && item2.type === 'con') {
          return 0;
        }

        return -1;
      })
      .map((listItem, index) => (
        <BulletpointWithIcon
          key={index}
          icon={
            listItem.type === 'pro' ? (
              <i class='far fa-check-circle'></i>
            ) : (
              <i class='far fa-times-circle'></i>
            )
          }
          iconWrapperClasses={[
            listItem.type === 'pro' ? 'has-text-success' : 'has-text-danger',
          ]}
        >
          <p className='has-text-left is-size-5'>{listItem.description}</p>
        </BulletpointWithIcon>
      ));
    return (
      <div key={index} className='column is-6'>
        <Card title={<h3 className='title is-5'>{card.title}</h3>}>
          {prosAndCons}
        </Card>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className='block'>
        <H3>Аккумуляторная батареия</H3>
        <p>
          Предназначена для питания потребителей электрическим током при{' '}
          <TextSemibold>неработающем двигателе</TextSemibold> и при его работе
          на <TextSemibold>малых оборотах</TextSemibold>.<br></br>
          Расположена в моторном отсеке и крепится на специальной полке.
          <br></br>
          Минус аккумуляторной батареи соединен с кузовом. Плюс соединяется с
          электрической цепью потребителей тока. <br></br>
          Аккумуляторные батареи на легковых автомобилях имеют{' '}
          <TextSemibold>6</TextSemibold> аккумуляторов, каждый из которых выдет
          напряжение <TextSemibold>2В</TextSemibold>. Суммарное напряжение
          составляет <TextSemibold>12В</TextSemibold>.<br></br>
          Аккумуляторная батарея данной модели имееет следующую маркировку:{' '}
          <br></br>
          <TextSemibold>BXT-96R-590</TextSemibold>.<br></br>
        </p>

        <p className='pt-2'>
          Каждая из батарей внутри имеет две клеммы, а также раствор
          электролита, представляющий из себя смесь дистилированной воды и
          серной кислоты. При зарядке и разрятке батареи происходит обратимая
          химическая реакция образования и растворения{' '}
          <TextSemibold>
            PbSO<sub>4</sub>
          </TextSemibold>
          . <br></br>
          Стоит обратить внимание, что аккумуляторная батарея содержит в себе
          токсичные и ядовитые соединения.
        </p>
      </div>
      <div className='block'>
        <div className='columns'>
          <div className='column is-4'>
            <p>
              Расположение батареи указано буквой <TextSemibold>А</TextSemibold>{' '}
              (под крышкой).<br></br>
            </p>
          </div>
          <div className='column is-8'>
            <figure className='image'>
              <img src={motorParts} alt=''></img>
            </figure>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Battery;
