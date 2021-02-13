import React from 'react';

const CenteredParagraph = ({ children }) => {
  return (
    <div className='columns is-mobile'>
      <div className='column is-half-tablet is-offset-one-quarter-tablet'>
        <p className='has-text-centered'>{children}</p>
      </div>
    </div>
  );
};

export default CenteredParagraph;
