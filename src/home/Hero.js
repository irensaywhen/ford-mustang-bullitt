import React from 'react';

import classes from '../assets/scss/pages/home.module.scss';

const Hero = () => {
  const heroClasses = ['hero', 'is-fullheight', classes.HeroImage];
  return (
    <section className={heroClasses.join(' ')}>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title has-text-centered has-text-info-light'>
            Hero title
          </h1>
          <h2 className='subtitle has-text-centered has-text-info-light'>
            Hero subtitle
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
