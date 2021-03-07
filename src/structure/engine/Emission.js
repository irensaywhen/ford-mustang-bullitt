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

const parts = [
  'Приемной трубы',
  'Передниго глушителя',
  'Катализатора',
  'Средней трубы',
  'Заднего глушителя',
];

const warnings = [
  {
    description:
      'Не водить машину по сухой траве (и похожим покрытиям). Система выбросов имеет высокие температуры. Такое вождение может стать причиной пожара.',
  },
  {
    description: 'Не чинить систему выброса газов до ее полного остужения.',
  },
  {
    description:
      'Если запах отработанных газов присуствует в кабине, необходимо немедленно предоставить машину в сервис на осмотр.',
  },
];

const catalyticConverterMaintainance = [
  'Использовать только рекомендованное топливо',
  'Не оставаться без топлива',
  'Не выключать зажигание в процессе движения',
  'Не разогревать двигатель более 10 секунд',
  'Do not run the engine with a spark plug lead disconnected.',
  'Do not push-start or tow-start your vehicle. Use booster cables. See Jump Starting the Vehicle (page 207).',
];

const definitions = [
  {
    header: 'Запас хода автомобиля',
    body:
      'Максимальное расстояние, которое может проехать автомобиль на одной заправке топлива',
  },
  {
    header: 'Топливный бак',
    body: 'Емкость для хранения топлива. Располагается сзади автомобиля.',
  },
  {
    header: 'Топливопроводы',
    body:
      'Трубки, предназначенные для доставки бензина от топливного бака до карбюратора.',
  },
  {
    header: 'Топливный фильтр',
    body:
      'Предназначен для тонкой очистки топлива, поступающего к топливному насосу.',
  },
  {
    header: 'Топливный насос',
    body:
      'Предназначен для принудительной подачи топлива из бака в карбюратор. Необходим, так как топливный бак располагается ниже карбюратора.',
  },
  {
    header: 'Воздушный фильтр',
    body:
      'Необходим для очистки воздуха, поступающего в цилиндры двигателя. Устанавливается на верхней части воздушной головины карбюратора.',
  },
  {
    header: 'Карбюратор',
    body:
      'Предназначен для приготовления горючей смеси и подачи ее в цилиндры двигателя. В зависимости от режимов работы двигателя, карбюратор меняет количество горючей смеси, а также соотношение воздуха и бензина в ней.',
  },
  {
    header: 'Нормальная горючая смесь',
    body:
      'Горючая смесь называется нормальной, если на одну часть бензина приходится 15 частей воздуха.',
  },
  {
    header: 'Обедненная горючая смесь',
    body: 'Смесь, где воздуха больше чем 15 частей на 1 часть бензина.',
  },
  {
    header: 'Обогащенная горючая смесь',
    body: 'Смесь, где воздуха меньше чем 15 частей на 1 часть бензина.',
  },
];

const Emission = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <iframe
        title='differential'
        className='has-ratio'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/3mz1BpIE-Ec'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    ));

    modalContext.showModal();
  };

  const warningsList = warnings.map((warning, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-exclamation-triangle'></i>}
      iconWrapperClasses={['is-size-1', 'is-1', 'has-text-warning']}
    >
      <p>{warning.description}</p>
    </BulletpointWithIcon>
  ));

  const catalyticMaintainanceList = catalyticConverterMaintainance.map(
    (precaution, index) => (
      <BulletpointWithIcon
        key={index}
        icon={<i className='fas fa-exclamation-triangle'></i>}
        iconWrapperClasses={['is-size-1', 'is-1', 'has-text-warning']}
      >
        <p>{precaution}</p>
      </BulletpointWithIcon>
    )
  );

  return (
    <React.Fragment>
      <div className='block'>
        <H3>Система выброса отработанных газов</H3>
        <p>
          Предназначена для отвода отработавших газов от цилиндра двигателя, а
          также для уменьшения шума при их выбросе в атмосферу.
        </p>
      </div>
      <div className='block'>
        <H4 className='mb-2'>Состоит из</H4>
        <OrderedList listItems={parts} />
      </div>
      <div className='block'>
        <p>
          При повреждении основного или дополнительного глушителя, потери
          плотности соединений, повреждении прокладок может возникнуть{' '}
          <TextSemibold>повышенный уровень шума выхлопных газов</TextSemibold>.
        </p>
      </div>
      <div className='block'>
        <p>
          Модель имеет катализатор, позволяющий уменьшить вред выхлопных газов
          засчет сахвата образующегося угарного газа. Для того, чтобы увеличить
          срок службы катализатора, нужно придерживаться следующего:
        </p>
      </div>
      <div className='block'>{catalyticMaintainanceList}</div>

      <div className='block'>
        <H4>Предупреждения и безопасность</H4>
      </div>
      <div className='columns'>
        <div className='column is-10-tablet is-offset-1-tablet is-8-desktop is-offset-2-desktop'>
          <div className='block pt-5'>{warningsList}</div>
        </div>
      </div>

      <div className='block'>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
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
        {/*faultsList*/}
      </div>
      <div className='block pt-4'>
        <Accordion items={definitions}></Accordion>
      </div>
    </React.Fragment>
  );
};

export default Emission;
