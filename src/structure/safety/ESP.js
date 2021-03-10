import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import Card from '../../common/UI/cards/Card';

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

const ESP = () => {
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
        <H3>ESP - Electronic stability control</H3>
        <p>
          Это электронная система динамической стабилизации автомобиля. Система
          ESP создана для помощи при вождении автомобиля. Ее основная задача –
          сохранение курсовой устойчивости, то есть она должна помогать
          предотвращать занос и боковое скольжение в критических ситуациях.
        </p>
      </div>
      <div className='block'>
        <p>
          Эта система автоматически включается при включении зажигания.{' '}
          <br></br>В случае, если машина застряла в снегу или грязи, необходимо{' '}
          <TextSemibold>выключить</TextSemibold> противобуксовочную систему.
        </p>
      </div>
      <div className='block'>
        <H4>Состоит из:</H4>
        <OrderedList listItems={coolingSystemParts} />
        <p className='pt-2'>
          В системе охлаждения имеется два круга циркуляции охлаждающей
          жидкости. Один предназначен для скорейшего прогрева охлаждающей
          жидкости, когда двигатель начинает работу, другой - для его охдаждения
          в процессе работы.
        </p>
      </div>
      <div className='block'>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
      </div>
      <div className='block'>
        <H4>Охлаждающая жидкость</H4>
        <p className='pt-2'>
          В качестве охлаждающей жидкости можно использовать{' '}
          <TextSemibold>воду</TextSemibold>,{' '}
          <TextSemibold>антифриз</TextSemibold>
          или <TextSemibold>тосол</TextSemibold>.
        </p>
      </div>
      <div className='block'>
        <H4>Сравнение видов охлаждающей жидкости</H4>
        <p className='pt-2'>
          Использование специальной жидкости для охлаждения, несмотря на
          недостаток в виде цены, может повысить срок службы двигателя, так как
          не вызывает коррозии и не расширяется при замерзании.
        </p>
      </div>
      <div className='block'>
        <div className='columns is-justify-content-center'>
          {powerSteeringCards}
        </div>
      </div>

      <div className='block'>
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
      </div>
      <div className='block'>
        <p className='pb-2'>Необходимо соблюдать следующие меры:</p>
        <OrderedList listItems={mantainanceTips} />
      </div>
      <div className='block'>{warningsList}</div>
      <div className='block'>
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
      </div>

      <div className='block pt-5'>
        <H4 className='pb-3'>Основные неисправности системы охлаждения</H4>
        {faultsList}
      </div>
      <div className='block pt-4'>
        <Accordion items={definitions}></Accordion>
      </div>
    </React.Fragment>
  );
};

export default ESP;
