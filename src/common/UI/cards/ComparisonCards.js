import React from 'react';
import BulletpointWithIcon from '../BulletpointWithIcon';
import Card from './Card';

const ComparisonCards = props => {
  const cardClasses = ['column'];

  if (props.cardsSize) {
    cardClasses.push(props.cardsSize);
  } else {
    cardClasses.push('is-5-tablet is-4-desktop');
  }
  const cards = props.cardsData.map((card, index) => {
    const prosAndCons = card.prosAndCons
      .sort((item1, item2) => {
        if (item1.type === 'con') {
          return 1;
        } else if (item1.type === 'con' && item2.type === 'con') {
          return 0;
        }

        return -1;
      })
      .map((listItem, index) => (
        <BulletpointWithIcon
          key={index}
          icon={
            listItem.type === 'pro' ? (
              <i className='far fa-check-circle'></i>
            ) : (
              <i className='far fa-times-circle'></i>
            )
          }
          iconWrapperClasses={[
            listItem.type === 'pro' ? 'has-text-success' : 'has-text-danger',
          ]}
        >
          <p className='has-text-left is-size-5'>{listItem.description}</p>
        </BulletpointWithIcon>
      ));
    return (
      <div key={index} className={cardClasses.join(' ')}>
        <Card title={card.title}>{prosAndCons}</Card>
      </div>
    );
  });
  return cards;
};

export default ComparisonCards;
