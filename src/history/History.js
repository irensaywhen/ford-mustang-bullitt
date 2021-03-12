import React from 'react';
import Section from '../common/UI/Section';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../common/UI/Hero/HeroSubtitle';

import H2 from '../common/UI/Titles/H2';
import Block from '../common/UI/Wrappers/Block';
import ResponsiveVideoWrapper from '../common/UI/ResponsiveVideoWrapper';
import VideoIframe from '../common/UI/VideoIframe';
import Paragraph from '../common/UI/Paragraphs/Paragraph';

import classes from '../assets/scss/pages/heroes.module.scss';

const History = () => {
  return (
    <React.Fragment>
      <Hero
        className={[
          'is-fullheight',
          'has-text-centered',
          classes.HeroImage,
          classes.HistoryImage,
        ].join(' ')}
      >
        <Block>
          <HeroTitle className='is-1 pb-4'>Ford Mustang Bullitt</HeroTitle>
        </Block>
        <Block>
          <HeroSubtitle className='is-4'>
            Cпецверсия в честь пятидесятилетия Буллита.
          </HeroSubtitle>
        </Block>
      </Hero>

      <Section>
        <H2 className='has-text-centered pb-4'>История автомобиля</H2>
        <Block>
          <Paragraph>
            Полвека назад в Америке на экраны вышел легендарный кинофильм Буллит
            со Стивом Маккуином в главной роли. Картина прославилась
            десятиминутной сценой автомобильной погони по улицам Сан-Франциско,
            в которой главный герой Фрэнк Буллит на темно-зеленом купе Ford
            Mustang преследует двух киллеров, скрывающихся на автомобиле Dodge
            Charger. Этот эпизод стал культовым в мировом кинематографе и
            породил множество подражаний. <br></br>
            Чтобы отметить юбилей Буллита, компания Ford разыскала и привезла на
            автошоу в Детройте тот самый Мустанг, за рулем которого Стив Маккуин
            снимался в эпизоде погони. Сейчас состояние этого спорткара
            неважное, но из-за принадлежности к легендарному фильму его цена
            подбирается к четырем миллионам долларов! А помимо старой машины, на
            выставке дебютировал Ford Mustang Bullitt — спецверсия, сделанная с
            оглядкой на киношный спорткар.
          </Paragraph>
        </Block>

        <Block>
          <H2 className='has-text-centered pb-4'>Сцены погони</H2>
          <div className='columns'>
            <div className='column is-12 is-6-desktop'>
              <ResponsiveVideoWrapper>
                <VideoIframe
                  src='https://www.youtube.com/embed/31JgMAHVeg0'
                  title='Chase part 1'
                />
              </ResponsiveVideoWrapper>
            </div>

            <div className='column is-12 is-6-desktop'>
              <ResponsiveVideoWrapper>
                <VideoIframe
                  src='https://www.youtube.com/embed/wk9SZbrh_Tg'
                  title='Chase part 2'
                />
              </ResponsiveVideoWrapper>
            </div>
          </div>
        </Block>
      </Section>
    </React.Fragment>
  );
};

export default History;
