import React from 'react';
import CardTitle from './CardTitle';

const Card = ({ title, children }) => {
  return (
    <div className='card'>
      <header className='card-header'>
        <CardTitle>{title}</CardTitle>
      </header>
      <div className='card-content'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default Card;
