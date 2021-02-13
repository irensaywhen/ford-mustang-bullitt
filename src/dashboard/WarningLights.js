import React from 'react';

import Section from '../common/UI/Section';
import warningLightsImage from '../assets/img/dacia-logan-dashboard-warning-lights.jpg';
import WarningLightsList from './WarningLightsList';

import criticalWarnings from './warningLights/data/criticalWarnings';
import nonCriticalWaningLights from './warningLights/data/nonCriticalWarnings';
import lightningSymbols from './warningLights/data/lightningSymbols';
import commonSymbols from './warningLights/data/commonSymbols';

const WarningLights = () => {
  return (
    <Section className='WarningLightsSection'>
      <div className='block'>
        <figure className='image is-flex is-justify-content-center'>
          <img src={warningLightsImage} alt='' />
        </figure>
      </div>

      <div className='block'>
        <h1 className='title has-text-centered'>
          Индикаторы на панели Renault Logan
        </h1>
      </div>

      <WarningLightsList
        listTitle='Индикаторы серьезных поломок'
        warningsList={criticalWarnings}
      />

      <WarningLightsList
        listTitle='Предупреждающие и информационные индикаторы'
        warningsList={nonCriticalWaningLights}
      />

      <WarningLightsList
        listTitle='Световые индикаторы'
        warningsList={lightningSymbols}
      />

      <WarningLightsList
        listTitle='Индикаторы общего назначения'
        warningsList={commonSymbols}
      />
    </Section>
  );
};

export default WarningLights;
