import React from 'react';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';

import OrderedList from '../common/UI/OrderedList';
import Figure from '../common/UI/Figure/Figure';
import TextEmphasized from '../common/UI/Text/TextEmphasized';
import TextSemibold from '../common/UI/Text/TextSemibold';
import NarrowContentWrapper from '../common/UI/Wrappers/NarrowContentWrapper';
import Block from '../common/UI/Wrappers/Block';
import Section from '../common/UI/Section';
import H2 from '../common/UI/Titles/H2';
import H3 from '../common/UI/Titles/H3';

import classes from '../assets/scss/pages/heroes.module.scss';
import me from '../assets/img/me.jpg';
import resources from './data/resources';

const About = () => {
  return (
    <>
      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.HeroImage,
          classes.HistoryImage,
        ].join(' ')}
      >
        <HeroTitle className='is-1 pb-4'>О проекте</HeroTitle>
      </Hero>
      <Section className='has-text-centered'>
        <H2>Зачем все это?</H2>
        <NarrowContentWrapper>
          <Block>
            <p>
              Данный проект был создан в качестве реферата по устройству
              автомобиля для автошколы{' '}
              <a href='https://debut78.ru/'>
                <TextEmphasized>Дебют</TextEmphasized>
              </a>
              .
            </p>
          </Block>
          <Block>
            <H3>Цели</H3>
            <p>
              Основной целью проекта было разобраться в устройстве конкретной
              модели автомобиля (которую мы, возможно, будем когда-нибудь
              водить) и представить эту информацию. <br></br>
              Дополнительной - сделать это наглядно и понятно, обеспечивая
              максимально понятный процесс потребления информации. <br></br>
            </p>
          </Block>
          <Block>
            <H3>Почему такой формат?</H3>
            <p>
              Начнем с того, что это интересно. Веб технологии позволяют подойти
              к презентации информации на новом уровне, убирая линейность в
              структурировании контента.
              <br></br>
              Во вторых, это добавляет интерактивность и возможность
              использовать онлайн ресурсы для описания процессов, происходящих в
              автомобиле (например, через видео, обсуждающие устройство).{' '}
              <br></br>
              Ну, а в третьих, это суммирует информацию по устройству автомобиля
              и позволяет другим людям в интернете получить эту информацию в
              структурированном виде. :)
            </p>
          </Block>
          <Block>
            <H3>Почему Ford Mustang Bullitt?</H3>
            <p>
              Начнем с того, что у меня скорее всего не будет возможности
              приобрести автомобиль в ближайшем будущем, как бы мне этого ни
              хотелось. Поэтому у меня не было для себя ограничений описывать
              именно тот автомобиль, на котором я буду в ближайшее время ездить.
              <br></br>
              Изначально мой выбор пал на{' '}
              <TextEmphasized>Renaut Logan</TextEmphasized>, как на более
              практичную и часто встречающуюся модель, и я начала копаться в
              ней. Однако, я быстро поняла, что поскольку я не собираюсь ее
              приобретать, у меня не так много мотивации и интереса высматривать
              детали в такой обычной машине. <br></br>
              Захотелось чего-то поинтереснее. Изучив международный маркет
              автомобилей, в частности разные модели{' '}
              <TextEmphasized>Ford</TextEmphasized>, я поняла что относительно
              декоративный спортивный автомобиль с историей - то, что надо.{' '}
              <br></br>
              Он достаточно необычный но при это не совсем эксклюзивный, а также
              у него есть обширная документация (спасибо компании Ford) и
              большая фанбаза.
            </p>
          </Block>
        </NarrowContentWrapper>
      </Section>
      <Section className='has-text-centered'>
        <H2>А кто автор?</H2>
        <Block className='is-flex is-justify-content-center'>
          <Figure
            className='is-128x128'
            img={{ src: me, className: 'is-rounded' }}
          />
        </Block>
        <Block>
          <p>
            Меня зовут Ира, и я - <TextSemibold>веб разработчик</TextSemibold>,
            <TextSemibold>фрилансер</TextSemibold> и{' '}
            <TextSemibold>куратор</TextSemibold> курса по веб разработке в школе
            IT технологий{' '}
            <a href='https://brunoyam.com/'>
              <TextSemibold>Бруноям</TextSemibold>
            </a>
            . <br></br> Я помогаю малым бизнесам расти, развивая их онлайн, а
            своим ученикам избегать тех ошибок, которые я совершала, проходя
            путь веб разработчика с нуля самостоятельно. Для меня
          </p>
        </Block>
      </Section>
      <Section>
        <NarrowContentWrapper>
          <Block>
            <H2 className='has-text-centered'>Использованные ресурсы</H2>
            <p className='has-text-centered'>
              Основным ресурсом была официальная сервисная книжка, выпущенная
              компанией <TextSemibold>Ford</TextSemibold>, а также официальные
              технические характеристики модели. Недостающая информация была
              взята с официального сайта (по размерам и некоторым другим
              характеристикам). <br></br>
              Большинство текстов переведено с английского из сервисной книжки
              для данной модели. Могут встречаться небольшие расхождения в
              терминологии.
            </p>
          </Block>
          <Block>
            <OrderedList listItems={resources} />
          </Block>
        </NarrowContentWrapper>
      </Section>
    </>
  );
};

export default About;
