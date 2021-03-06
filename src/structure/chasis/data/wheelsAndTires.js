import TextSemibold from '../../../common/UI/Text/TextSemibold';
import Table from '../../../common/UI/Table';

export const speedIndexTableData = {
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

export const definitions = [
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

export const wheelsAndTiresParts = ['Диска  ободом', 'Шины'];

export const tireParts = ['Каркаса', 'Протектора', 'Боковин', 'Бортов'];

export const replacementWarnings = [
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

export const tiresQuality = [
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

export const tiresData = [
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
