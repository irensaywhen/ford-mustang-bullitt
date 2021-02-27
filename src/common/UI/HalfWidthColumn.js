import React from 'react';

const HalfWidthColumn = ({ children }) => {
  return (
    <div className='column is-12 is-6-desktop is-flex is-flex-direction-column is-align-items-center is-justify-content-center'>
      {children}
    </div>
  );
};

export default HalfWidthColumn;
