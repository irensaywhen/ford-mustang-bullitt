import React from 'react';
import BulletpointWithIcon from './BulletpointWithIcon';

const WarningsList = props => {
  console.log(props.warnings);
  const warningsList = props.warnings.map((warning, index) => (
    <BulletpointWithIcon
      key={index}
      icon={<i className='fas fa-exclamation-triangle'></i>}
      iconWrapperClasses={['is-size-1', 'is-1', 'has-text-warning']}
    >
      <p>{warning.description}</p>
    </BulletpointWithIcon>
  ));
  return warningsList;
};

export default WarningsList;
