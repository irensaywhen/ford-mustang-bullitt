import React from 'react';

import { transformClassesIntoArray } from '../../../utilities';

const H4 = ({ children, className }) => {
  const extraClasses = transformClassesIntoArray(className);

  let classes = ['title', 'is-5'];

  if (extraClasses instanceof Array) {
    classes = [...classes, ...extraClasses];
  }
  return <h4 className={classes.join(' ')}>{children}</h4>;
};

export default H4;
