import React from 'react';

import Block from '../../common/UI/Wrappers/Block';
import Figure from '../../common/UI/Figure/Figure';

// Text
import H3 from '../../common/UI/Titles/H3';

// image
import seatBelts from '../../assets/img/safety/seatbelts.png';

const Seatbelts = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>Ремни безопасности</H3>
        <p>
          Данная модель оборудована трехточечными инерционными ремнями
          безопасности. <br></br>
          Все пассажиры и водитель должны быть пристегнуты ремнями безопасности
          во время движения.<br></br>
          Недопустимо ехать с ребенком на руках, поскольку человек не может
          защитить ребенка при аварии. <br></br>
        </p>
      </Block>
      <Block>
        <div className='columns'>
          <div className='column'>
            <Figure img={{ src: seatBelts }} />
          </div>
        </div>
      </Block>
    </React.Fragment>
  );
};

export default Seatbelts;
