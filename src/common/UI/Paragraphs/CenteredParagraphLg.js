import React from 'react';

const CenteredParagraphLg = props => {
  return (
    <div className='columns is-mobile is-justify-content-center'>
      <div className='column is-10-tablet is-9-desktop'>
        <p className='has-text-centered'>{props.children}</p>
      </div>
    </div>
  );
};

export default CenteredParagraphLg;
