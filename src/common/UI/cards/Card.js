import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className='card'>
      <header className='card-header'>
        <p className='card-header-title is-justify-content-center'>{title}</p>
      </header>
      <div className='card-content'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default Card;
