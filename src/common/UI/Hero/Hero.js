import React, { useRef } from 'react';
import { mergeClasses } from '../../../utilities';

const Hero = props => {
  const nodeRef = useRef(null);
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
