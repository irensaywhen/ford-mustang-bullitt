import React from 'react';

// Text
import H3 from '../../common/UI/Titles/H3';

// image
import seatBelts from '../../assets/img/safety/seatbelts.png';

const Seatbelts = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>Ремни безопасности</H3>
        <p>
          Данная модель оборудована трехточечными инерционными ремнями
          безопасности. <br></br>
          Все пассажиры и водитель должны быть пристегнуты ремнями безопасности
          во время движения.<br></br>
          Недопустимо ехать с ребенком на руках, поскольку человек не может
          защитить ребенка при аварии. <br></br>
          Для поездок с детьми необходимо иметь специальные кресла, вместе с
          которыми дети могут быть пристегнуты.
        </p>
      </div>
      <div className='block'>
        <div className='columns'>
          <div className='column'>
            <figure className='image'>
              <img src={seatBelts} alt=''></img>
            </figure>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Seatbelts;
