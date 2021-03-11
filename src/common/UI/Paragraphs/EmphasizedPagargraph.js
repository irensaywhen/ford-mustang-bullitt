import React from 'react';
import withMergeClasses from '../../hoc/withMergeClasses';

const EmphasizedPagargraph = props => {
  return <p {...props}>{props.children}</p>;
};

export default withMergeClasses(EmphasizedPagargraph, 'has-text-emphasized');
