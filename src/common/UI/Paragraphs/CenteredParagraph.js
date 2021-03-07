import React from 'react';
import { mergeClasses } from '../../../utilities';

const CenteredParagraph = props => {
  const classes = mergeClasses({
    defaultClasses: 'has-text-centered',
    extraClasses: props.className,
  });

  return (
    <div className='columns is-mobile'>
      <div className='column is-half-tablet is-offset-one-quarter-tablet'>
        <p className={classes}>{props.children}</p>
      </div>
    </div>
  );
};

export default CenteredParagraph;
