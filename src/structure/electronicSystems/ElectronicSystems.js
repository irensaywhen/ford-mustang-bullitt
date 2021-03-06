import React, { useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

import Section from '../../common/UI/Section';
import Tabs from '../../common/UI/Tabs';
import WhiteOutlineButton from '../../common/UI/Buttons/WhiteOutlineButton';
import Table from '../../common/UI/Table';
import Modal from '../../common/UI/Modal';
import ResponsiveVideoWrapper from '../../common/UI/ResponsiveVideoWrapper';
import VideoIframe from '../../common/UI/VideoIframe';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';

// Hero
import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../../common/UI/Titles/H2';
import H3 from '../../common/UI/Titles/H3';
import TextSemibold from '../../common/UI/Text/TextSemibold';
import CenteredParagraphLg from '../../common/UI/Paragraphs/CenteredParagraphLg';
import NarrowContentWrapper from '../../common/UI/Wrappers/NarrowContentWrapper';

// Images
import fugeTypes from '../../assets/img/electronics/fuse-types.jpg';

// data
import {
  supplyParts,
  consumersParts,
  fusesTable,
} from './data/electronicSystems';

import classes from '../../assets/scss/pages/heroes.module.scss';

import { ModalContext } from '../../context/modal-context';

const ElectronicSystems = () => {
  const { path } = useRouteMatch();
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <VideoIframe
        title='Has electronics work in car'
        src='https://www.youtube.com/embed/piX-MwO3xrI'
      ></VideoIframe>
    ));

    modalContext.showModal();
  };
  return (
    <React.Fragment>
      <Modal hidePadding transparentBackground>
        <ResponsiveVideoWrapper>
          {modalContext.modalContent}
        </ResponsiveVideoWrapper>
      </Modal>
      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.HeroImage,
          classes.ElectronicsImage,
        ].join(' ')}
      >
        <Block>
          <HeroTitle>?????????????????????????????????????? ????????????????????</HeroTitle>
        </Block>
        <Block>
          <HeroSubtitle>
            ???????????????? ?? ???????? <TextSemibold>??????????????????</TextSemibold> ??{' '}
            <TextSemibold>??????????????????????</TextSemibold> ????????.<br></br>
            <WhiteOutlineButton className='mt-4' onClick={openModal}>
              ?????? ???????????????? ???????????????????????????????????????
            </WhiteOutlineButton>
          </HeroSubtitle>
        </Block>
      </Hero>
      {<Redirect to={`${path}/${supplyParts[0].tabLink}`} />}
      <Section>
        <Block>
          <H2 className='has-text-centered'>?????????????????? ????????</H2>
          <CenteredParagraphLg>
            ?? ???????????????????? ???????? ??????????????????{' '}
            <TextSemibold>???????????????????????????? ??????????????</TextSemibold> ??{' '}
            <TextSemibold>??????????????????</TextSemibold>.
          </CenteredParagraphLg>
          <NarrowContentWrapper>
            <Tabs tabs={supplyParts} />
          </NarrowContentWrapper>
        </Block>

        <Block>
          <H2 className='has-text-centered'>?????????????????????? ????????</H2>
          <CenteredParagraphLg>
            ?? ???????????????????????? ???????? ?????????????????? ??????????????:{' '}
            <TextSemibold>??????????????????</TextSemibold>,{' '}
            <TextSemibold>?????????? ??????????????????</TextSemibold>,{' '}
            <TextSemibold>?????????????????? ?? ????????????????????????</TextSemibold>,{' '}
            <TextSemibold>????????????????????-?????????????????????????? ??????????????</TextSemibold>,{' '}
            <TextSemibold>???????????????????????????? ????????????????????????</TextSemibold>. ????????????????????
            ?????????? ?????????? ?????????????? ???????????????????? ???????????????????? ??????????????????????????????
            ????????????????????????. ?????????????? ???? ?????????? -{' '}
            <TextSemibold>?????????????????? ????????????</TextSemibold>,{' '}
            <TextSemibold>?????????????????? ?? ???????????????????? ???????????????? ????????????</TextSemibold>,{' '}
            <TextSemibold>?????????????????? ?? ???????????????????? ??????</TextSemibold>,{' '}
            <TextSemibold>?????????????????? ?? ???????????????????? ?????????????? ????????????</TextSemibold>,{' '}
            <TextSemibold>
              ???????????????????? ?????????????????? ????????????, ????????????, ??????????????
            </TextSemibold>
            , <TextSemibold>???????????????????????????????? ???????????????? ????????????</TextSemibold>. ??
            ?????????????????????????????? ?????????????????????????????????????? ?????????? ?????????????? ??????????????????
            ?????????????????? - ????????????????????????, ???????????????? ??????????????????.
          </CenteredParagraphLg>
          <NarrowContentWrapper>
            <Tabs tabs={consumersParts} />
          </NarrowContentWrapper>
        </Block>

        <Block>
          <NarrowContentWrapper>
            <Block>
              <H2 className='has-text-centered'>????????????????????????????</H2>
              <p>
                ?????????? ??????????????????????????, ?????????????????? ?? ???????????????????????????? ??????????????????, ??????????
                ???????? ?????????????? ?? ?????????????? ??????????????????????????????. <br></br> ????????????????????????????
                ?????????? ?????? ???????????? ???????????????????????? ???????????????????????????? ????????. <br></br>
                ?????????? ????????????????, ?????? ?????????? ?????????????? ?????????????????????????????? ????????????????????
                ?????????????????? ??????????????????????. <br></br>
                ???????????????? ???????????????????????????? ?????????? ???? ?????????? ???? (???????????????????????? ???? ??????????
                ???? ????????). ?????????????????? ???????????????????????? ???????????????????????????? ?????????? ?????????? ??????
                ?????? ???????????????????? ?? ???????????????? ???????????????? ???????????? ????????????????
                ???????????????????????????????????? ????????????????????.
              </p>
            </Block>

            <Block>
              <H3 className='has-text-centered'>???????? ??????????????????????????????</H3>
              <div className='columns'>
                <div className='column is-6'>
                  <Table
                    theadRow={fusesTable.thead}
                    tbodyRows={fusesTable.tBody}
                  />
                </div>
                <div className='column is-6'>
                  <Figure img={{ src: fugeTypes }} />
                </div>
              </div>
            </Block>
          </NarrowContentWrapper>
        </Block>
      </Section>
    </React.Fragment>
  );
};

export default ElectronicSystems;
