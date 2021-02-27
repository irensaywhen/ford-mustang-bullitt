import React from 'react';
import Feature from './Feature';

const FeaturesList = ({ featuresList }) => {
  const features = featuresList.map((feature, index) => (
    <div className='column' key={index}>
      <Feature {...feature} />
    </div>
  ));
  return <div className='columns'>{features}</div>;
};

export default FeaturesList;
