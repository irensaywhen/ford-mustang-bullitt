import React from 'react';

import classes from '../../assets/scss/components/icons.module.scss';

const BulletpointWithIcon = props => {
  let iconWrapperClasses = [];

  if (props.iconWrapperClasses === 'string') {
    iconWrapperClasses = props.iconWrapperClasses.split(' ');
  } else if (props.iconWrapperClasses instanceof Array) {
    iconWrapperClasses = props.iconWrapperClasses;
  }

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
      <div className='column is-9 is-flex is-flex-direction-column is-justify-content-center'>
        {props.children}
      </div>
    </div>
  );
};

export default BulletpointWithIcon;
