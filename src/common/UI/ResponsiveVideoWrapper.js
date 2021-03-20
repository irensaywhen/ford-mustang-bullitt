import React from 'react';

const ResponsiveVideoWrapper = props => {
  return (
    <figure className='image is-16by9' {...props}>
      {props.children}
    </figure>
  );
};

export default ResponsiveVideoWrapper;
