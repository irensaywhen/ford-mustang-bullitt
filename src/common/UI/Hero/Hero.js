import React from 'react';
import { mergeClasses } from '../../../utilities';

const Hero = props => {
  const classes = mergeClasses({
    defaultClasses: 'hero',
    extraClasses: props.className,
  });

  return (
    <section className={classes}>
      <div className='hero-body'>
        <div className='container'>{props.children}</div>
      </div>
    </section>
  );
};

export default Hero;
