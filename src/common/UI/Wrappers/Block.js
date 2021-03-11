import React from 'react';
import withMergeClasses from '../../hoc/withMergeClasses';

const Block = props => {
  return <div {...props}>{props.children}</div>;
};

export default withMergeClasses(Block, 'block');
