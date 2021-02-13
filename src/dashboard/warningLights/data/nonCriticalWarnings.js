// Non-critial warning lights icons
import orangeElectric from '../../../assets/img/icons/dacia-duster-electric-orange-warning-light.gif';
import abs from '../../../assets/img/icons/dacia-duster-abs-warning-light.gif';
import handbrake from '../../../assets/img/icons/dacia-duster-brake-warning-light.gif';
import dieselPreHeat from '../../../assets/img/icons/dacia-duster-glow-plug-warning-light.gif';
import airbag from '../../../assets/img/icons/dacia-duster-airbag-warning-light.gif';
import lowFuel from '../../../assets/img/icons/dacia-duster-low-fuel-warning-light.gif';
import exhaustGas from '../../../assets/img/icons/dacia-duster-exhaust-gas-warning-light.gif';
import dieselFilter from '../../../assets/img/icons/dacia-duster-water-in-diesel-warning-light.gif';
import esp from '../../../assets/img/icons/dacia-duster-esp-warning-light.gif';
import tyrePressure from '../../../assets/img/icons/dacia-duster-tyre-loss-warning-light.gif';
import tractionControlOff from '../../../assets/img/icons/stability-control-off.jpg';

const nonCriticalWaningLights = [
  {
    name: 'Электроника',
    description:
      'Загорается одновременно с другими индикаторами на панели. Говорит о неисправности электронной системы',
    img: orangeElectric,
  },
  {
    name: 'Неисправность ABS',
    description:
      'Кратковременно загорается при заведении машины. Если не загорается, или загорается при движении, есть неисправность в ABS(Antilock Brake System).',
    img: abs,
  },
  {
    name: 'Тормоз',
    description:
      'Загорается при использовании ручного тормоза или недостатке тормозной жидкости.',
    img: handbrake,
  },
  {
    name: 'Прогрев дизеля',
    description:
      'Загорается при зажигании на дизельных версиях машины. В случае горения при движении или отсутствия при зажигании говорит о поломках.',
    img: dieselPreHeat,
  },
  {
    name: 'Подушка безопасности',
    description:
      'Загорается при зажигании. Отсутствие индикатора при зажигании и(или) мигание при движении может свидетельствовать о проблемах с подушкой безопасности. Может не сработать при аварии.',
    img: airbag,
  },
  {
    name: 'Мало топлива',
    description:
      'Загорается когда топлива остается меньше чем на ~50км движения.',
    img: lowFuel,
  },
  {
    name: 'Выхлопные газы',
    description:
      'Может гореть постоянно или мигать. Постоянное горение свидетельствует о токсичных выброах. Мигание говорит о необходимости снизить скорость до исчезнования индикатора.',
    img: exhaustGas,
  },
  {
    name: 'Дизельный фильтр',
    description:
      'Необходимо отвести воду из дизельного фильтра в силу его заполненности.',
    img: dieselFilter,
  },

  {
    name: 'Система контроля тяги',
    description:
      'Система предназначенная для предотвращения потери сцепления колёс с дорогой. Мигающий индикатор говорит о том что система работает над стабилизацией машины. Постоянно горящий индикатор говори о неисправности в системе.',
    img: esp,
  },
  {
    name: 'Система контроля тяги отключена',
    description: 'Загорается при отключении системы контроля тяги.',
    img: tractionControlOff,
  },
  {
    name: 'Давление в колесах',
    description:
      'Загорается когда в колесе зафиксировано пониженное давление воздуха.',
    img: tyrePressure,
  },
];

export default nonCriticalWaningLights;
