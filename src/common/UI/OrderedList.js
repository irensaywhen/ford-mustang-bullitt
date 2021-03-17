import React from 'react';

import withMergeClasses from '../hoc/withMergeClasses';

const OrderedList = props => {
  const listItems = props.listItems.map((listItem, index) => (
    <li key={index}>{listItem}</li>
  ));
  return <ol {...props}>{listItems}</ol>;
};

export default withMergeClasses(OrderedList, 'pl-4');
