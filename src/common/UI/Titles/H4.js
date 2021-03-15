import React from 'react';
import withMergeClasses from '../../hoc/withMergeClasses';

const H4 = props => {
  return <h4 {...props}>{props.children}</h4>;
};

export default withMergeClasses(H4, 'title is-5 mb-3');
