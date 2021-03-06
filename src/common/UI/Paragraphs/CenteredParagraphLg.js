import React from 'react';
import { mergeClasses } from '../../../utilities';

const CenteredParagraphLg = props => {
  const classes = mergeClasses({
    defaultClasses: 'has-text-centered',
    extraClasses: props.className,
  });
  return (
    <div className='columns is-mobile is-justify-content-center'>
      <div className='column is-10-tablet is-9-desktop'>
        <p className={classes}>{props.children}</p>
      </div>
    </div>
  );
};

export default CenteredParagraphLg;
