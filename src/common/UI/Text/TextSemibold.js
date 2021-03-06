import React from 'react';

import withMergeClasses from '../../hoc/withMergeClasses';

const TextSemibold = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

export default withMergeClasses(TextSemibold, 'has-text-weight-semibold');
