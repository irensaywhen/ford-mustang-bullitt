import React from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';

// Text
import H3 from '../../common/UI/Titles/H3';

import TextSemibold from '../../common/UI/Text/TextSemibold';

const definitions = [
  {
    header: 'Регулятор напряжения',
    body:
      'Это электронный прибор, который ограничивает вырабатываемое генератором напряжение в пределах 13.6-14.2В постоянного тока.',
  },
];

const Generator = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>Генератор</H3>
        <p>
          Предназначен для питания электрическим током всех потребителей и для
          подазрядки аккумуляторной батареи при работе двигателя на средних и
          больших оборотах.
        </p>
        <p className='pt-2'>
          Генератор включен в цепь параллельно аккумуляторной батареи, а потому
          он будет питать приборы электричеством только в том случае, когда его
          напряжение превысит напряжение аккумулятора. <br></br>
          Для того чтобы напряжение, вырабатываемое генератором не превышало
          требуемое, он работает в паре с{' '}
          <TextSemibold>регулятором напряжения.</TextSemibold>
        </p>
      </div>

      <div className='block pt-4'>
        <Accordion items={definitions}></Accordion>
      </div>
    </React.Fragment>
  );
};

export default Generator;
