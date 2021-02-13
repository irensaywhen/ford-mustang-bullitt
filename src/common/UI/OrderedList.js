import React from 'react';

const OrderedList = props => {
  const listItems = props.listItems.map((listItem, index) => (
    <li key={index}>{listItem}</li>
  ));
  return <ol className='pl-4'>{listItems}</ol>;
};

export default OrderedList;
