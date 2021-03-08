import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import UnorderedList from '../../common/UI/UnorderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import Card from '../../common/UI/cards/Card';
import Table from '../../common/UI/Table';

// Text
import H2 from '../../common/UI/Titles/H3';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

import tireInfo from '../../assets/img/chasis/tire.jpg';

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

const speedIndexTableData = {
  tBody: [
    [
      <TextSemibold>Маркировка</TextSemibold>,
      'M',
      'N',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'H',
      'V',
      'W',
      'Y',
    ],
    [
      <TextSemibold>Max. Скорость, км/ч</TextSemibold>,
      '130',
      '140',
      '159',
      '171',
      '180',
      '190',
      '200',
      '210',
      '240',
      '270',
      '290',
    ],
  ],
};

const definitions = [
  {
    header: 'Диск с ободом',
    body:
      'С приваренным к нему ободом крепится к ступице колеса или к полуоси заднего моста с помощью конических болтов и гаек. ',
  },
  {
    header: 'Камерная шина',
    body:
      'Имеет в себе резиновую камеру, которая заполняется воздухом. Шина без камеры называется покрышкой.',
  },
  {
    header: 'Бескамерная шина',
    body:
      'Плотно прилегает к ободу и накачивается непосредственно. Диск дял бескамерной шины отличается наличием уплотняющих бортиков на ободе.',
  },
  {
    header: 'Покрышка',
    body: 'Состоим из каркаса, протектора, боковин и бортов.',
  },
  {
    header: 'Каркас шины',
    body:
      'Явояеися ноаверй часитью покрышки, ее силовой основой. Он выполняется из нескольких слоев специальной ткани - корда.',
  },
  {
    header: 'Протектор шины',
    body:
      'Это толстый слой резины с определенным рисунком, расположенный на наружней поверхности покрышки. Он непосредственно соприкасается с поверхностью дороги.',
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

const wheelsAndTiresParts = ['Диска  ободом', 'Шины'];

const tireParts = ['Каркаса', 'Протектора', 'Боковин', 'Бортов'];

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

const tiresQuality = [
  <p className='pt-2'>
    <TextSemibold>Treadwear</TextSemibold> - сравнительный показатель качества
    шины
  </p>,
  <p className='pt-2'>
    <TextSemibold>Traction АА, A, B, C</TextSemibold> - показывает способность
    останавливаться на мокрых участках.
  </p>,
  <p className='pt-2'>
    <TextSemibold>Temperature A, B, C</TextSemibold> - показывает способность
    резины сопротивляться температурам.
  </p>,
];

const tiresData = [
  <p className='pt-2'>
    A. <TextSemibold>P</TextSemibold> - может быть представлен. Говорит о том,
    что данная шина предназначена для легковых автомобилей.
  </p>,
  <p className='pt-2'>
    B. <TextSemibold>215</TextSemibold> - ширина профиля шины в миллиметрах
  </p>,
  <p className='pt-2'>
    C. <TextSemibold>65</TextSemibold> - сотношение высоты профиля к ее ширине в
    процентах
  </p>,
  <p className='pt-2'>
    D. <TextSemibold>R</TextSemibold> - указывает на то что данная шина -
    радиальная.
  </p>,
  <p className='pt-2'>
    E. <TextSemibold>15</TextSemibold> - посадочный диаметр шины в дюймах
  </p>,
  <p className='pt-2'>
    F. <TextSemibold>95</TextSemibold> - индекс нагрузки - связан с количеством
    груза, который может выдержать шина.
  </p>,
  <div className='pt-2'>
    <p className='pb-2'>
      G. <TextSemibold>Уровень скорости</TextSemibold> - индекс, показывающий
      максимальную скорость, которую данные шины могут выдержать на протяжении
      длительного времени.
    </p>
    <Table tbodyRows={speedIndexTableData.tBody} className='my-4' />
  </div>,
  <p className='pt-2'>
    H. <TextSemibold>TIN (Tire Identification Number)</TextSemibold> -
    показывает, что шина соответствует всем стандартам. По данному номеру можно
    вычислить, где и когда была сделана шина.
  </p>,
  <p className='pt-2'>
    I. <TextSemibold>M+S или M/S</TextSemibold> - грязь и снег <br></br>
    <TextSemibold>AT - All Terrain</TextSemibold> - любые покрытия <br></br>
    <TextSemibold>AS - All Season</TextSemibold> - любый сезон
  </p>,
  <p className='pt-2'>
    J. <TextSemibold>Материал каркаса, его композиция</TextSemibold> -
    характеристика материала и слоев корда.
  </p>,
  <p className='pt-2'>
    K. <TextSemibold>Максимальная нагрузка</TextSemibold> - Максимальное
    количество килограмм, которое может выдержать шина.
  </p>,
  <p className='pt-2'>L. Показатели качества, описанные выше.</p>,
  <p className='pt-2'>
    M. Максимально допустимое давление. Как правило выше рекомендованного.{' '}
  </p>,
];

const WheelsAndTires = () => {
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
        <H2>Колеса и шины</H2>
        <p className='pt-2'>
          <TextSemibold>Колеса</TextSemibold> принимают крутящий момент от
          двигателя, и за счет сил сцепления с дорогой обеспечивают движение
          автомобиля. Также, колеса воспринимают и сглаживают удары и толчки от
          неровностей дороги. <br></br>
          От шин заисият возможность разгона и торможения, управляемость и
          устойчивость, плавность хода и безопасность автомобиля.
        </p>
      </div>
      <div className='block'>
        <H3>Состоит из:</H3>
        <OrderedList listItems={wheelsAndTiresParts} />
        <p className='pt-2'>
          Для <TextSemibold>шин с камерой</TextSemibold> подходят любые диски.
          Если же шина <TextSemibold>бескамерная</TextSemibold>, то для нее
          нужны специальные диски с уплотнителем на ободе.
        </p>
      </div>
      <div className='block'>
        <H3>Покрышка состоит из:</H3>
        <OrderedList listItems={tireParts} />
        <p className='pt-2'>
          Рисунок протектора может быть <TextSemibold>дорожным</TextSemibold>,
          <TextSemibold>универсальным</TextSemibold> и{' '}
          <TextSemibold>специальным</TextSemibold>, в зависимости от условий
          эксплуатации автомобиля. <br></br>
          Рисунок протектора обеспечивает безопасность автомобиля и других
          участников дорожного движения. <br></br>
          Зимние покрышки имеют направленный рисунок протектора, то есть они
          должны вращаться только в определенном направлении и подходят либо
          только для левой стороны, либо только для правой.
        </p>
      </div>
      <div className='block'>
        <H3>Расположение нитей корда</H3>
        <OrderedList listItems={tireParts} />
        <p className='pt-2'>
          Шины бывают с <TextSemibold>диагональным</TextSemibold> и{' '}
          <TextSemibold>радиальным</TextSemibold> расположением нитей корда.
        </p>
        <p className='pt-2'>
          <TextSemibold>В диагональных шинах</TextSemibold> нити корда соединяют
          боковины покрышки по диагонали.
        </p>
        <p className='pt-2'>
          <TextSemibold>А радиальных шинах</TextSemibold> нити корда расположены
          почти под прямым углом по отношению к бортам.
        </p>
        <p className='pt-2'>
          Радиальные шины имеют лучшее сцепление с дорогой, малое сопротивление
          качению. Они более эластичны, чем диагональные, из-за чего поездка
          может быть более комфортной. Однако они менее прочные в боковинах.
        </p>
      </div>
      <div className='block'>
        <H3>Маркировка шин</H3>
      </div>
      <div className='block'>
        <H4 className='pt-4'>Качество шин</H4>
        <p>
          Маркировка, характеризующее качество, может быть найдена на боковой
          поверхности шины. <br></br>
          Она может иметь следующую форму:{' '}
          <TextSemibold>Treadwear 200 Traction AA Temperature A</TextSemibold>.
          <br></br>
          Данные характеристики не применимы к зимним шинам.
        </p>
        <OrderedList listItems={tiresQuality} />
      </div>
      <div className='block'>
        <div className='columns'>
          <div className='column'>
            <H4 className='pt-4'>Общие характеристики шин</H4>
            <p>
              Эти характеристики служат для описания различных элементов шин.
              Маркировка также может быть найдена на боковой поверхности.
              <br></br>
              Буква <TextSemibold>P</TextSemibold> перед основной маркировкой
              может отсутствовать (зависит от страны изготовителя). <br></br>
              Она говорит о том, что данная шина предназначена для легковых
              автомобилей.
            </p>
          </div>
          <div className='column'>
            <figure className='image'>
              <img src={tireInfo} alt=''></img>
            </figure>
          </div>
        </div>
        <UnorderedList listItems={tiresData} />
      </div>
      <div className='block'>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
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

export default WheelsAndTires;
