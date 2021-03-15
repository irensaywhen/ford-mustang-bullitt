import React, { useContext } from 'react';

import OrderedList from '../../common/UI/OrderedList';
import UnorderedList from '../../common/UI/UnorderedList';
import Accordion from '../../common/UI/Accordion/Accordion';
import Figure from '../../common/UI/Figure/Figure';
import VideoIframe from '../../common/UI/VideoIframe';
import WarningsList from '../../common/UI/WarningsList';

// Text
import H2 from '../../common/UI/Titles/H3';
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import PrimaryButton from '../../common/UI/Buttons/PrimaryButton';
import Block from '../../common/UI/Wrappers/Block';

import { ModalContext } from '../../context/modal-context';

import tireInfo from '../../assets/img/chasis/tire.jpg';

import {
  tiresData,
  tiresQuality,
  replacementWarnings,
  tireParts,
  wheelsAndTiresParts,
  definitions,
} from './data/wheelsAndTires';

const WheelsAndTires = () => {
  const modalContext = useContext(ModalContext);

  const openModal = () => {
    // Set video content
    modalContext.setModalContent(() => (
      <VideoIframe
        title='Tires and wheels'
        src='https://www.youtube.com/embed/SNCroT0v8cE'
      ></VideoIframe>
    ));

    modalContext.showModal();
  };

  return (
    <React.Fragment>
      <Block>
        <H2>Колеса и шины</H2>
        <p className='pt-2'>
          <TextSemibold>Колеса</TextSemibold> принимают крутящий момент от
          двигателя, и за счет сил сцепления с дорогой обеспечивают движение
          автомобиля. Также, колеса воспринимают и сглаживают удары и толчки от
          неровностей дороги. <br></br>
          От шин заисият возможность разгона и торможения, управляемость и
          устойчивость, плавность хода и безопасность автомобиля.
        </p>
        <p className='pt-2'>
          Резина - <TextSemibold>летняя</TextSemibold>. <br></br>
          Маркировка передних шин: <TextSemibold>P255/40R 19</TextSemibold>
          <br></br>
          Маркировка задних шин: <TextSemibold>P275/40R 19</TextSemibold>
        </p>
      </Block>
      <Block>
        <H3>Состоит из:</H3>
        <OrderedList listItems={wheelsAndTiresParts} />
        <p className='pt-2'>
          Для <TextSemibold>шин с камерой</TextSemibold> подходят любые диски.
          Если же шина <TextSemibold>бескамерная</TextSemibold>, то для нее
          нужны специальные диски с уплотнителем на ободе.
        </p>
      </Block>
      <Block>
        <H3>Покрышка состоит из:</H3>
        <OrderedList listItems={tireParts} />
        <p className='pt-2'>
          Рисунок протектора может быть <TextSemibold>дорожным</TextSemibold>,
          <TextSemibold>универсальным</TextSemibold> и{' '}
          <TextSemibold>специальным</TextSemibold>, в зависимости от условий
          эксплуатации автомобиля. <br></br>
          Рисунок протектора обеспечивает безопасность автомобиля и других
          участников дорожного движения. <br></br>
          Зимние покрышки имеют направленный рисунок протектора, то есть они
          должны вращаться только в определенном направлении и подходят либо
          только для левой стороны, либо только для правой.
        </p>
      </Block>
      <Block>
        <H3>Расположение нитей корда</H3>
        <OrderedList listItems={tireParts} />
        <p className='pt-2'>
          Шины бывают с <TextSemibold>диагональным</TextSemibold> и{' '}
          <TextSemibold>радиальным</TextSemibold> расположением нитей корда.
        </p>
        <p className='pt-2'>
          <TextSemibold>В диагональных шинах</TextSemibold> нити корда соединяют
          боковины покрышки по диагонали.
        </p>
        <p className='pt-2'>
          <TextSemibold>А радиальных шинах</TextSemibold> нити корда расположены
          почти под прямым углом по отношению к бортам.
        </p>
        <p className='pt-2'>
          Радиальные шины имеют лучшее сцепление с дорогой, малое сопротивление
          качению. Они более эластичны, чем диагональные, из-за чего поездка
          может быть более комфортной. Однако они менее прочные в боковинах.
        </p>
      </Block>
      <Block>
        <PrimaryButton onClick={openModal}>
          Узнать подробнее об общем устройстве шин
        </PrimaryButton>
      </Block>
      <Block>
        <H3>Маркировка шин</H3>
        <H4 className='pt-4'>Качество шин</H4>
        <p>
          Маркировка, характеризующее качество, может быть найдена на боковой
          поверхности шины. <br></br>
          Она может иметь следующую форму:{' '}
          <TextSemibold>Treadwear 200 Traction AA Temperature A</TextSemibold>.
          <br></br>
          Данные характеристики не применимы к зимним шинам.
        </p>
        <OrderedList listItems={tiresQuality} />
      </Block>
      <Block>
        <div className='columns'>
          <div className='column'>
            <H4 className='pt-4'>Общие характеристики шин</H4>
            <p>
              Эти характеристики служат для описания различных элементов шин.
              Маркировка также может быть найдена на боковой поверхности.
              <br></br>
              Буква <TextSemibold>P</TextSemibold> перед основной маркировкой
              может отсутствовать (зависит от страны изготовителя). <br></br>
              Она говорит о том, что данная шина предназначена для легковых
              автомобилей.
            </p>
          </div>
          <div className='column'>
            <Figure img={{ src: tireInfo }} />
          </div>
        </div>
        <UnorderedList listItems={tiresData} />
      </Block>
      <Block>
        <H3>Замена шин</H3>

        <Block>
          <WarningsList warnings={replacementWarnings} />
        </Block>
      </Block>

      <Block>
        <H3>Летняя резина</H3>
        <p className='pt-2'>
          Летняя резина предоставляет улучшенное сцепление с дорогой на мокром и
          сухом покрытиях и не имеет <TextSemibold>M + S</TextSemibold>{' '}
          маркировки на боковой поверхности.<br></br>
          Не рекомендуется использовать летнюю резину, когда температура
          опускается ниже <TextSemibold>7 градусов цельсия</TextSemibold> или на
          снегу со льдом.
        </p>
        <p className='pt-2'>
          Хранить летнюю резину нужно в помещении при температуре выше{' '}
          <TextSemibold>-7 градусов</TextSemibold>. Материалы, используемые в
          летней резине теряют эластичность бли более низких температурах, что
          может приводить к возникновению трещин. <br></br>
          Если летняя резина была подвержена более низким температурам, ее нужно
          прогревать при минимальной температуре{' '}
          <TextSemibold>5 градусов</TextSemibold> на протяжении 24 часов перед
          установкой.
        </p>
        <p className='pt-2'>
          Нельзя хранить резину рядом с обогревателями помещений или направлять
          горячий воздух на нее. <br></br> Если шина хранилась перед установкой,
          ее необходимо проверить на предмет дефектов.
        </p>
      </Block>
      <Block>
        <H3>Зимняя резина</H3>
        <p className='pt-2'>
          Можно использовать как универсальную, так и зимнюю резину. При этом
          характеристики должны совпадать с изначально представленными. Хранить
          зимнюю резину рекомендуется при температуре{' '}
          <TextSemibold>10 - 25 градусов</TextSemibold> в сухом затемненном
          помещении.
        </p>
      </Block>

      <Block>
        <H3>Поломки на дорогах</H3>
        <p className='pt-2'>
          Независимо от аккуратности вождения, прокол шины может случиться
          всегда. <br></br>В случае прокола шины на дороге, необходимо уехать с
          оживленного движения в безопасное место. Это может сильнее повредить
          шину, но наша безопасность важнее. <br></br>
          Если почувствовалась внезапная вибрация во время поездки, необходимо
          немедленно снизить скорость и выехать с дороги. <br></br>
          После выезда с дороги необходимо осмотреть шины на предмет прокола и,
          в случае наличия такого, заменить шину.
        </p>
      </Block>

      <Block>
        <Accordion items={definitions}></Accordion>
      </Block>
    </React.Fragment>
  );
};

export default WheelsAndTires;
