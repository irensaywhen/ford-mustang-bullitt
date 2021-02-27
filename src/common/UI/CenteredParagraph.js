import React from 'react';

const CenteredParagraph = props => {
  return (
    <div className='columns is-mobile'>
      <div className='column is-half-tablet is-offset-one-quarter-tablet'>
        <p className='has-text-centered'>{props.children}</p>
      </div>
    </div>
  );
};

export default CenteredParagraph;
