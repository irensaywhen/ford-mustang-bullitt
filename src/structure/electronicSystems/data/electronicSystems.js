// Tab components
import Battery from '../Battery';
import Generator from '../Generator';
import StartingEngine from '../StartingEngine';
import Lights from '../Lights';
import WipersAndWashers from '../WipersAndWashers';

export const supplyParts = [
  {
    tabName: 'Аккумуляторная батарея',
    tabLink: 'battery',
    Component: Battery,
  },
  {
    tabName: 'Генератор',
    tabLink: 'generator',
    Component: Generator,
  },
];

export const consumersParts = [
  {
    tabName: 'Система пуска двигателя',
    tabLink: 'starting-engine',
    Component: StartingEngine,
  },
  {
    tabName: 'Система освещения и сигнализации',
    tabLink: 'lights',
    Component: Lights,
  },
  {
    tabName: 'Дворники',
    tabLink: 'wipers-and-washers',
    Component: WipersAndWashers,
  },
];

export const fusesTable = {
  thead: ['Обозначение', 'Тип'],
  tBody: [
    ['A', 'Micro 2'],
    ['B', 'Micro 3'],
    ['C', 'Maxi'],
    ['D', 'Mini'],
    ['E', 'M Case'],
    ['J', 'J Case'],
    ['G', 'J Case Low Profile'],
  ],
};
