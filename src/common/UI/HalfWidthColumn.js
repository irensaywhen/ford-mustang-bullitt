import React from 'react';

const HalfWidthColumn = ({ children }) => {
  return (
    <div className='column is-6 is-flex is-flex-direction-column is-align-items-center is-justify-content-center'>
      {children}
    </div>
  );
};

export default HalfWidthColumn;
