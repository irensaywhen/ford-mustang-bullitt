import React from 'react';

const Img = props => {
  const alt = props.alt || '';
  return <img src={props.src} alt={alt} className={props.className}></img>;
};

export default Img;
