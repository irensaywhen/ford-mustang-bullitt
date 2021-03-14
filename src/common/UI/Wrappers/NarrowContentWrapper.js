import React from 'react';

const NarrowContentWrapper = props => {
  return (
    <div className='columns is-justify-content-center pt-4'>
      <div className='column is-12 is-10-tablet is-8-desktop'>
        {props.children}
      </div>
    </div>
  );
};

export default NarrowContentWrapper;
