import React from 'react';
import { mergeClasses } from '../../../utilities';

const H3 = props => {
  const classes = mergeClasses({
    defaultClasses: 'title is-4',
    extraClasses: props.className,
  });
  return <h3 className={classes}>{props.children}</h3>;
};

export default H3;
