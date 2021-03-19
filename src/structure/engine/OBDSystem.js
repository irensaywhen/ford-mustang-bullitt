import React from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

// Image
import warningLightIcon from '../../assets/img/icons/dacia-logan-check-engine.gif';

import { indicatorFiringReasons } from './data/obdSystem';

const OBDSystem = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>
          Система <TextSemibold>OBD-II (On-Board Diagnostics)</TextSemibold>
        </H3>
        <p>
          Данная модель оснащена системой, контролирующей выбросы автомобиля в
          атмосферу. Эта система предназначена для защиты окружающей среды и
          контроля норм выбросов.
        </p>
      </Block>
      <Block>
        <div className='columns is-mobile'>
          <div className='column is-narrow'>
            <Figure img={{ src: warningLightIcon }} />
          </div>
          <div className='column'>
            <p>
              Когда данный индикатор загорается, это означает, что система{' '}
              <TextSemibold>OBD-II</TextSemibold> обнаружина неисправность.
            </p>
          </div>
        </div>
      </Block>
      <Block>
        <H4>Возможные причины появления данного индикатора</H4>
        <OrderedList listItems={indicatorFiringReasons} />
      </Block>
    </React.Fragment>
  );
};

export default OBDSystem;
