import React, { useState } from 'react';
import 'animate.css';

const AccordionItem = ({ header, body }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const itemHeaderClickHandler = () => {
    setIsExpanded(prevIsExpanded => !prevIsExpanded);
  };

  const bodyClasses = ['message-body'];

  if (!isExpanded) {
    bodyClasses.push('hide');
  }

  return (
    <article className='message mb-1 is-primary'>
      <div
        className='message-header is-clickable'
        onClick={itemHeaderClickHandler}
      >
        <p>{header}</p>
      </div>

      <div className={bodyClasses.join(' ')}>{body}</div>
    </article>
  );
};

export default AccordionItem;
