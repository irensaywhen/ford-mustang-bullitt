// Critical warning lights icons
import batteryWarning from '../../../assets/img/icons/dacia-duster-battery-warning-light.gif';
import oilPressure from '../../../assets/img/icons/dacia-duster-oil-pressure-warning-light.gif';
import overHeating from '../../../assets/img/icons/dacia-duster-coolant-warning-light.gif';
import stop from '../../../assets/img/icons/dacia-duster-stop-warning-light.gif';
import redFault from '../../../assets/img/icons/dacia-duster-electric-warning-light.gif';
import brakeCircuit from '../../../assets/img/icons/dacia-duster-brake-circuit-warning-light-1.gif';

const criticalWarnings = [
  {
    name: 'Экстренная остановка',
    description:
      'Присутствует серьезная поломка в электронных системах, которая может угрожать безопасности пассажиров. Необходима остановка.',
    img: redFault,
  },
  {
    name: 'Заряд аккумулятора',
    description:
      'Кратковременно загорается при зажигании, после запуска двигателя должен погаснуть. Если горит постоянно, аккумулятор перестал заряжаться, и машина едет на остатках заряда.',
    img: batteryWarning,
  },
  {
    name: 'Низкое давление масла',
    description:
      'Загорается при недостатке давления масел. Означает, что не все части мотора смазываются. Есть риск значительных повреждений внутренних деталей.',
    img: oilPressure,
  },
  {
    name: 'Перегрев двигателя',
    description: 'Загорается, когда температура двигателя превышает норму.',
    img: overHeating,
  },
  {
    name: 'Необходима остановка',
    description:
      'Загорается вместе с другими индикаторами. Показывает необходимость в экстренной остановке в силу неисправности.',
    img: stop,
  },
  {
    name: 'Поломка тормозной системы',
    description:
      'Загорание двух индикаторов одновременно свидетельствует о поломке тормозной системы.',
    img: brakeCircuit,
  },
];

export default criticalWarnings;
