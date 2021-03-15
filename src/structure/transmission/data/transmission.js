import Clutch from '../Clutch';
import Gearbox from '../Gearbox';
import CardanJoint from '../CardanJoint';
import Differential from '../Differential';

export const parts = [
  {
    tabName: 'Сцепление',
    tabLink: 'clutch',
    Component: Clutch,
  },
  {
    tabName: 'Коробка Передач',
    tabLink: 'gearbox',
    Component: Gearbox,
  },
  {
    tabName: 'Главная передача и Дифференциал',
    tabLink: 'differential',
    Component: Differential,
  },
  {
    tabName: 'Карданная передача',
    tabLink: 'cardan-joint',
    Component: CardanJoint,
  },
];
