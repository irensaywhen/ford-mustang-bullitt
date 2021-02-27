import React from 'react';
import Section from '../common/UI/Section';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../common/UI/Hero/HeroSubtitle';

import ResponsiveVideoWrapper from '../common/UI/ResponsiveVideoWrapper';
import CenteredParagraph from '../common/UI/CenteredParagraph';
import CenteredParagraphLg from '../common/UI/Paragraphs/CenteredParagraphLg';
import HalfWidthColumn from '../common/UI/HalfWidthColumn';

import classes from '../assets/scss/pages/history.module.scss';

const History = () => {
  return (
    <React.Fragment>
      <Hero
        classNames={['is-halfheight', 'has-text-centered', classes.HeroImage]}
      >
        <div className='block'>
          <HeroTitle>Ford Mustang Bullitt</HeroTitle>
        </div>
        <div className='block'>
          <HeroSubtitle>Спецверсия в честь юбилея Буллита</HeroSubtitle>
        </div>
      </Hero>
      <Section>
        <div className='block'>
          <CenteredParagraphLg>
            Полвека назад в Америке на экраны вышел легендарный кинофильм Буллит
            со Стивом Маккуином в главной роли. Картина прославилась
            десятиминутной сценой автомобильной погони по улицам Сан-Франциско,
            в которой главный герой Фрэнк Буллит на темно-зеленом купе Ford
            Mustang преследует двух киллеров, скрывающихся на автомобиле Dodge
            Charger. Этот эпизод стал культовым в мировом кинематографе и
            породил множество подражаний.
          </CenteredParagraphLg>
        </div>

        <div className='columns'>
          <div className='column'>
            <ResponsiveVideoWrapper>
              <iframe
                title='Chase part 1'
                className='has-ratio'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/31JgMAHVeg0'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </ResponsiveVideoWrapper>
          </div>

          <div className='column'>
            <ResponsiveVideoWrapper>
              <iframe
                title='Chase part 2'
                className='has-ratio'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/wk9SZbrh_Tg'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </ResponsiveVideoWrapper>
          </div>
        </div>

        <div className='block'>
          <CenteredParagraphLg>
            Чтобы отметить юбилей Буллита, компания Ford разыскала и привезла на
            автошоу в Детройте тот самый Мустанг, за рулем которого Стив Маккуин
            снимался в эпизоде погони. Сейчас состояние этого спорткара
            неважное, но из-за принадлежности к легендарному фильму его цена
            подбирается к четырем миллионам долларов! А помимо старой машины, на
            выставке дебютировал Ford Mustang Bullitt — спецверсия, сделанная с
            оглядкой на киношный спорткар.
          </CenteredParagraphLg>
        </div>
      </Section>
    </React.Fragment>
  );
};

export default History;
