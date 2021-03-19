import React from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import Block from '../../common/UI/Wrappers/Block';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import {
  definitions,
  forbidden,
  recommendations,
  conditions,
} from './data/fuel';

const Fuel = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>Топливо</H3>
        <p>
          Важнейшей характеристикой топлива является{' '}
          <TextSemibold>октановое число</TextSemibold>, определяющее стойкость к
          детонации. <br></br>
          Чем больше горючая смесь сжимается в процессе работы двигателя, тем
          более должно быть октановое число.
        </p>
        <p className='pt-2'>
          Маркировка топлива показывает его стойкость к детонации. Данная модель
          должна быть заправлена топливом с октановым числом не менее{' '}
          <TextSemibold>87</TextSemibold>. Однако, поскольку данная модель
          работает на газовом топливе, а газовое топливо имеет повышенную
          стойкость к детонации и октановое число выше 100, волноваться об этом
          не нужно.
        </p>
      </Block>
      <Block>
        <H4 className='has-text-danger'>Запрещается</H4>
        <OrderedList listItems={forbidden} />
      </Block>
      <Block>
        <H4>Заправка топливом</H4>
        <p>Существуют общие рекоммендации по заправке автомобиля топливом.</p>
      </Block>
      <Block>
        <OrderedList listItems={recommendations} />
      </Block>
      <Block>
        <H4>Потребление топлива</H4>
        <OrderedList listItems={conditions} />
      </Block>

      <Block>
        <H4>Состав горючей смеси</H4>
        <p>
          В зависимости от режима работы двигателя, горючая смесь имеет
          различный состав. Состав горючей смеси регулируется карбюратором.
        </p>
      </Block>
      <Block>
        <Accordion items={definitions}></Accordion>
      </Block>
    </React.Fragment>
  );
};

export default Fuel;
