import React from 'react';
import { mergeClasses } from '../../../utilities';

const HeroTitle = ({ children }) => {
  return <h1 className='title has-text-light'>{children}</h1>;
};

export default HeroTitle;
