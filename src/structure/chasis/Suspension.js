import React, { useContext } from 'react';

import Accordion from '../../common/UI/Accordion/Accordion';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

// Wrappers
import DefinitionsWrapper from '../../common/UI/Wrappers/DefinitionsWrapper';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';

import { ModalContext } from '../../context/modal-context';

const faults = [
  {
    title: 'Трещины в раме',
    description:
      'Могут возникать из-за ударов. Соединение сваркой недопустимо, потому что сварные швы имеют другую прочность и могут изменить геометрию автомобиля.',
  },
  {
    title: 'Шум и стуки в подвеске',
    description:
      'Возникают из-за ослабления болтов креплений, износа шарниров, поломки пружин, неисправности амортизатора.',
  },
  {
    title: 'Повышенный и неравномерный износ шин',
    description:
      'Возникает при нарушении углов установки колес, грубого стиля вождения, износа шарниров.',
  },
  {
    title: 'Увод автомобиля в сторону',
    description:
      'Возникает при нарушении углов установки, деформации рычагов передней повески, неодинаковой жесткости пружин, неодинакового давления в шинах',
  },
  {
    title: 'Повышенные вибрации',
    description:
      'Возникают из-за дисбаланса колес, износа деталей подвески, повреждения дисков колес и вздутий на боковине шин.',
  },
];

const definitions = [
  {
    header: 'Зависимая подвеска',
    body:
      'Подвеска, в которой оба колеса одной оси связаны между собой жесткой балкой.',
  },
  {
    header: 'Независимая подвеска',
    body:
      'Подвеска, в которой колеса одной оси автомобиля не связаны жестко друг с другом. При наезде на неровность, одно колесо может менять свое положение независимо от другого.',
  },
  {
    header: 'Упругий элемент подвески',
    body:
      'Служит для смягчений ударов и колебаний, передаваемых от дороги к кузову.',
  },
  {
    header: 'Гасящий элемент подвески - амортизатор',
    body:
      'Необходим для гашения колебаний кузова за счет сопротивления, возникающего при перетекании жидкости через калиброванные ответствия.',
  },
  {
    header: 'Стабилизатор поперечной устойчивости',
    body:
      'Предназначен для повышения управляемости и уменьшения крена автомобиля на поворотах.',
  },
  {
    header: 'Углы установки передних колес (развал-схождение)',
    body:
      'Обеспечивают устойчивое прямолинейное движение автомобиля, уменьшение усилия, прикладываемого к рулевому колесу на повороте, качение передних колес на поворотах без проскальзывания, самовозврат передних колес в прямолинейное положение по окночании поворота, смягчение ударов по подвеске, снятие излишних нагрузок с наиболее ответственных деталей и подшипников.',
  },
];

const Suspension = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <iframe
        title='How suspension work'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/bSNQs3kj2d0'
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
        <H3>Подвеска колес автомобиля</H3>
        <p className='pt-2'>
          Предназначена для смягчения и гашения колебаний, передаваемых от
          неровностей дороги на кузов автомобиля.<br></br>
          Благодаря подвеске колес кузов совершает линейные и угловые колебания,
          определяющие плавность хода автомобиля. Кузов перемещается
          относительно колес, едущих по дороге.<br></br>В данной модели
          использована <TextSemibold>независимая</TextSemibold> подвеска.
        </p>
      </div>
      <div className='block'>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее о принципе работы
        </PrimaryButton>
      </div>

      <div className='block pt-5'>
        <H4 className='pb-3'>Основные неисправности подвески</H4>
        {faultsList}
      </div>
      <div className='block pt-4'>
        <Accordion items={definitions}></Accordion>
      </div>
    </React.Fragment>
  );
};

export default Suspension;
