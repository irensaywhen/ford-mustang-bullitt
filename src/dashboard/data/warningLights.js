import OrderedList from '../../common/UI/OrderedList';

// Critical warning lights icons
import batteryWarning from '../../assets/img/icons/dacia-duster-battery-warning-light.gif';
import oilPressure from '../../assets/img/icons/dacia-duster-oil-pressure-warning-light.gif';
import overHeating from '../../assets/img/icons/dacia-duster-coolant-warning-light.gif';
import airbag from '../../assets/img/icons/dacia-duster-airbag-warning-light.gif';
import brake from '../../assets/img/icons/brake.png';
import seatbelt from '../../assets/img/icons/seatbelt.png';

// non critical warning icons
import abs from '../../assets/img/icons/dacia-duster-abs-warning-light.gif';
import handbrake from '../../assets/img/icons/dacia-duster-brake-warning-light.gif';
import lowFuel from '../../assets/img/icons/dacia-duster-low-fuel-warning-light.gif';
import exhaustGas from '../../assets/img/icons/dacia-duster-exhaust-gas-warning-light.gif';
import esp from '../../assets/img/icons/dacia-duster-esp-warning-light.gif';
import directionSymbols from '../../assets/img/icons/car-dashboard-symbols-direction-signal-indicators.png';
import cruiseControl from '../../assets/img/icons/Cruise_control.png';
import tyrePressure from '../../assets/img/icons/dacia-duster-tyre-loss-warning-light.gif';
import doorOpen from '../../assets/img/icons/Door_open.png';
import tractionControlOff from '../../assets/img/icons/stability-control-off.jpg';
import hoodAjar from '../../assets/img/icons/hood-ajar.png';
import washFluid from '../../assets/img/icons/washFluid.png';
import lowBeamMalfunction from '../../assets/img/icons/lowBeamMalfunction.png';
import trunkAjar from '../../assets/img/icons/trunkAjar.png';

// lights icons
import hightBeam from '../../assets/img/icons/car-dashboard-symbols-high-beam-light-indicator-150x150.png';
import fogFront from '../../assets/img/icons/fog-front.png';
import parkingLights from '../../assets/img/icons/parking-lights.png';

const brakeLampFunctionsList = [
  'Включен стояночный тормоз при включенном двигателе',
  'Двигатель имеет поломку тормозной системы или низкий уровень тормозной жидкости',
];

export const criticalWarnings = {
  metaData: {
    title: 'Индикаторы серьезных поломок',
    description:
      'Данные индикаторы могут свидетельствовать о серьезных неисправностях и требуют немедленного внимания со стороны водителя, а также скорейшей починки. Следует обратиться к авторизованному диллеру.',
  },
  list: [
    {
      name: 'Подушка безопасности',
      description:
        'Если не загорается при включении двигателя, продолжает мигать или светится во время движения, говорит о поломке, которая может привести к несрабатыванию подушек безопасности при аварии.',
      img: airbag,
    },
    {
      name: 'Заряд аккумулятора',
      description:
        'Кратковременно загорается при зажигании. Если горит во время движения, необходимо выключить все лишнее электрическое оборудование.',
      img: batteryWarning,
    },
    {
      name: 'Неисправность тормозной системы',
      description: (
        <div>
          Эта лампа загорается в двух ситуациях:{' '}
          <OrderedList className='pt-2' listItems={brakeLampFunctionsList} />{' '}
          Движение опасно, если лампа горит при выключенном стояночном тормозе.
        </div>
      ),
      img: brake,
    },
    {
      name: 'Температура охлаждающей жидкости',
      description:
        'Если загорается во время движения, значит двигатель перегревается. Необходимо остановиться к безопасном месте, чтобы дать двигателю остыть.',
      img: overHeating,
    },
    {
      name: 'Низкое давление масла',
      description:
        'Кратковременно загорается при включении двигателя. Если горит во время движения, необходимо остановиться, выключить двигатель и проверить уровень масла. Если уровень масла достаточный, означает поломку в двигателе.',
      img: oilPressure,
    },
    {
      name: 'Система выброса газов',
      description:
        'Загорается до началы работы двигателя при заведении автомобиля и выключается автоматически. Если вместо выключения мигает 8 раз, значит двигатель не готов к тех. осмотру. Горящий во время движения индикатор говорит о поломке в системе выброса газов. Повышенное количество выхлопных газов может повредить катализатор и привести к возгоранию.',
      img: exhaustGas,
    },
  ],
};

export const nonCriticalWanings = {
  metaData: {
    title: 'Индикаторы общего назначения',
    description:
      'Индикаторы, которые несут информационную функцию. Могут указывать на поломки в определенных ситуациях в зависимости от индикатора.',
  },
  list: [
    {
      name: 'Круиз контроль',
      description: 'Загорается при включении режима круиз контроля.',
      img: cruiseControl,
    },
    {
      name: 'Поворотники',
      description: 'Загораются при подаче сигнала поворота.',
      img: directionSymbols,
    },
    {
      name: 'Открытая дверь',
      description: 'Загорается если есть не закрытая дверь.',
      img: doorOpen,
    },
    {
      name: 'Ремни безопасности',
      description:
        'Загорается, когда впереди сидящие пассажиры не пристегнуты. Индикатор сопровождается звуковым сигналом.',
      img: seatbelt,
    },
    {
      name: 'Открытый капот',
      description: 'Загорается при открытом капоте во время работы двигателя.',
      img: hoodAjar,
    },
    {
      name: 'Фары ближнего света',
      description: 'Есть неисправности, связанные с фарами ближнего света',
      img: lowBeamMalfunction,
    },
    {
      name: 'Стеклоочиститель',
      description:
        'Загорается, когда зафиксирован низкий уровень стеклоочистителя.',
      img: washFluid,
    },
    {
      name: 'Неисправность ABS',
      description:
        'Кратковременно загорается при заведении машины. Если горит во время движение, есть неисправность в системе ABS. Обычные тормоза при этом продолжают работать.',
      img: abs,
    },
    {
      name: 'Тормоз',
      description:
        'Загорается при использовании ручного тормоза или недостатке тормозной жидкости.',
      img: handbrake,
    },
    {
      name: 'Подушка безопасности',
      description:
        'Загорается при зажигании. Отсутствие индикатора при зажигании и(или) мигание при движении может свидетельствовать о проблемах с подушкой безопасности. Может не сработать при аварии.',
      img: airbag,
    },
    {
      name: 'Низкий уровень топлива',
      description:
        'Говорит о необходимости заправить топливо как можно скорее.',
      img: lowFuel,
    },
    {
      name: 'Низкое давление в колесах',
      description:
        'Загорается при включении двигателя. Горит при движении в случае, если в колесе зафиксировано пониженное давление воздуха. Есть неисправность в системе в случае мигания индикатора.',
      img: tyrePressure,
    },
    {
      name:
        'Система стабилизации курсовой устойчивости и противобуксовочная система',
      description:
        'Мигает во время работы систем. Если не загорается во время заведения автомобиля или горит во время движения, говорит о неисправности.',
      img: esp,
    },
    {
      name:
        'Система стабилизации курсовой устойчивости и противобуксовочная система отключены',
      description: 'Загорается, когда одна из систем отключается.',
      img: tractionControlOff,
    },
    {
      name: 'Открытый багажник',
      description:
        'Загорается, когда машина заведена, но багажник закрыт не до конца или открыт.',
      img: trunkAjar,
    },
  ],
};

export const lightsIndicators = {
  metaData: {
    title: 'Индикаторы световых приборов',
    description: 'Загораются, когда работают соответствующие световые приборы.',
  },
  list: [
    {
      name: 'Передние противотуманные фары',
      description: 'Загорается при включении передних противотуманных фонарей.',
      img: fogFront,
    },
    {
      name: 'Фары дальнего света',
      description:
        'Загорается при включении фар дальнего света. Мигает при мигании фарами.',
      img: hightBeam,
    },
    {
      name: 'Габаритные огни',
      description: 'Включается, когда работают габаритные огни.',
      img: parkingLights,
    },
  ],
};
