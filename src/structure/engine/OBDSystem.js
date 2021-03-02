import React from 'react';

import OrderedList from '../../common/UI/OrderedList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

// Image
import warningLightIcon from '../../assets/img/icons/dacia-logan-check-engine.gif';

const indicatorFiringReasons = [
  'Закончилось топливо - двигатель будет работать с перебоями',
  'Плохое качество топлива или попадание воды в топливо - двигатель может работать с перебоями',
  'Пробка в заливной горловине неплотно закрыта',
  'Дополнительного глушителя',
  'Движенеи по воде - электрическая система промокла',
];

const OBDSystem = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>
          Система <TextSemibold>OBD-II (On-Board Diagnostics)</TextSemibold>
        </H3>
        <p className='pt-2'>
          Данная модель оснащена системой, контролирующей выбросы автомобиля в
          атмосферу. Эта система предназначена для защиты окружающей среды и
          контроля норм выбросов.
        </p>
      </div>
      <div className='block'>
        <div className='columns is-mobile'>
          <div className='column is-narrow'>
            <figure className='image'>
              <img src={warningLightIcon} alt=''></img>
            </figure>
          </div>
          <div className='column'>
            <p>
              Когда данный индикатор загорается, это означает, что система{' '}
              <TextSemibold>OBD-II</TextSemibold> обнаружина неисправность.
            </p>
          </div>
        </div>
      </div>
      <div className='block'>
        <H4>Возможные причины появления данного индикатора</H4>
        <OrderedList listItems={indicatorFiringReasons} />
      </div>
    </React.Fragment>
  );
};

export default OBDSystem;
