import React from 'react';

import OrderedList from '../../common/UI/OrderedList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import H5 from '../../common/UI/Titles/H5';
import TextSemibold from '../../common/UI/Text/TextSemibold';

// Image
import cruiseControlSwitchers from '../../assets/img/safety/cruise-control.png';

const setCruiseControlSpeed = [
  'Разогнаться до предпочтительной скорости',
  'Нажать SET+ или SET-',
  'Убрать ногу с педали газа',
  'Индикатор поменяет цвет на дисплее',
];

const changeCruiseControlSpeed = [
  'Нажать SET+ или SET- для того чтобы регулировать выставленную скорость малыми шагами',
  'Нажать педаль газа или педаль тормоза до желаемой скорости, затем нажать SET+ или SET-',
  'Зажать SET+ или SET- чтобы менять скорость большими шагами',
];

const CruiseControl = () => {
  return (
    <React.Fragment>
      <div className='block'>
        <H3>Круиз контроль</H3>
        <p>
          Система круз контроля позволяет поддерживать определенную скорость не
          держа ногу на педали газа. <br></br>Использовать систему круиз
          контроля можно при скорости <TextSemibold>выше 30 км/ч</TextSemibold>.
        </p>
      </div>
      <div className='block'>
        <H4 className='pb-2'>Управление системой круиз контроля</H4>
        <div className='columns'>
          <div className='column is-6'>
            Для включения системы круиз контроля необходимо нажать на кнопку{' '}
            <TextSemibold>ON</TextSemibold>. Панель управления находится на
            рулевом колесе. Для отключения нажать{' '}
            <TextSemibold>CNCL</TextSemibold>. Для того чтобы вернуться в режим
            нужна кнопка <TextSemibold>RES</TextSemibold>. Выставленная скорость
            при этом не удаляется. Для отключения системы нужно нажать на{' '}
            <TextSemibold>OFF</TextSemibold>.
          </div>
          <div className='column is-6'>
            <figure className='image'>
              <img src={cruiseControlSwitchers} alt=''></img>
            </figure>
          </div>
        </div>
      </div>

      <div className='block'>
        <H5>Выставление скорости</H5>
        <OrderedList listItems={setCruiseControlSpeed} />
      </div>

      <div className='block'>
        <H5>Изменение выставленной скорости</H5>
        <p>
          Поменять выставленную скорость можно несколькими разными способами.
        </p>
        <OrderedList listItems={changeCruiseControlSpeed} />
      </div>
    </React.Fragment>
  );
};

export default CruiseControl;
