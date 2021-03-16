import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import OrderedList from '../../common/UI/OrderedList';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import {
  lightningSystemParts,
  signalingSystemParts,
  controls,
} from './data/lights';

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

const Lights = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>Система освещения</H3>
        <p>
          <TextSemibold>Приборы освещения</TextSemibold> это потребители тока,
          которые включаются из салона автомобиля. <br></br>
          Они нужны в условиях{' '}
          <TextSemibold>недостаточной видимости</TextSemibold>, в темное время
          суток, при движении автомобиля. <br></br>
          При включении двигателя, дневные ходовые огни включаются
          автоматически. Дальнейшее регулирование нужно проводить в зависимости
          от условий освещения.
        </p>
      </Block>
      <Block>
        <H4>Система включает в себя:</H4>
        <OrderedList listItems={lightningSystemParts} />
      </Block>

      <Block>
        <H4>Элементы системы</H4>
        <Swiper {...swiperConfig}>
          {controls.map((control, index) => (
            <SwiperSlide key={index}>
              <div className='card'>
                <div className='card-image is-flex is-justify-content-center'>
                  <Figure img={{ src: control.img }} />
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
      </Block>

      <Block>
        <H4>Образование конденсата на внешних световых приборах</H4>
        <p>
          При низких температурах при попадании влажного воздуха во внешние
          световые приборы возможно образование конденсата. <br></br>
          Этот конденсат автоматически уйдет в процессе эксплуатации автомобиля.
          Однако, стоит иметь ввиду, что для полной очистки от конденсата может
          потребоваться до 48 часов.
        </p>
      </Block>

      <Block>
        <H3>Система оповещения</H3>
        <p>
          Служит для информацирования других участников дорожного движения обо
          всех изменениях направления движения автомобиля, его торможении и
          остановках, а также для предупреждения об опасности.
        </p>
      </Block>
      <Block>
        <H4>Система оповещения включает:</H4>
        <OrderedList listItems={signalingSystemParts} />
      </Block>
    </React.Fragment>
  );
};

export default Lights;
