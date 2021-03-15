import React from 'react';

const CardTitle = props => {
  return (
    <h3 className='title is-5 card-header-title is-justify-content-center'>
      {props.children}
    </h3>
  );
};

export default CardTitle;
