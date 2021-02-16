import React from 'react';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';

const Clutch = () => {
  return (
    <div>
      <div className='block'>
        <H3>Сцепление</H3>
        <p>
          Является первым устройством трансмиссии и предназначено для передачи
          крутящего момента от двигателя к первичному валу коробки передач.
        </p>
        <p>
          Чтобы переключение передач происходило плавно, нужно кратковременно
          прекратить передачу крутящего момента с двигателя на коробку передач,
          отделив двигатель от трансмиссии. Сцепление состоит из{' '}
          <span className='has-text-weight-semibold'>привода</span> и{' '}
          <span className='has-text-weight-semibold'>механизма сцепления</span>.
        </p>
      </div>
      <div className='block'>
        <H4>Привод выключения сцепления</H4>
      </div>
    </div>
  );
};

export default Clutch;
