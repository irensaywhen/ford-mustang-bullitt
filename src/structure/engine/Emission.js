import React from 'react';

import OrderedList from '../../common/UI/OrderedList';
import BulletpointWithIcon from '../../common/UI/BulletpointWithIcon';
import Block from '../../common/UI/Wrappers/Block';
import WarningsList from '../../common/UI/WarningsList';

// Text
import H3 from '../../common/UI/Titles/H3';
import H4 from '../../common/UI/Titles/H4';
import TextSemibold from '../../common/UI/Text/TextSemibold';

import {
  parts,
  warnings,
  catalyticConverterMaintainance,
} from './data/emission';

const Emission = () => {
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
      <Block>
        <H3>Система выброса отработанных газов</H3>
        <p>
          Предназначена для отвода отработавших газов от цилиндра двигателя, а
          также для уменьшения шума при их выбросе в атмосферу.
        </p>
      </Block>
      <Block>
        <H4>Состоит из</H4>
        <OrderedList listItems={parts} />
      </Block>
      <Block>
        <p>
          При повреждении основного или дополнительного глушителя, потери
          плотности соединений, повреждении прокладок может возникнуть{' '}
          <TextSemibold>повышенный уровень шума выхлопных газов</TextSemibold>.
        </p>
      </Block>
      <Block>
        <p>
          Модель имеет катализатор, позволяющий уменьшить вред выхлопных газов
          засчет сахвата образующегося угарного газа. Для того, чтобы увеличить
          срок службы катализатора, нужно придерживаться следующего:
        </p>
      </Block>
      <Block>{catalyticMaintainanceList}</Block>

      <Block>
        <H4>Предупреждения и безопасность</H4>
        <p>
          Для того чтобы сохранить свою жизнь и здоровье, нужно помнить о
          следующих мерах предосторожности:
        </p>
      </Block>
      <Block>
        <WarningsList warnings={warnings} />
      </Block>
    </React.Fragment>
  );
};

export default Emission;
