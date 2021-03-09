import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import OrderedList from '../../common/UI/OrderedList';
import UnorderedList from '../../common/UI/UnorderedList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

// images
import panel from '../../assets/img/lights/panel.jpg';
import autolamps from '../../assets/img/lights/autolamps.jpg';
import dimmer from '../../assets/img/lights/dimmer.jpg';
import fog from '../../assets/img/lights/fog.jpg';
import interior from '../../assets/img/lights/interior.jpg';

const swiperConfig = {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    990: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
  // centeredSlides: true,
  observer: true,
};

const lightningSystemParts = [
  'Фары',
  'Задние фонари',
  'Лампы освещения номерного знака',
  'Лампы освещения салона',
  'Лампа освещеняи подкапотного пространства',
  'Лампа освещения багажника',
  'Парковочные фонари',
];

const signalingSystemParts = [
  'Передние и задние указатели поворотов',
  'Бортовые повторители указателей поворотов',
  'Лампы стоп-сигналов',
  'Лампы включения заднего хода',
  'Звуковой сигнал',
];

const lightsPanel = [
  'A. Лампы выключены',
  'В. Парковочные фонари, лампы заднего хода, лампы освещения номерного знака, панельные лампы',
  'С. Передние фонари',
];

const interiorLamps = ['A. Включение левой лампы', 'B. Включение правой лампы'];

const controls = [
  {
    name: 'Панель',
    description: <UnorderedList listItems={lightsPanel} />,
    img: panel,
  },
  {
    name: 'Автоматическое освещение',
    description:
      'Autolamps режим. Фонари переднего света включаются при низком освещении или при включении уборников.',
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

const Lights = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>Система освещения</H3>
        <p>
          <TextSemibold>Приборы освещения</TextSemibold> это потребители тока,
          которые включаются из салона автомобиля. <br></br>
          Они нужны в условиях{' '}
          <TextSemibold>недостаточной видимости</TextSemibold>, в темное время
          суток.
        </p>
      </div>
      <div className='block'>
        <H4>Система включает в себя:</H4>
        <OrderedList listItems={lightningSystemParts} />
      </div>

      <div className='block'>
        <H4>Элементы системы</H4>
        <Swiper {...swiperConfig}>
          {controls.map((control, index) => (
            <SwiperSlide key={index}>
              <div className='card'>
                <div className='card-image is-flex is-justify-content-center'>
                  <figure className='image'>
                    <img src={control.img} alt=''></img>
                  </figure>
                </div>
                <header className='card-header'>
                  <p className='card-header-title'>{control.name}</p>
                </header>
                <div className='card-content'>
                  <div className='content'>{control.description}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='block'>
        <H4>Образование конденсата на внешних световых приборах</H4>
        <p className='pt-2'>
          При низких температурах при попадании влажного воздуха во внешние
          световые приборы возможно образование конденсата. <br></br>
          Этот конденсат автоматически уйдет в процессе эксплуатации автомобиля.
          Однако, стоит иметь ввиду, что для полной очистки от конденсата может
          потребоваться до 48 часов.
        </p>
      </div>

      <div className='block'>
        <H3>Система сигнализации</H3>
        <p>
          Служит для информацирования других участников дорожного движения обо
          всех изменениях направления движения автомобиля, его торможении и
          остановках, а также для предупреждения об опасности.
        </p>
      </div>
      <div className='block'>
        <H4>Система сигнализации включает:</H4>
        <OrderedList listItems={signalingSystemParts} />
      </div>
    </React.Fragment>
  );
};

export default Lights;
