import React from 'react';

import Section from '../common/UI/Section';
import Block from '../common/UI/Wrappers/Block';
import Figure from '../common/UI/Figure/Figure';
import UnorderedList from '../common/UI/UnorderedList';
import OrderedList from '../common/UI/OrderedList';
import NarrowContentWrapper from '../common/UI/Wrappers/NarrowContentWrapper';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../common/UI/Titles/H2';
import H3 from '../common/UI/Titles/H3';
import H4 from '../common/UI/Titles/H4';

import classes from '../assets/scss/pages/heroes.module.scss';
import gaugesPanel from '../assets/img/gauges/gauges.jpg';
import {
  gaugesPtOne,
  gaugesPtTwo,
  gaugeModeInfo,
  tripInfo,
} from './data/gauges';

const MainGauges = () => {
  console.log('Rendering main gauges');
  return (
    <>
      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.HeroImage,
          classes.GaugesImage,
        ].join(' ')}
      >
        <Block>
          <HeroTitle>Приборная панель</HeroTitle>
        </Block>
        <Block>
          <HeroSubtitle>
            Позволяет получить всю необходимую информацию об автомобиле и
            обеспечивает контроль за его системами.
          </HeroSubtitle>
        </Block>
      </Hero>
      <Section>
        <Block className='is-flex is-justify-content-center'>
          <Figure img={{ src: gaugesPanel }} />
        </Block>
        <Block>
          <H2 className='has-text-centered'>
            Описание элементов приборной панели
          </H2>
          <NarrowContentWrapper>
            <div className='columns is-justify-content-center'>
              <div className='column is-narrow'>
                <UnorderedList listItems={gaugesPtOne} />
              </div>
              <div className='column is-narrow'>
                <UnorderedList listItems={gaugesPtTwo} />
              </div>
            </div>
          </NarrowContentWrapper>
        </Block>
        <Block>
          <H3 className='has-text-centered'>Информационный дисплей</H3>
          <NarrowContentWrapper>
            <Block>
              <H4>Одометр</H4>
              <p>
                Показывает суммарный пробег машины. Расположен снизу
                информационного дисплея.
              </p>
            </Block>
            <Block>
              <H4>Бортовой компьютер и настройки автомобиля</H4>
              <p>
                Позволяют получить информацию об автомобиле, поездке и
                персонализировать большое количество преднастроенных функций.
              </p>
            </Block>
            <Block>
              <H4>Информация об автомобиле:</H4>
              <OrderedList listItems={gaugeModeInfo} />
            </Block>
            <Block>
              <H4>Информация о поездке:</H4>
              <OrderedList listItems={tripInfo} />
            </Block>
          </NarrowContentWrapper>
        </Block>
        <Block>
          <H3 className='has-text-centered'>Топливо</H3>
          <NarrowContentWrapper>
            <p>
              Показывает, сколько топлива осталось в баке. Стрелка указывает, с
              какой стороны автомобиля находится окно для заправки топливом.
            </p>
          </NarrowContentWrapper>
        </Block>
        <Block>
          <H3 className='has-text-centered'>
            Температура охлаждающей жидкости
          </H3>
          <NarrowContentWrapper>
            <p>
              Показывает температуру охлаждающей жидкости в двигателе. Если
              температура превышает нормальный разброс (60-80 градусов),
              необходимо остановиться и дать двигателю остыть.
            </p>
          </NarrowContentWrapper>
        </Block>
      </Section>
    </>
  );
};

export default MainGauges;
