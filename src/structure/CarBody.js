import React, { useContext } from 'react';
import { ModalContext } from '../context/modal-context';

import Section from '../common/UI/Section';
import Accordion from '../common/UI/Accordion/Accordion';
import Table from '../common/UI/Table';
import OrderedList from '../common/UI/OrderedList';
import BulletpointWithIcon from '../common/UI/BulletpointWithIcon';
import PrimaryButton from '../common/UI/Buttons/PrimaryButton';
import Modal from '../common/UI/Modal';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../common/UI/Hero/HeroSubtitle';

// Text
import H2 from '../common/UI/Titles/H2';
import H3 from '../common/UI/Titles/H3';
import CenteredParagraphLg from '../common/UI/Paragraphs/CenteredParagraphLg';

import classes from '../assets/scss/pages/heroes.module.scss';
import carBodyParts from '../assets/img/body/bodyParts.jpg';

const faults = [
  {
    title: 'Отсутствуют зеркала заднего вида, стекла',
    description:
      'Отсутствие зеркал, предусмотренных конструкцией, увеличивает количество слепых зон, что может привести к серьезным авариям.',
    critical: true,
  },
  {
    title:
      'Установлены дополнительные предметы или нанесены покрытия, ограничивающие обзорность с места водителя.',
    description:
      'Любые улучшения автомобиля не должны ограничивать свободу перемещения водителя и уменьшать его видимость дороги. Сотрудники ГИБДД могут контролировать прозрачность стекол.',
    critical: true,
  },
  {
    title: 'Не работают предусмотренные конструкцией:',
    description:
      'Замки, пробки баков, механизмы регулировки сидения водителя, аварийные выходы, привод управления дверьми, спидометр, тахограф, противоугарные устройства, обогрев и обдув стекол.',
    critical: true,
  },
  {
    title: 'Регистрационный знак ТС не отвечает стандарту',
    description:
      'Если знак был утерян во время аварии, нужно заказать новый в отделении ГИБДД.',
    critical: true,
  },
  {
    title: 'Отсутствуют ремни безопасности, ремни имеют повреждения.',
    description:
      'Согласно правилам ПДД, все пассажиры и водитель должны быть пристегнуты при движении.',
    critical: true,
  },
  {
    title: 'Отсутствует один из обязательных принадлежностей',
    description:
      'Некоторые из обязательных пренадлежностей периодически необходимо менять.',
    critical: true,
  },
];

const sizeThead = ['Характеристика', 'Значение'];

const sizeTbody = [
  ['Колесная база, см', 272],
  ['Длина, см', 479],
  ['Высота, см', 138],
  ['Ширина без зеркал, см', 191],
  ['Ширина с зеркалами, см', 208],
  ['Ширина со сложенными зеркалами, см', 193],
  ['Передняя колея, см', 158],
  ['Задняя Колея, см', 165],
];

const otherCharacteristicsData = {
  thead: sizeThead,
  tBody: [
    ['Тип кузова', '2-х дверное купе'],
    ['Тип автомобиля', 'Спортивный'],
    ['Вместимость пассажиров', 4],
    ['Снаряженная масса', 1746],
  ],
};

const operatingConsumables = [
  'Моторное масло - для снижения трения между деталями двигателя внутреннего сгорания.',
  'Трансмиссионное масло - для снижения трения между деталями трансмиссии',
  'Тормозная жидкость - для преобразования давления на педаль тормоза в давление на тормозные диски',
  'Охлаждающая жидкость (антифриз) - для защиты двигателя от перегрева',
  'Кондиционерная жидкость - для работы кондиционера, отвественного за поддержание температуры внутри салона',
  'Полный бак топлива',
  'Стеклоочиститель',
];

const luggage = [
  'Знак аварийной остановки',
  'Огнетушитель',
  'Аптечка',
  'Домкрат (для подъема машины)',
  'Буксировочный трос',
  'Насос (Автомобильный компрессор)',
  'Антифриз и герметик системы охлаждения',
  'Жилетка',
  'Тряпки для протирки масла',
  'Запасное колесо',
  'Канистра с бензином (для дальних поездок)',
  'Щетка и скребок (в зимнее время)',
  'Лопата',
];

const definitions = [
  {
    header: 'Разрешенная максимальная масса (РММ)',
    body:
      'Это масса полностью снаряженного автомобиля или иного транспортного средства вместе с грузом, водителем и пассажирами, установленная заводом - изготовителем в качестве максимально допустимой.',
  },
  {
    header: 'Снаряженная масса',
    body:
      'Снаряжённая масса — совокупная масса автомобиля с водителем (75 кг) со стандартным оборудованием, всеми необходимыми эксплуатационными расходными материалами, полным баком топлива, но без пассажиров, и груза. Иногда в снаряженную массу не включают массу водителя.',
  },
  {
    header: 'Эксплуатационные расходные материалы',
    body: <OrderedList listItems={operatingConsumables} />,
  },
  {
    header: 'Штатные инструменты',
    body: <OrderedList listItems={luggage} />,
  },
];

const CarBody = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <figure className='image'>
        <img src={carBodyParts} alt=''></img>
      </figure>
    ));

    modalContext.showModal();
  };

  // List of faults mapping
  const faultsList = faults
    .sort((fault1, fault2) => {
      if (fault1.critical) {
        return 1;
      } else if (fault1.critical && fault2.critical) {
        return 0;
      }

      return -1;
    })
    .map((fault, index) => (
      <BulletpointWithIcon
        key={index}
        icon={<i className='fas fa-tools'></i>}
        iconWrapperClasses={fault.critical ? ['has-text-danger'] : ''}
      >
        <H3>{fault.title}</H3>
        <p>{fault.description}</p>
      </BulletpointWithIcon>
    ));
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
        <div className='block'>
          <H2 className='has-text-centered'>Характеристики</H2>
          <CenteredParagraphLg>
            Отличительной чертой купе является отдельный багажник, относительно
            небольшая вместимость салона.
          </CenteredParagraphLg>
        </div>
        <div className='block has-text-centered pb-5'>
          <PrimaryButton onClick={openModal}>
            Посмотреть общее устройство кузова
          </PrimaryButton>
        </div>
        <div className='block'>
          <div className='columns pt-4'>
            <div className='column is-6'>
              <H3 className='has-text-centered pb-3'>Габариты</H3>
              <Table theadRow={sizeThead} tbodyRows={sizeTbody} />
            </div>
            <div className='column is-6'>
              <H3 className='has-text-centered pb-3'>Прочие характеристики</H3>
              <Table
                theadRow={otherCharacteristicsData.thead}
                tbodyRows={otherCharacteristicsData.tBody}
              />
            </div>
          </div>
        </div>
        <div className='block'>
          <H2 className='has-text-centered pt-5'>Неисправности</H2>
          <CenteredParagraphLg>
            Как и к другим элементам автомобиля, существует ряд требований,
            которым должен удовлетворять кузов. В противном случае его
            эксплуатация запрещается.
          </CenteredParagraphLg>
          <div className='columns'>
            <div className='column is-10-tablet is-offset-1-tablet is-8-desktop is-offset-2-desktop'>
              <div className='block pt-5'>{faultsList}</div>
            </div>
          </div>
        </div>
        <div className='block'>
          <H2 className='has-text-centered'>Термины</H2>
          <div className='columns is-justify-content-center pt-4'>
            <div className='column is-12 is-10-tablet is-9-desktop'>
              <Accordion items={definitions}></Accordion>
            </div>
          </div>
        </div>
      </Section>
      <Section></Section>
    </React.Fragment>
  );
};

export default CarBody;
