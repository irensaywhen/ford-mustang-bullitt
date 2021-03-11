import React from 'react';

import Img from './Img';
import withMergeClasses from '../../hoc/withMergeClasses';

const Figure = props => {
  return (
    <figure {...props}>
      <Img {...props.img} />
    </figure>
  );
};

export default withMergeClasses(Figure, 'image');
