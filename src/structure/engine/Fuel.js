import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import Card from '../../common/UI/cards/Card';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

const faults = [
  {
    title: 'Подтекание охлаждающей жидкости',
    description: 'Может происходить из различных элементов охлаждающей системы',
  },
  {
    title: 'Заклинивание термостата',
    description:
      'Это может приводить как к перегреву, так и к недогреву охлаждающей жидкости, в зависимости от положения, в котором его заклинит.',
  },
  {
    title: 'Хруст в водяном насосе',
    description: 'Может возникать засчет износа подшипников в нем.',
  },
];

const definitions = [
  {
    header: 'Бедная горючая смесь',
    body: 'На 1 часть топлива приходится более 17 частей воздуха.',
  },
  {
    header: 'Обедненная горючая смесь',
    body:
      'На 1 часть топлива приходится 17 частей воздуха. Режим средних нагрузок (60км/ч)ю Самый экономичный расход топлива при движении.',
  },

  {
    header: 'Нормальная горючая смесь',
    body:
      'Предназначен для поддержания оптимального теплового режима. Позволяет переключаться между двумя кругами, по которым циркулирует охлаждающая жидкость, тем самым либо нагревая, либо охлаждая ее.',
  },
  {
    header: 'Обогащенная горючая смесь',
    body:
      'На 1 часть топлива приходится 12 частей воздуха. Такой состав горючая смесь имеет в режиме холостого хода и в режиме максимальных нагрузок.',
  },
  {
    header: 'Богатая горючая смесь',
    body:
      'На 1 часть топлива приходится менее 12 частей воздуха. Необходима для запуска холодного двигателя.',
  },
];

const forbidden = [
  'Использование дизельного топлива',
  'Использование топлива, имеющего в составе керосин или парафин',
  'Использование топлива с содержанием более 15% этанола или топливо E85',
  'Использование топлива, содержащее метанол',
  'Использование топлива, содержащеее металические присадки',
  'Использование топлива с MMT (присадка)',
];

const warnings = [
  {
    description:
      'Не использовать охлаждающую жидкость в качестве очистителя для лобового стекла.',
  },
  {
    description:
      'Не снимать крышку с резервуара с охлаюждающей жидкостью до полного остужения двигателя. Подождать примерно 10 минут.',
  },
  {
    description:
      'Не наливать охлаждающую жидкость выше максимального допустимого уровня.',
  },
  {
    description:
      'Не смешивать разные охлаждающие жидкости. Использовать Orange Prediluted Antifreeze/Coolant VC-3DIL-B. Если есть необходимость подлить охлаждающую жидкость, но нет необходимой, разбавить в соотношении 50/50 с водой.',
  },
  {
    description:
      'Не снимать крышку с резервуара с охлаюждающей жидкостью до полного остужения двигателя. Подождать примерно 10 минут.',
  },
];

const mantainanceTips = [
  'Контролировать уровень охлаждающей жидкости.',
  'Если есть необходимость подливать больше литра охлаждающей жидкости в месяц, возможно, имеются серьезные потери жидкости.',
  'Охлаждающая жидкость может поменять цвет с оранжевой на розовую или красную. Если жидкость однородная, смена цвета допустима.',
  'В крайнем случае можно долить воду и доехать до сервиса.',
  'Не допускать перегрева двигателя.',
  'У жидкости есть срок службы. Ее необходимо менять.',
];

const recommendations = [
  'Выключить автомобиль перед заправкой',
  'Заправлять одинаковое количество',
];

const conditions = [
  'Увеличение нагрузок на автомобиль увеличивают расход топлива',
  'Увеличение перевозимого веса увеличивают расход топлива',
  'Расход топлива может увеличиться при пониженных температурах',
  'Расход топлива может уви',
];

const Fuel = () => {
  const faultsList = faults.map((fault, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-tools'></i>}
      iconWrapperClasses={['is-1']}
    >
      <h5 className='is-5 has-text-weight-bold'>{fault.title}</h5>
      <p>{fault.description}</p>
    </BulletpointWithIcon>
  ));

  const warningsList = warnings.map((warning, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-exclamation-triangle'></i>}
      iconWrapperClasses={['is-size-1', 'is-1', 'has-text-warning']}
    >
      <p>{warning.description}</p>
    </BulletpointWithIcon>
  ));

  return (
    <React.Fragment>
      <div className='block'>
        <H3>Топливо</H3>
        <p>
          В данной модели используется бензин в качестве топлива. <br></br>
          Бензин может иметь разный <TextSemibold>состав</TextSemibold> и
          состоит из трех основых фракций:
          <TextSemibold>легкой</TextSemibold>,
          <TextSemibold>рабочей</TextSemibold> и{' '}
          <TextSemibold>тяжелой</TextSemibold>. <br></br>
          Легкая фракция влияет на испаряемость бензина, а рабочая фракция
          ответственна за отдачу тепла.
        </p>
        <p className='pt-2'>
          Главной характеристикой бензина является{' '}
          <TextSemibold>октановое число</TextSemibold>, определяющее стойкость
          бензина к детонации. <br></br>
          Чем больше горючая смсь сжимается в процессе работы двигателя, тем
          более должно быть октановое число.
        </p>
        <p className='pt-2'>
          Для увеличения октанового числа используют присадку{' '}
          <TextSemibold>
            Pb(C<sub>2</sub>H<sub>5</sub>)<sub>4</sub>
          </TextSemibold>
          . <br></br>
          Маркировка бензина показывает его стойкость к детонации. Данная модель
          должна быть заправлена бензином с октановым числом не менее{' '}
          <TextSemibold>87</TextSemibold>. Лучше заправлять бензином с октановым
          числом
          <TextSemibold>91</TextSemibold>.
        </p>
      </div>
      <div className='block'>
        <H4 className='has-text-danger'>Запрещается</H4>
        <OrderedList listItems={forbidden} />
      </div>
      <div className='block'>
        <H4>Заправка топливом</H4>
        <p>Существуют общие рекоммендации по заправке автомобиля топливом.</p>
        <OrderedList listItems={recommendations} />
      </div>
      <div className='block'>
        <H4>Потребление топлива</H4>
        <p>
          Автомобиль имеет максимально допустимый объем топлива. Кроме того,
          когда загорается индикатор отпутствия топлива, есть небольшой резерв
          внутри бака.
        </p>
        <OrderedList listItems={conditions} />
      </div>

      <div className='block'>
        <p className='pb-2'>Необходимо соблюдать следующие меры:</p>
        <OrderedList listItems={mantainanceTips} />
      </div>
      <div className='block'>{warningsList}</div>

      <div className='block pt-5'>
        <H4 className='pb-3'>Основные неисправности системы охлаждения</H4>
        {faultsList}
      </div>
      <div className='block pt-4'>
        <Accordion items={definitions}></Accordion>
      </div>
    </React.Fragment>
  );
};

export default Fuel;
