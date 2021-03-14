export const powerSteeringFeaturs = [
  {
    text:
      'Требует меньше поддержки по сравнению с гидроусилителем, так как все контрлируется электрическими системами.',
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
  {
    text:
      'Рулевое колесо отзывчиво реагирует на малейшие движения, из-за чего управление чувствуется легче, а руль - более поддатливым.',
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
  {
    text:
      'Идеально рассчитывает необходимую для поворота силу в зависимости от скорости автомобиля, угла поворота и скорости вращения рулевого колеса.',
    image: 'https://bulma.io/images/placeholders/128x128.png',
  },
];

export const steeringSystemCards = [
  {
    title: 'Электроусилитель рулевого колеса',
    prosAndCons: [
      {
        type: 'pro',
        description: 'Экономичный расход топлива',
      },
      {
        type: 'pro',
        description: 'Отзывчивое управление',
      },
      {
        type: 'pro',
        description: 'Меньше активной поддержки',
      },
      {
        type: 'pro',
        description:
          'Более точный рассчет прилагаемой силы, особенно к экстримальных условиях.',
      },
      {
        type: 'con',
        description: 'Руль может чувствоваться тяжелее',
      },
      {
        type: 'con',
        description: 'Высокая стоимость починки',
      },
    ],
  },
  {
    title: 'Гидроусилитель рулевого колеса',
    prosAndCons: [
      {
        type: 'pro',
        description: 'Цена и сравнительная простота',
      },
      {
        type: 'pro',
        description: 'Меньшие относительные размеры',
      },
      {
        type: 'pro',
        description: 'Автоматическое смазывание усилительной системы',
      },
      {
        type: 'con',
        description: 'Утечки масла',
      },
      {
        type: 'con',
        description: 'Большие потребления энергии',
      },
      {
        type: 'con',
        description: 'Зависимость параметров жидкости от температуры',
      },
    ],
  },
];
