import React from 'react';
import { mergeClasses } from '../../../utilities';

const PrimaryButton = props => {
  const classes = mergeClasses({
    defaultClasses: 'button is-primary',
    extraClasses: props.className,
  });
  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
