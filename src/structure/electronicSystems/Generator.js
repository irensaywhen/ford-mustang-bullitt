import React from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';

// Text
import H3 from '../../common/UI/Titles/H3';

import TextSemibold from '../../common/UI/Text/TextSemibold';
import Block from '../../common/UI/Wrappers/Block';
import { definitions } from './data/generator';

const Generator = () => {
  return (
    <React.Fragment>
      <Block>
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
      </Block>

      <Block className='pt-4'>
        <Accordion items={definitions}></Accordion>
      </Block>
    </React.Fragment>
  );
};

export default Generator;
