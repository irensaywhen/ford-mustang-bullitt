import React from 'react';

import { mergeClasses } from '../../../utilities';

const H5 = props => {
  const classes = mergeClasses({
    defaultClasses: 'title is-6',
    extraClasses: props.className,
  });
  return (
    <h5 {...props} className={classes}>
      {props.children}
    </h5>
  );
};

export default H5;
