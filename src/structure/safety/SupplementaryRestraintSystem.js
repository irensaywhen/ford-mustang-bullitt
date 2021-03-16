import React from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';
import WarningsList from '../../common/UI/WarningsList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import H5 from '../../common/UI/Titles/H5';

// Images
import frontAirbag from '../../assets/img/safety/front-airbag.png';
import sideAirbag from '../../assets/img/safety/side-airbag.png';
import safetyCanopy from '../../assets/img/safety/safety-canopy.png';

import {
  warnings,
  detectingFromntPassengerSteps,
} from './data/supplementaryRestraintSystem';

const SupplementaryRestraintSystem = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>Подушки безопасности</H3>
        <p>
          Являются частью пассивной безопасности и должны быть использованы
          вместе с ремнями безопасности. <br></br>
          При срабатывании подушек безопасности, будет слышен громкий хлопок.
          Также может появиться порошок в воздухе. Это нормальное поведение
          системы.<br></br>
          Подушки безопасности водителя и переднего пассажира срабатывают при
          серьезных лобовых и боковых столкновениях.
        </p>
      </Block>
      <Block>
        <H4>Система детектирования впереди сидящего пассажира</H4>

        <div className='columns is-mobile'>
          <div className='column is-9'>
            <p className='pt-2'>
              Данная система определяет наличие впереди сидящего пассажира и
              необходимость срабатывания его подушки безопасности. <br></br>
              Индикатор системы кратковременно загорается при включении
              зажигания.
            </p>
          </div>
          <div className='column is-3'>
            <Figure img={{ src: frontAirbag }} />
          </div>
        </div>
      </Block>
      <Block>
        <p>
          Если пассажир сидит на переднем сидении, но система вылючена, это
          может означать, что пассажир сидит неправильно. <br></br>
        </p>
      </Block>
      <Block>
        <H5>
          В таком случае необходимо выполнить следующую последовательность
          действий:
        </H5>
        <OrderedList listItems={detectingFromntPassengerSteps} />
      </Block>
      <Block>
        <H4>Боковые подушки безопасности</H4>
        <div className='columns'>
          <div className='column is-7'>
            <p className='pt-2'>
              Данные подушки безопасности могут срабатывать при боковых
              столкновениях.
            </p>
          </div>
          <div className='column is-5'>
            <Figure img={{ src: sideAirbag }} />
          </div>
        </div>
      </Block>
      <Block>
        <H4>Коленные подушки безопасности</H4>
        <p>
          Коленная подушка безопасности водителя расположена под приборной
          панелью. <br></br>
          Коленная подушка безопасности впереди сидящего пассажира расположена
          под бардачком.
        </p>
      </Block>
      <Block>
        <H4>Навесные подушки безопасности</H4>
        <div className='columns'>
          <div className='column is-7'>
            <p className='pt-2'>
              Данные подушки безопасности могут срабатывать при боковых
              столкновениях и в случае вероятности переворота автомобиля.
            </p>
          </div>
          <div className='column is-5'>
            <Figure img={{ src: safetyCanopy }} />
          </div>
        </div>
      </Block>
      <Block>
        <H4>Предостережения, касающиеся подушек безопасности:</H4>
      </Block>
      <Block>
        <WarningsList warnings={warnings} />
      </Block>
    </React.Fragment>
  );
};

export default SupplementaryRestraintSystem;
