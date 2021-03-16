import React from 'react';

import Block from '../../common/UI/Wrappers/Block';
import WarningsList from '../../common/UI/WarningsList';

// Text
import H3 from '../../common/UI/Titles/H3';

import TextSemibold from '../../common/UI/Text/TextSemibold';

// data
import { warnings } from './data/wipersAndWashers';

const WipersAndWashers = () => {
  return (
    <React.Fragment>
      <Block>
        <H3>Дворники и Стеклоочиститель</H3>
        <p>
          Предназначены для очищения лобового стекла. Для данной модели
          рекомендуется использовать{' '}
          <TextSemibold>
            Premium Windshield Wash Concentrate with Bitterant ZC-32-B2
          </TextSemibold>
        </p>
      </Block>
      <Block>
        <WarningsList warnings={warnings} />
      </Block>
    </React.Fragment>
  );
};

export default WipersAndWashers;
