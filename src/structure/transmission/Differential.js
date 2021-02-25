import React from 'react';

import OrderedList from '../../common/UI/OrderedList';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

const mainJointParts = ['Ведущей шестерни', 'Ведомой шестерни'];

const faults = [
  {
    title: 'Шум при движении на большой скорости',
    description:
      'Возникает из-за износа шестерен, их неправильной регулеровке, или в случае отсутствия масла в картере главной передачи.',
  },
  {
    title: 'Подтекание масла',
    description:
      'Может быть через сальники, неплотные соединения, в случае залипания сапуна.',
  },
];

const Differential = () => {
  const faultsList = faults.map((fault, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-tools'></i>}
      iconWrapperClasses={['is-size-3', 'is-1']}
    >
      <h5 className='is-5 has-text-weight-bold'>{fault.title}</h5>
      <p>{fault.description}</p>
    </BulletpointWithIcon>
  ));

  return (
    <React.Fragment>
      <div className='block'>
        <H3>Главная передача</H3>
        <p>
          Предназначена для увеличения крутящего момента и передачи его на
          полуоси колес под углом 90 градусов.
        </p>
      </div>
      <div className='block'>
        <H4 className='mb-2'>Состоит из</H4>
        <OrderedList listItems={mainJointParts} />
      </div>
      <div className='block'>
        <H3>Дифференциал</H3>
        <p>
          Предназначен для распределения крутящего момента между полуосями
          ведущих колес при повороте автомобиля и при движении по неровностям
          дороги. Это позволяет колесам вращаться с разной угловой скоростью и
          проходить неодинаковый путь бес проскальзывания относительно покрытия
          дороги.
        </p>
      </div>
      <div className='block'>
        <H4>Главная передача и дифференциал</H4>
        <p>
          Работают вместе. Главная передача способствует передаче крутящего
          момента под углом, а дифференциал позволяет распределять крутящий
          момент в определенной пропорции, избавляя от заносов.
        </p>
      </div>

      <div className='block pt-5'>
        <H4>Основные неисправности главной передачи и дифференциала</H4>
        <p className='pb-5'>
          Для увеличения срока службы главной передачи и дифференциала,
          необходимо следить за <TextSemibold>уровнем масла</TextSemibold> в
          заднем картере.<br></br> Также необходимо избегать резкого старта и
          торможения, грубого включения сцепления.
          <br></br>
          Кроме того, картер всегда должен иметь связь с атмосферой через{' '}
          <TextSemibold>сапун</TextSemibold>, чтобы избежать повышения давления
          и частого вытекания масла.
        </p>
        {faultsList}
      </div>
    </React.Fragment>
  );
};

export default Differential;
