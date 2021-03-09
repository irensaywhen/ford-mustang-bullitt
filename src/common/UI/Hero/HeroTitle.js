import React from 'react';
import { mergeClasses } from '../../../utilities';

const HeroTitle = props => {
  const classes = mergeClasses({
    defaultClasses: 'title has-text-light',
    extraClasses: props.className,
  });
  return <h1 className={classes}>{props.children}</h1>;
};

export default HeroTitle;
