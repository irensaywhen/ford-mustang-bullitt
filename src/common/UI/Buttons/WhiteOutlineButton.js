import React from 'react';
import { mergeClasses } from '../../../utilities';

const WhiteOutlineButton = props => {
  const classes = mergeClasses({
    defaultClasses: 'button is-white is-outlined',
    extraClasses: props.className,
  });
  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};

export default WhiteOutlineButton;
