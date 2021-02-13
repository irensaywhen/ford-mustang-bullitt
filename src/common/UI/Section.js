import React from 'react';

const Section = ({ className, children }) => {
  const defaultClasses = ['section'];

  const classes = className
    ? [...defaultClasses, ...className.split(' ')]
    : defaultClasses;

  return (
    <section className={classes.join(' ')}>
      <div className='container'>{children}</div>
    </section>
  );
};

export default Section;
