import fogLightIndicator from '../../../assets/img/icons/fog-light-indicator.jpg';
import lowBeam from '../../../assets/img/icons/car-dashboard-symbols-low-beam-indicator-light-150x150.png';
import hightBeam from '../../../assets/img/icons/car-dashboard-symbols-high-beam-light-indicator-150x150.png';
import fogFront from '../../../assets/img/icons/fog-front.png';

const lightningSymbols = [
  {
    name: 'Задние противотуманные фонари',
    description: 'Загорается при включении задних противотуманных фонарей.',
    img: fogLightIndicator,
  },
  {
    name: 'Передние противотуманные фонари',
    description: 'Загорается при включении передних противотуманных фонарей.',
    img: fogFront,
  },
  {
    name: 'Ночные фары ближнего света',
    description: 'Включены ночные фары для ближнего освещения.',
    img: lowBeam,
  },
  {
    name: 'Ночные фары дальнего света',
    description: 'Включены ночные фары для дальнего света.',
    img: hightBeam,
  },
];

export default lightningSymbols;
