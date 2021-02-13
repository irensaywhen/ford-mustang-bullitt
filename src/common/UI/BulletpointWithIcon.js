import React from 'react';

import classes from '../../assets/scss/components/icons.module.scss';

const BulletpointWithIcon = props => {
  const iconWrapperClasses =
    typeof props.iconWrapperClasses === 'string'
      ? props.iconWrapperClasses.split(' ')
      : props.iconWrapperClasses;
  const classNames = [
    'column',
    'is-3-mobile',
    'is-2-tablet',
    'is-one-desktop',
    classes.ContainsIcon,
    ...iconWrapperClasses,
  ];
  return (
    <div className='columns is-mobile'>
      <div className={classNames.join(' ')}>{props.icon}</div>
      <div className='column is-9'>{props.children}</div>
    </div>
  );
};

export default BulletpointWithIcon;
