import React from 'react';
import { mergeClasses } from '../../../utilities';

const HeroSubtitle = ({ children }) => {
  return (
    <div className='container'>
      <div className='columns is-justify-content-center'>
        <div className='column is-7'>
          <h2 className='subtitle has-text-light has-text-weight-light'>
            {children}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSubtitle;
