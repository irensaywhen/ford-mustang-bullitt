import React from 'react';

import { transformClassesIntoArray } from '../../../utilities';

const TextSemibold = ({ children, className }) => {
  let classes = ['has-text-weight-semibold'];
  const extraClasses = transformClassesIntoArray(className);

  if (extraClasses instanceof Array) {
    classes = [...classes, ...extraClasses];
  }
  return <span className={classes.join(' ')}>{children}</span>;
};

export default TextSemibold;
