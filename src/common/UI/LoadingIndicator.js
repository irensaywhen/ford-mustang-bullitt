import React from 'react';

import Figure from './Figure/Figure';
import classes from '../../assets/scss/layout/loading-indicator.module.scss';
import spinner from '../../assets/img/spinner.svg';

const LoadingIndicator = () => {
  return (
    <div className={classes.LoadingIndicator}>
      <Figure img={{ src: spinner }} />
    </div>
  );
};

export default LoadingIndicator;
