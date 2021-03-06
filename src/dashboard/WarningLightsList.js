import React from 'react';

import Figure from '../common/UI/Figure/Figure';
import Block from '../common/UI/Wrappers/Block';
import H2 from '../common/UI/Titles/H2';
import NarrowContentWrapper from '../common/UI/Wrappers/NarrowContentWrapper';

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

const defaultSwiperConfig = {
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
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  autoHeight: true,
  centerInsufficientSlides: true,
  loop: true,
};

const WarningLightsList = ({
  listTitle,
  listDescription,
  warningsList,
  swiperConfig: customSwiperConfig = {},
}) => {
  const swiperConfig = {
    ...defaultSwiperConfig,
    ...customSwiperConfig,
  };
  return (
    <>
      <Block>
        <H2 className='has-text-centered'>{listTitle}</H2>
      </Block>
      <Block>
        <NarrowContentWrapper>
          <p className='has-text-centered'>{listDescription}</p>
        </NarrowContentWrapper>
      </Block>
      <Block>
        <Swiper {...swiperConfig} pagination>
          {warningsList.map((warning, index) => (
            <SwiperSlide key={index}>
              <div className='card mb-5'>
                <div className='card-image has-background-black is-flex is-justify-content-center'>
                  <Figure
                    img={{ src: warning.img }}
                    className='is-128x128 is-flex is-align-items-center'
                  />
                </div>
                <header className='card-header'>
                  <p className='card-header-title'>{warning.name}</p>
                </header>
                <div className='card-content'>
                  <div className='content'>{warning.description}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Block>
    </>
  );
};

export default WarningLightsList;
