// Tab components
import FuelSystem from '../FuelSystem';
import Fuel from '../Fuel';
import Emission from '../Emission';
import OBDSystem from '../OBDSystem';
import Ignition from '../Ignition';
import Cooling from '../Cooling';
import Lubrication from '../Lubrication';

export const parts = [
  {
    tabName: 'Система питания',
    tabLink: 'fuel-system',
    Component: FuelSystem,
  },
  {
    tabName: 'Топливо',
    tabLink: 'fuel',
    Component: Fuel,
  },
  {
    tabName: 'Выброс отработанного топлива',
    tabLink: 'emission',
    Component: Emission,
  },
  {
    tabName: 'OBD-II',
    tabLink: '/obd-system',
    Component: OBDSystem,
  },
  {
    tabName: 'Система зажигания',
    tabLink: '/ignition',
    Component: Ignition,
  },
  {
    tabName: 'Система охлаждения',
    tabLink: '/cooling',
    Component: Cooling,
  },
  {
    tabName: 'Система смазки',
    tabLink: '/lubrication',
    Component: Lubrication,
  },
];

export const fuelEfficiencyAutonomy = {
  thead: ['Характеристика', 'Значение'],
  tbody: [
    ['Город', '16.4 л/100 км'],
    ['Магистраль', '10.2 л/100 км'],
    ['Комбинированный', '13.6 л/100 км'],
    ['Запас хода', '588 км'],
    [
      <span>
        Выброс CO<sub>2</sub>
      </span>,
      '319 г/км',
    ],
  ],
};

export const basicCharacteristics = {
  thead: ['Характеристика', 'Значение'],
  tbody: [
    ['Сила', '480 лошадиных сил, 7,000 об/мин (358 кВт)'],
    ['Крутящий момент', '569 H/м, 4,600 об/мин'],
    ['Зажигание', 'Атмосферное'],
    ['Тип топлива', 'Газ'],
  ],
};

export const capacitiesAndSpecifications = {
  thead: ['Характеристика', 'Емкость'],
  tbody: [
    ['Охлаждающая жидкость', '12.88л'],
    ['Масло', '9.5л'],
    ['Топливный бак', '60.6л'],
  ],
};

export const motocraftParts = {
  thead: ['Часть', 'Спецификация'],
  tbody: [
    ['Воздушный фильтр', 'FA-1922'],
    ['Масляный фильтр', 'FL-500-S'],
    ['Свечи зажигания', 'SP-548'],
  ],
};

export const engineSpecification = {
  thead: ['Показатель', 'Спецификация'],
  tbody: [
    ['Объем', '5л'],
    ['Порядок зажигания цилиндров', '1-5-4-8-6-3-7-2'],
    ['Система зажигания', 'Coil on plug'],
    ['Зазор в свечи', '1.25мм - 1.35мм'],
    ['Степень сжатия', '12:1'],
  ],
};

export const specifications = [
  {
    tableTitle: 'Основные характеристики',
    tableData: basicCharacteristics,
  },
  {
    tableTitle: 'Расход топлива',
    tableData: fuelEfficiencyAutonomy,
  },
  {
    tableTitle: 'Объемы',
    tableData: capacitiesAndSpecifications,
  },
  {
    tableTitle: 'Части двигателя',
    tableData: motocraftParts,
  },
  {
    tableTitle: 'Спецификация двигателя',
    tableData: engineSpecification,
  },
];

export const underTheHoodData = [
  'В. Заливная горловина контейнера с маслом',
  'С. Место для проверки масла',
  'E. Воздушный фильтр',
  'G. Резервуар с охлаждающей жидкостью',
];
