import React from 'react';

import withMergeClasses from '../hoc/withMergeClasses';

const OrderedList = ({ className, listItems }) => {
  const liItems = listItems.map((listItem, index) => (
    <li key={index}>{listItem}</li>
  ));

  return <ol className={className}>{liItems}</ol>;
};

export default withMergeClasses(OrderedList, 'pl-4');
