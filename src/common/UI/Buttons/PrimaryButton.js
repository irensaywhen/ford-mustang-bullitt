import React from 'react';

const PrimaryButton = props => {
  return (
    <button className='button is-primary' {...props}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
