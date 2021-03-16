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
          <HeroTitle>Электрооборудование автомобиля</HeroTitle>
        </Block>
        <Block>
          <HeroSubtitle>
            Включает в себя <TextSemibold>источники</TextSemibold> и{' '}
            <TextSemibold>потребители</TextSemibold> тока.<br></br>
            <WhiteOutlineButton className='mt-4' onClick={openModal}>
              Как устроено электрооборудование?
            </WhiteOutlineButton>
          </HeroSubtitle>
        </Block>
      </Hero>
      {<Redirect to={`${path}/${supplyParts[0].tabLink}`} />}
      <Section>
        <Block>
          <H2 className='has-text-centered'>Источники тока</H2>
          <CenteredParagraphLg>
            К источникам тока относятся{' '}
            <TextSemibold>аккумуляторная батарея</TextSemibold> и{' '}
            <TextSemibold>генератор</TextSemibold>.
          </CenteredParagraphLg>
          <NarrowContentWrapper>
            <Tabs tabs={supplyParts} />
          </NarrowContentWrapper>
        </Block>

        <Block>
          <H2 className='has-text-centered'>Потребители тока</H2>
          <CenteredParagraphLg>
            К потребителям тока относятся системы:{' '}
            <TextSemibold>зажигания</TextSemibold>,{' '}
            <TextSemibold>пуска двигателя</TextSemibold>,{' '}
            <TextSemibold>освещения и сигнализации</TextSemibold>,{' '}
            <TextSemibold>контрольно-измерительные приборы</TextSemibold>,{' '}
            <TextSemibold>дополнительное оборудование</TextSemibold>. Автомобили
            могут иметь большое количество различного дополнительного
            оборудования. Главное из этого -{' '}
            <TextSemibold>отопитель салона</TextSemibold>,{' '}
            <TextSemibold>омыватель и очиститель лобового стекла</TextSemibold>,{' '}
            <TextSemibold>омыватель и очиститель фар</TextSemibold>,{' '}
            <TextSemibold>омыватель и очиститель заднего стекла</TextSemibold>,{' '}
            <TextSemibold>
              устройство подогрева стекол, зеркал, сидений
            </TextSemibold>
            , <TextSemibold>электроусилитель рулевого колеса</TextSemibold>. К
            дополнительному электрооборудованию можно отнести различную
            косметику - аудиосистему, бортовой компьютер.
          </CenteredParagraphLg>
          <NarrowContentWrapper>
            <Tabs tabs={consumersParts} />
          </NarrowContentWrapper>
        </Block>

        <Block>
          <NarrowContentWrapper>
            <Block>
              <H2 className='has-text-centered'>Предохранители</H2>
              <p>
                Часто неисправности, связанные с электрическими системами, могут
                быть связаны с пробоем предохранителей. <br></br> Предохранители
                нужны для защиты потребителей электрического тока. <br></br>
                Важно отметить, что перед заменой предохранителей необходимо
                выключить аккумулятор. <br></br>
                Заменять предохранители нужно на такие же (рассчитанные на такие
                же токи). Проверять перегоревшие предохранители нужно перед тем
                как приступать к попыткам починить другие элементы
                электрообрудования автомобиля.
              </p>
            </Block>

            <Block>
              <H3 className='has-text-centered'>Типы предохранителей</H3>
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
