import React from 'react';

import OrderedList from '../../common/UI/OrderedList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

const stabilityControlSystemParts = [
  'Traction Control',
  'ESP - Electronic Stability Control',
];

const StabilityControl = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>Stability Control System</H3>
        <p>
          Это электронная система динамической стабилизации автомобиля. Система
          создана для помощи при вождении автомобиля. Ее основная задача –
          сохранение курсовой устойчивости, то есть она должна помогать
          предотвращать занос и боковое скольжение в критических ситуациях.
          <br></br> Эта система автоматически включается при включении
          зажигания.
        </p>
        <p>
          Эта система может применять тормоза к отдельным колесам, а также
          уменьшать обороты двигателя автоматически.
        </p>
      </div>
      <div className='block'>
        <p></p>
      </div>
      <div className='block'>
        <H4>Состоит из:</H4>
        <OrderedList listItems={stabilityControlSystemParts} />
      </div>
      <div className='block'>
        <H4>ESP - Electronic Stability Control</H4>
        <p className='pt-2'>
          Эта система отвечает за сохранение автомобилем заданной водителем
          траектории движения в поворотах или при маневрах.
        </p>
      </div>
      <div className='block'>
        <H4>Electronic Traction Control</H4>
        <p className='pt-2'>
          Электронная система регулировки тягового усилия ETS является
          автоматической системой для предотвращения пробуксовки ведущих колес
          во время начала движения, разгона, движения по прямой и в поворотах.
          <br></br>
          Принцип ее работы основан на том, что в случае пробуксовки, система
          автоматически применяет тормоза к отдельным колесам и уменьшает
          обороты двигателя.<br></br>В случае, если машина застряла в снегу или
          грязи, необходимо <TextSemibold>выключить</TextSemibold>{' '}
          противобуксовочную систему.
        </p>
      </div>
    </React.Fragment>
  );
};

export default StabilityControl;
