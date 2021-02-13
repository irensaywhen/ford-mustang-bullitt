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
        <div className='container'>
          {/*<h1 className='title has-text-centered has-text-info-light'>
            {props.title}
          </h1>
          <h2 className='subtitle has-text-centered has-text-info-light'>
            {props.subtitle}
  </h2>*/}
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Hero;
