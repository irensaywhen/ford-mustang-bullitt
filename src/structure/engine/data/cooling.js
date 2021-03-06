export const faults = [
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

export const definitions = [
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

export const coolingSystemParts = [
  'Рубашки охлаждения',
  'Центробежного насоса',
  'Термостата',
  'Радиатора с расширительым бачком',
  'Соединительныъх патрубков и шлангов',
  'Отопитель салона',
];

export const coolantComparisonData = [
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

export const warnings = [
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

export const mantainanceTips = [
  'Контролировать уровень охлаждающей жидкости.',
  'Если есть необходимость подливать больше литра охлаждающей жидкости в месяц, возможно, имеются серьезные потери жидкости.',
  'Охлаждающая жидкость может поменять цвет с оранжевой на розовую или красную. Если жидкость однородная, смена цвета допустима.',
  'В крайнем случае можно долить воду и доехать до сервиса.',
  'Не допускать перегрева двигателя.',
  'У жидкости есть срок службы. Ее необходимо менять.',
];
