import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

import dipstick from '../../assets/img/engine/dipstick.png';

const faults = [
  {
    title: 'Подтекание масла',
    description:
      'Может возникать из-за избыточного давления, слабо затянутой сливной пробки в поддоне, повреждения уплотнительных прокладок и маслопроводов, износа сальников.',
  },
  {
    title: 'Низкое давление в системе смазки',
    description:
      'Может возникать по причине недостаточного количества масла, некачественного масла, износа подшипников и деталей масляного насоса',
  },
];

const definitions = [
  {
    header: 'Поддон картера',
    body:
      'Является резервуаром для хранения масла. Когда масло заливается через маслозаливную горловину, оно проходит по пустотам внутри двигателя и опускается в поддон картера. Уровень можно измерить масляным щупом.',
  },
  {
    header: 'Масляный насос',
    body:
      'Под давлением подает масло к элементам двигателя. Состоит из двух шестерен и приводится в действие от коленчатого вала двигателя. При вращении шестерен зубья захватывают масло и нагнетают его в главную маслянную магистраль. Имеет фильтр для предотвращеняи попадания в масло частиц. ',
  },
  {
    header: 'Редукционный клапан',
    body:
      'Служит для ограничения давления в системе и сливает лишнее масло из трубок в картер.',
  },
  {
    header: 'Масляный фильтр',
    body:
      'Служит для очистки проходящего через него масла от механических примесей. Устанавливается сразу после насоса. В случае засорения масло будет проходить без очистки.',
  },
  {
    header: 'Вентилятор картера двигателя',
    body:
      'Обеспечивает отсос из картера и отвод во впускной трубопровод паров бензина и выхлопных газов, которые попадают в нижнюю часть двигателя.',
  },
  {
    header: 'Радиатор',
    body: 'Служит для охлаждения масла.',
  },
];

const lubricationSystemParts = [
  'Поддона картера',
  'Масляного насоса с маслоприемником',
  'Масляного фильтра',
  'Редукционного клапана',
  'Каналов для подачи масла',
  'Вентилятор картера двигателя',
  'Радиатора',
];

const oilCheckProcedure = [
  'Включить стояночный тормоз',
  'Включить двигатель и дождаться, пока он прогреется',
  'Выключить двигатель и подождать 15 минут, чтобы масло стекло в картер',
  'Открыть капот',
  'Достать щуп, протереть его, провести измерение и убедиться, что уровень масла между максимальной и минимальной отметками',
];

const Lubrication = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <iframe
        title='How lubrcation system work'
        width='560'
        height='315'
        className='has-ratio'
        src='https://www.youtube.com/embed/Y7NZBJ1w5PI'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    ));

    modalContext.showModal();
  };

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

  return (
    <React.Fragment>
      <div className='block'>
        <H3>Система смазки</H3>
        <p>
          Предназначена для подачи масла к трущимся деталям, их частичного
          охлаждения и удаления продуктов износа.
        </p>
      </div>
      <div className='block'>
        <H4>Состоит из:</H4>
        <OrderedList listItems={lubricationSystemParts} />
        <p className='pt-2'>
          В системе охлаждения имеется два круга циркуляции охлаждающей
          жидкости. Один предназначен для скорейшего прогрева охлаждающей
          жидкости, когда двигатель начинает работу, другой - для его охдаждения
          в процессе работы.
        </p>
      </div>
      <div className='block'>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
      </div>
      <div className='block'>
        <H4>Контроль уровня масла</H4>
        <p>
          Для нормальной работы двигателя необходимо следить за уровнем и
          давлением масла. <br></br>В случае{' '}
          <TextSemibold>недостатка</TextSemibold> давления масла, детали
          двигателя могут претерпеть серьезные повреждения. <br></br>В случае
          избыточного давление может происходить подтекание масла.<br></br>
          Для данной модели рекомендуют использовать масло{' '}
          <TextSemibold>
            Motorcraft SAE 5W-30 Premium Synthetic Blend Motor Oil XO-5W30-QSP
          </TextSemibold>
          .
        </p>
      </div>
      <div className='block'>
        <H4>Как проверить уровень масла</H4>
        <p className='pt-2'>
          Для проверки уровня масла существует специальный измерительный щуп,
          имеющий отметки минимально и максимально допустимых уровней масла.
        </p>
      </div>
      <div className='block'>
        <div className='columns'>
          <div className='column is-6'>
            <OrderedList listItems={oilCheckProcedure} />
          </div>
          <div className='column is-6'>
            <figure className='image'>
              <img src={dipstick} alt=''></img>
            </figure>
          </div>
        </div>
      </div>

      <div className='block'>
        <H4>Масляные фильтры</H4>
        <p>
          Помимо контроля за уровней масла, необходимо также регулярно менять
          масляные фильтры.
        </p>
      </div>

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

export default Lubrication;
