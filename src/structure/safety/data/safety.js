// Active safety
import StabilityControl from '../StabilityControl';
import ParkingAids from '../ParkingAids';
import CruiseControl from '../CruiseControl';
import ABS from '../ABS';

// Passive safety
import Seatbelts from '../Seatbelts';
import SupplementaryRestraintSystem from '../SupplementaryRestraintSystem';

export const activeSafetySystem = [
  {
    tabName: 'ESP и ETP',
    tabLink: 'stability-and-traction-control',
    Component: StabilityControl,
  },
  {
    tabName: 'Помощь при парковке',
    tabLink: 'parking-aids',
    Component: ParkingAids,
  },
  {
    tabName: 'Круиз контроль',
    tabLink: 'cruise-control',
    Component: CruiseControl,
  },
  {
    tabName: 'ABS',
    tabLink: 'abs',
    Component: ABS,
  },
];

export const passiveSafetySystem = [
  {
    tabName: 'Ремни безопасности',
    tabLink: 'seatbelts',
    Component: Seatbelts,
  },
  {
    tabName: 'Подушки безопасности',
    tabLink: 'supplementary-restraint-system',
    Component: SupplementaryRestraintSystem,
  },
];
