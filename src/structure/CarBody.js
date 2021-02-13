import React from 'react';

import Section from '../common/UI/Section';
import Accordion from '../common/UI/Accordion/Accordion';
import Table from '../common/UI/Table';
import OrderedList from '../common/UI/OrderedList';

const sizeThead = [
  'Колесная база, см',
  'Длина, см',
  'Высота, см',
  'Ширина без зеркал, см',
  'Ширина с зеркалами, см',
  'Ширина со сложенными зеркалами, см',
  'Передняя колея, см',
  'Задняя Колея, см',
];

// Array for rows
const sizeTbody = [[272, 479, 138, 191, 208, 193, 158, 165]];

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
  return (
    <div>
      <Section>
        <h1 className='title has-text-centered'>Кузов</h1>
        <p>
          Что еще нужно описать: 1. Как габариты влияют на скорость 2. Прочие
          характеристики (объем багажника и тд) 3. Добавить картинки для внешних
          характеристик
        </p>
      </Section>
      <Section>
        <h2 className='subtitle has-text-centered'>Габариты</h2>
        <Table theadRow={sizeThead} tbodyRows={sizeTbody} />
      </Section>
      <Section>
        <h2 className='subtitle has-text-centered'>Прочие характеристики</h2>
        <Table theadRow={sizeThead} tbodyRows={sizeTbody} />
      </Section>
      <Section>
        <h3 className='title is-4'>Термины</h3>
        <Accordion items={definitions}></Accordion>
      </Section>
    </div>
  );
};

export default CarBody;
