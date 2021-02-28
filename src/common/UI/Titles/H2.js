import React from 'react';
import { mergeClasses } from '../../../utilities';

const H2 = props => {
  const classes = mergeClasses({
    defaultClasses: 'title is-3',
    extraClasses: props.className,
  });

  return (
    <h2 {...props} className={classes}>
      {props.children}
    </h2>
  );
};

export default H2;
