import React from 'react';
import { mergeClasses } from '../../../utilities';

const HeroSubtitle = props => {
  const classes = mergeClasses({
    defaultClasses: 'subtitle has-text-light has-text-weight-light',
    extraClasses: props.className,
  });
  return (
    <div className='container'>
      <div className='columns is-justify-content-center'>
        <div className='column is-7'>
          <h2 className={classes}>{props.children}</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSubtitle;
