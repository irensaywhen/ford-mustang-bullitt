import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import UnorderedList from '../../common/UI/UnorderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import Table from '../../common/UI/Table';

// Text
import H2 from '../../common/UI/Titles/H3';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

import tireInfo from '../../assets/img/chasis/tire.jpg';

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

const replacementWarnings = [
  {
    description:
      'При замене шин использовать только шины с такими же характеристиками (как на маркировке). Использование неправильных шин может повлиять на точность системы мониторинга давления.',
  },
  {
    description:
      'Рекомендуется заменять шины одновременно на двух передних колесах, или на двух задних колесах.',
  },
  {
    description:
      'Рекомендуется заменять шины одновременно на двух передних колесах, или на двух задних колесах.',
  },
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
        title='Tires and wheels'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/SNCroT0v8cE'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    ));

    modalContext.showModal();
  };

  // Tires replacement warnings
  const remplacementWarningsList = replacementWarnings.map((warning, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-exclamation-triangle'></i>}
      iconWrapperClasses={['is-size-1', 'is-1', 'has-text-warning']}
    >
      <p>{warning.description}</p>
    </BulletpointWithIcon>
  ));

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
        <p className='pt-2'>
          Резина - <TextSemibold>летняя</TextSemibold>. <br></br>
          Маркировка передних шин: <TextSemibold>P255/40R 19</TextSemibold>
          <br></br>
          Маркировка задних шин: <TextSemibold>P275/40R 19</TextSemibold>
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
        <PrimaryButton onClick={openModal}>
          Узнать подробнее об общем устройстве шин
        </PrimaryButton>
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
        <H3>Замена шин</H3>
        <div className='block'>{remplacementWarningsList}</div>
      </div>

      <div className='block'>
        <H3>Летняя резина</H3>
        <p className='pt-2'>
          Летняя резина предоставляет улучшенное сцепление с дорогой на мокром и
          сухом покрытиях и не имеет <TextSemibold>M + S</TextSemibold>{' '}
          маркировки на боковой поверхности.<br></br>
          Не рекомендуется использовать летнюю резину, когда температура
          опускается ниже <TextSemibold>7 градусов цельсия</TextSemibold> или на
          снегу со льдом.
        </p>
        <p className='pt-2'>
          Хранить летнюю резину нужно в помещении при температуре выше{' '}
          <TextSemibold>-7 градусов</TextSemibold>. Материалы, используемые в
          летней резине теряют эластичность бли более низких температурах, что
          может приводить к возникновению трещин. <br></br>
          Если летняя резина была подвержена более низким температурам, ее нужно
          прогревать при минимальной температуре{' '}
          <TextSemibold>5 градусов</TextSemibold> на протяжении 24 часов перед
          установкой.
        </p>
        <p className='pt-2'>
          Нельзя хранить резину рядом с обогревателями помещений или направлять
          горячий воздух на нее. <br></br> Если шина хранилась перед установкой,
          ее необходимо проверить на предмет дефектов.
        </p>
      </div>
      <div className='block'>
        <H3>Зимняя резина</H3>
        <p className='pt-2'>
          Можно использовать как универсальную, так и зимнюю резину. При этом
          характеристики должны совпадать с изначально представленными. Хранить
          зимнюю резину рекомендуется при температуре{' '}
          <TextSemibold>10 - 25 градусов</TextSemibold> в сухом затемненном
          помещении.
        </p>
      </div>

      <div className='block'>
        <H3>Поломки на дорогах</H3>
        <p className='pt-2'>
          Независимо от аккуратности вождения, прокол шины может случиться
          всегда. <br></br>В случае прокола шины на дороге, необходимо уехать с
          оживленного движения в безопасное место. Это может сильнее повредить
          шину, но наша безопасность важнее. <br></br>
          Если почувствовалась внезапная вибрация во время поездки, необходимо
          немедленно снизить скорость и выехать с дороги. <br></br>
          После выезда с дороги необходимо осмотреть шины на предмет прокола и,
          в случае наличия такого, заменить шину.
        </p>
      </div>

      <div className='block pt-4'>
        <Accordion items={definitions}></Accordion>
      </div>
    </React.Fragment>
  );
};

export default WheelsAndTires;
