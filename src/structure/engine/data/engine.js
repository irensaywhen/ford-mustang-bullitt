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

export const fielEfficiencyAutonomy = {
  tBody: [
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
  tBody: [
    ['Двигатель', '5,0 l V8'],
    ['Сила', '480 лошадиных сил, 7,000 об/мин (358 кВт)'],
    ['Крутящий момент', '569 H/м, 4,600 об/мин'],
    ['Зажигание', 'Атмосферное'],
    ['Тип топлива', '16.4 л/100 км'],
    ['Город', '16.4 л/100 км'],
    ['Город', '16.4 л/100 км'],
  ],
};
