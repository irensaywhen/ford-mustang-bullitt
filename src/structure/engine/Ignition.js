import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

const ignitionSystemPeculiarities = [
  'Точный контроль времени зажигания для каждого цилиндра по отдельности',
  'Уменьшение выбросов',
  'Более экономичный расход топлива',
  'Уменьшение потерей энергии',
];

const Ignition = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>Система зажигания</H3>
        <p>
          Система зажигания является частью{' '}
          <TextSemibold>электрооборудования автомобиля</TextSemibold>. Она
          вступает в игру когда рабочую смесь в двигателе нужно поджечь. Данная
          модель оборудована{' '}
          <TextSemibold>
            бесконтактной системой зажигания COP(Coin on Plug)
          </TextSemibold>
        </p>
      </div>
      <div className='block'>
        <H4>Общий принцип работы контактной системы зажигания</H4>
        <p>
          Электрическая система автомобиля вырабатывает{' '}
          <TextSemibold>ток низкого напряжения</TextSemibold>, который подается
          на катушку. Рядом с ней устанавливается катушка с другим количеством
          витков. При изменении тока на катушке низкого напряжения, засчет
          закона электромагнитной индукции, на второй катушке также индуцируется
          переменный ток, но уже <TextSemibold>высокого</TextSemibold>{' '}
          напряжения. Это напряжение подается на{' '}
          <TextSemibold>свечу зажигания</TextSemibold>, позволяя пробить
          воздушный зазор и воспламенить горючую смесь в цилиндре.
        </p>
      </div>
      <div className='block'>
        <H4>Бесконтактная система зажигания</H4>
        <p>
          Отличается от контактной тем, что малые токи вырабатывает датчик
          Холла. Эти токи приходят на коммутатор, который передает более мощные
          токи на катушку зажигания.
        </p>
        <p className='pt-2'>
          Бесконтактная система зажигания позволяет получать более мощную искру
          по сравнению с контактной системой зажигания, поскольку в ней нет
          необходимости беречь контакты от того, чтобы они не перегорали. Более
          мощная искра облегчает пуск двигателя.
        </p>
      </div>
      <div className='block'>
        <H4 className='pb-2'>
          Особенности системы зажигания <TextSemibold>COP</TextSemibold>
        </H4>
        <p>
          Считается самой передовой системой зажигания. Ее особенность
          заключается в том, что зажигание каждой свечи контролируется по
          отдельности. Каждая свеча зажигания обсуживается отдельной катушкой
          зажигания.
        </p>
      </div>
      <div className='block'>
        <OrderedList listItems={ignitionSystemPeculiarities} />
      </div>
    </React.Fragment>
  );
};

export default Ignition;
