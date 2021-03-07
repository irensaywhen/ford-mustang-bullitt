import React from 'react';

const DefinitionsWrapper = props => {
  return (
    <div className='columns pt-4'>
      <div className='column is-12 is-10-tablet is-9-desktop'>
        {props.children}
      </div>
    </div>
  );
};

export default DefinitionsWrapper;
