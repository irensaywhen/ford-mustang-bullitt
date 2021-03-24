import React from 'react';

import withMergeClasses from '../../hoc/withMergeClasses';

const TextEmphasized = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

export default withMergeClasses(TextEmphasized, 'has-text-emphasized');
