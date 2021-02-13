import React from 'react';
import Feature from './Feature';

const FeaturesList = ({ featuresList }) => {
  const features = featuresList.map((feature, index) => (
    <div className='column'>
      <Feature key={index} {...feature} />
    </div>
  ));
  return <div className='columns'>{features}</div>;
};

export default FeaturesList;
