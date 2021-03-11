import React from 'react';
import withMergeClasses from '../../hoc/withMergeClasses';

const H2 = props => {
  return <h2 {...props}>{props.children}</h2>;
};

export default withMergeClasses(H2, 'title is-3');
