import React, { useContext } from 'react';
import { ModalContext } from '../../context/modal-context';

import Section from '../../common/UI/Section';
import Accordion from '../../common/UI/Accordion/Accordion';
import Table from '../../common/UI/Table';
import FaultsList from '../../common/UI/FaultsList';
import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';
import Figure from '../../common/UI/Figure/Figure';
import Block from '../../common/UI/Wrappers/Block';
import Modal from '../../common/UI/Modal';
import NarrowContentWrapper from '../../common/UI/Wrappers/NarrowContentWrapper';

// Hero
import Hero from '../../common/UI/Hero/Hero';
import HeroTitle from '../../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../../common/UI/Titles/H2';
import H3 from '../../common/UI/Titles/H3';
import CenteredParagraphLg from '../../common/UI/Paragraphs/CenteredParagraphLg';

import classes from '../../assets/scss/pages/heroes.module.scss';
import carBodyParts from '../../assets/img/body/bodyParts.jpg';

// data
import faults from './data/faults';
import { size, otherCharacteristics } from './data/characteristics';
import definitions from './data/defintions';

const CarBody = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => <Figure img={{ src: carBodyParts }} />);

    modalContext.showModal();
  };
  return (
    <React.Fragment>
      <Modal hidePadding transparentBackground>
        {modalContext.modalContent}
      </Modal>
      <Hero
        className={[
          'is-halfheight',
          'has-text-centered',
          classes.HeroImage,
          classes.CarBodyImage,
        ].join(' ')}
      >
        <div className='block'>
          <HeroTitle>Кузов</HeroTitle>
        </div>
        <div className='block'>
          <HeroSubtitle>
            Является основным несущем элементом автомобиля. Служит для крепления
            к нему двигателя, трансмиссии, ходовой части, механизмов управления,
            а также для размещения пассмажиров и грузов.
          </HeroSubtitle>
        </div>
      </Hero>
      <Section>
        <Block>
          <H2 className='has-text-centered'>Характеристики</H2>
          <CenteredParagraphLg>
            Отличительной чертой купе является отдельный багажник, относительно
            небольшая вместимость салона.
          </CenteredParagraphLg>
        </Block>
        <Block className='has-text-centered pb-5'>
          <PrimaryButton onClick={openModal}>
            Посмотреть общее устройство кузова
          </PrimaryButton>
        </Block>
        <Block>
          <div className='columns pt-4'>
            <div className='column is-6'>
              <H3 className='has-text-centered pb-3'>Габариты</H3>
              <Table theadRow={size.thead} tbodyRows={size.tbody} />
            </div>
            <div className='column is-6'>
              <H3 className='has-text-centered pb-3'>Прочие характеристики</H3>
              <Table
                theadRow={otherCharacteristics.thead}
                tbodyRows={otherCharacteristics.tbody}
              />
            </div>
          </div>
        </Block>
      </Section>
      <Section>
        <H2 className='has-text-centered pt-5'>Неисправности</H2>
        <CenteredParagraphLg>
          Как и к другим элементам автомобиля, существует ряд требований,
          которым должен удовлетворять кузов. В противном случае его
          эксплуатация запрещается.
        </CenteredParagraphLg>
        <NarrowContentWrapper>
          <FaultsList faults={faults} />
        </NarrowContentWrapper>
      </Section>
      <Section>
        <H2 className='has-text-centered'>Термины</H2>

        <NarrowContentWrapper>
          <Accordion items={definitions}></Accordion>
        </NarrowContentWrapper>
      </Section>
    </React.Fragment>
  );
};

export default CarBody;
