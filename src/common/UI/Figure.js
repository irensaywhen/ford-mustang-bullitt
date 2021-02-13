import React from 'react';

const Figure = ({ className, img, imgAlt }) => {
  const alt = imgAlt || '';
  return (
    <figure className={className}>
      <img src={img} alt={alt} />
    </figure>
  );
};

export default Figure;
