import directionSymbols from '../../../assets/img/icons/car-dashboard-symbols-direction-signal-indicators.png';
import eco from '../../../assets/img/icons/dacia-duster-eco-mode-warning-light.gif';
import speedLimiter from '../../../assets/img/icons/Speed_limiter.png';
import cruiseControl from '../../../assets/img/icons/Cruise_control.png';
import doorOpen from '../../../assets/img/icons/Door_open.png';

const commonSymbols = [
  {
    name: 'Включены поворотники',
    description: 'Загораются при включении сигнала поворотников.',
    img: directionSymbols,
  },
  {
    name: 'Эко режим',
    description:
      'Эко режим позволяет экономить топливо. Загорается когда система экономии активна. Можно выключить вручную.',
    img: eco,
  },
  {
    name: 'Режим ограничения скорости',
    description:
      'Загорается при включении режима автоматического ограничения скорости, при котором скорость будет ограничиваться выставленным значением.',
    img: speedLimiter,
  },
  {
    name: 'Круиз контроль',
    description:
      'Загорается при включении режима круиз контроль, который позволяет сохранять выставленную скорость.',
    img: cruiseControl,
  },
  {
    name: 'Открытая дверь',
    description: 'Загорается если есть не закрытая дверь.',
    img: doorOpen,
  },
];

export default commonSymbols;
