import React from 'react';

const Feature = ({ text, image }) => {
  return (
    <div className='columns is-mobile is-multiline mb-2'>
      <div className='column is-one-third-mobile is-12-tablet is-flex is-justify-content-center'>
        <figure className='image is-128x128 is-flex is-align-content-center is-justify-content-center'>
          <img className='is-rounded' src={image} alt=''></img>
        </figure>
      </div>
      <div className='column is-flex is-align-items-center has-text-left-mobile has-text-centered-tablet'>
        {text}
      </div>
    </div>
  );
};

export default Feature;
