import React from 'react';

import H3 from './Titles/H3';
import BulletpointWithIcon from './BulletpointWithIcon';

const FaultsList = props => {
  const iconWrapperClasses = props.iconWrapperClasses || [];

  const faultsList = props.faults
    .sort((fault1, fault2) => {
      if (fault1.critical) {
        return 1;
      } else if (fault1.critical && fault2.critical) {
        return 0;
      }

      return -1;
    })
    .map((fault, index) => {
      if (fault.critical) {
        iconWrapperClasses.push('has-text-danger');
      }
      return (
        <BulletpointWithIcon
          key={index}
          icon={<i className='fas fa-tools'></i>}
          iconWrapperClasses={iconWrapperClasses}
        >
          <H3>{fault.title}</H3>
          <p>{fault.description}</p>
        </BulletpointWithIcon>
      );
    });
  return faultsList;
};

export default FaultsList;
