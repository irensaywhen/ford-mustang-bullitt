import React from 'react';
import { mergeClasses } from '../../utilities';

const UnorderedList = props => {
  const classes = mergeClasses({
    extraClasses: props.className,
  });

  const listItems = props.listItems.map((listItem, index) => (
    <li key={index}>{listItem}</li>
  ));
  return <ul className={classes}>{listItems}</ul>;
};

export default UnorderedList;
