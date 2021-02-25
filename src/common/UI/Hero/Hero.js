import React from 'react';

const Hero = props => {
  const classes =
    typeof props.classNames === 'string'
      ? props.classNames.split(' ')
      : props.classNames;

  const heroClasses = ['hero', ...classes];
  return (
    <section className={heroClasses.join(' ')}>
      <div className='hero-body'>
        <div className='container'>{props.children}</div>
      </div>
    </section>
  );
};

export default Hero;
