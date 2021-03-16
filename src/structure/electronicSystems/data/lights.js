import UnorderedList from '../../../common/UI/UnorderedList';

// images
import panel from '../../../assets/img/lights/panel.jpg';
import autolamps from '../../../assets/img/lights/autolamps.jpg';
import dimmer from '../../../assets/img/lights/dimmer.jpg';
import fog from '../../../assets/img/lights/fog.jpg';
import interior from '../../../assets/img/lights/interior.jpg';

export const lightningSystemParts = [
  'Фары ближнего света',
  'Фары дальнего света',
  'Дневные ходовые огни',
  'Передние противотуманные фонари',
  'Лампы освещения номерного знака',
  'Лампы освещения салона',
  'Лампа освещеняи подкапотного пространства',
  'Лампа освещения багажника',
];

export const signalingSystemParts = [
  'Передние и задние указатели поворотов',
  'Бортовые повторители указателей поворотов',
  'Лампы стоп-сигналов',
  'Лампы включения заднего хода',
  'Звуковой сигнал',
];

const lightsPanel = [
  'A. Лампы выключены',
  'В. Парковочные фонари, лампы заднего хода, лампы освещения номерного знака, панельные лампы',
  'С. Передние фары ближнего света',
];

const interiorLamps = ['A. Включение левой лампы', 'B. Включение правой лампы'];

export const controls = [
  {
    name: 'Панель',
    description: <UnorderedList listItems={lightsPanel} />,
    img: panel,
  },
  {
    name: 'Режим Autolamps',
    description:
      'Фары ближнего света включаются в условиях недостаточной видимости или при включении уборников.',
    img: autolamps,
  },
  {
    name: 'Регулировка яркости',
    description:
      'Можно изменять частыми нажатиями или задержанием в зажатом состоянии.',
    img: dimmer,
  },
  {
    name: 'Передние противотуманные фонари',
    description: 'Нажать для включения или выключения.',
    img: fog,
  },
  {
    name: 'Освещение салона автомобиля',
    description: (
      <div>
        <p>
          Включаются при открытии двери, а также нажатии на одну из кнопок
          включения ламп
        </p>
        <UnorderedList listItems={interiorLamps} />
      </div>
    ),
    img: interior,
  },
];
