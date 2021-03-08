import React from 'react';
import { mergeClasses } from '../../utilities';

const OrderedList = props => {
  const classes = mergeClasses({
    defaultClasses: 'pl-4',
    extraClasses: props.className,
  });

  const listItems = props.listItems.map((listItem, index) => (
    <li key={index}>{listItem}</li>
  ));
  return <ol className={classes}>{listItems}</ol>;
};

export default OrderedList;
