import React from 'react';

import H2 from '../common/UI/Titles/H2';

const pageCard = props => {
  return (
    <div className='card page-card'>
      <header className='card-header'>
        <div className='icon-wrapper'>{props.icon}</div>

        <H2 className='card-header-title is-size-4'>{props.name}</H2>
      </header>
      <div className='card-content'>
        <div className='content'>{props.description}</div>
      </div>
    </div>
  );
};

export default pageCard;
