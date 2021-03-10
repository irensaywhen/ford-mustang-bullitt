import React from 'react';

// Text
import H3 from '../../common/UI/Titles/H3';

import TextSemibold from '../../common/UI/Text/TextSemibold';

const ETP = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>ESP - Electronic traction control</H3>
        <p>
          Электронная система регулировки тягового усилия ETS является
          автоматической системой для предотвращения пробуксовки ведущих колес
          во время начала движения, разгона, движения по прямой и в поворотах.
          <br></br>
          Принцип ее работы основан на том, что в случае пробуксовки, система
          автоматически применяет тормоза к отдельным колесам и уменьшает
          обороты двигателя.
        </p>
      </div>
      <div className='block'>
        <p>
          Эта система автоматически включается при включении зажигания.{' '}
          <br></br>В случае, если машина застряла в снегу или грязи, необходимо{' '}
          <TextSemibold>выключить</TextSemibold> противобуксовочную систему.
        </p>
      </div>
    </React.Fragment>
  );
};

export default ETP;
