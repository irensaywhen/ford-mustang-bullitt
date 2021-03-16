import React from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';
import motorParts from '../../assets/img/motor-parts.png';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import charging from '../../assets/img/electronics/charging.jpg';

// data
import { chargeBatterySteps } from './data/battery';

const Battery = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>Аккумуляторная батарея</H3>
        <p>
          Предназначена для питания потребителей электрическим током при{' '}
          <TextSemibold>неработающем двигателе</TextSemibold> и при его работе
          на <TextSemibold>малых оборотах</TextSemibold>.<br></br>
          Расположена в моторном отсеке и крепится на специальной полке.
          <br></br>
          Минус аккумуляторной батареи соединен с кузовом. Плюс соединяется с
          электрической цепью потребителей тока. <br></br>
          Аккумуляторные батареи на легковых автомобилях имеют{' '}
          <TextSemibold>6</TextSemibold> аккумуляторов, каждый из которых выдет
          напряжение <TextSemibold>2В</TextSemibold>. Суммарное напряжение
          составляет <TextSemibold>12В</TextSemibold>.<br></br>
          Аккумуляторная батарея данной модели имееет следующую маркировку:{' '}
          <br></br>
          <TextSemibold>BXT-96R-590</TextSemibold>.<br></br>
        </p>

        <p className='pt-2'>
          Каждая из батарей внутри имеет две клеммы, а также раствор
          электролита, представляющий из себя смесь дистилированной воды и
          серной кислоты. При зарядке и разрятке батареи происходит обратимая
          химическая реакция образования и растворения{' '}
          <TextSemibold>
            PbSO<sub>4</sub>
          </TextSemibold>
          . <br></br>
          Стоит обратить внимание, что аккумуляторная батарея содержит в себе
          токсичные и ядовитые соединения.
        </p>
      </Block>
      <Block>
        <div className='columns'>
          <div className='column is-8'>
            <Figure img={{ src: motorParts }} />
          </div>
          <div className='column is-4'>
            <p>
              Расположение батареи указано буквой <TextSemibold>А</TextSemibold>{' '}
              (под крышкой).<br></br>
            </p>
          </div>
        </div>
      </Block>
      <Block>
        <H4>
          Заряд аккумуляторной батареи методом{' '}
          <TextSemibold>прикуривания</TextSemibold>
        </H4>
        <p>
          Данная модель снабжена батареей, которая не нуждается в эксплуатации.
          Однако, могут возникнуть ситуации, когда возникнет необходимость
          заряжать аккумуляторную батарею. <br></br>
          Может возникнуть множество ситуаций, в результате которых батарея
          может разрядиться. <br></br>Данная модель снабжена батарейным щитом,
          который необходимо будет снимать при данной операции.
        </p>
      </Block>
      <Block>
        <H4>Последовательность действий следующая:</H4>
        <OrderedList listItems={chargeBatterySteps} />
      </Block>
      <Block>
        <div className='columns'>
          <div className='column is-5'>
            <Figure img={{ src: charging }} />
          </div>
          <div className='column is-7'>
            На рисунке изображена схема соединения автомобилей для{' '}
            <TextSemibold>прикуривания</TextSemibold>.<br></br>
            <TextSemibold>1</TextSemibold> - автомобиль с разряженным
            аккумулятором.<br></br>
            <TextSemibold>2</TextSemibold> автомобиль с заряженным аккумулятором
          </div>
        </div>
      </Block>
    </React.Fragment>
  );
};

export default Battery;
