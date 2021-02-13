import React, { useState } from 'react';
import { CSSTransition, Transition } from 'react-transition-group';

import 'animate.css';

const AccordionItem = ({ header, body }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const nodeRef = React.useRef(null);

  const itemHeaderClickHandler = () => {
    setIsExpanded(prevIsExpanded => !prevIsExpanded);
  };

  // const bodyClasses = ['message-body'];
  //
  // if (!isExpanded) {
  //   bodyClasses.push('is-hidden');
  // }

  return (
    <article className='message mb-1 is-primary'>
      <div
        className='message-header is-clickable'
        onClick={itemHeaderClickHandler}
      >
        <p>{header}</p>
      </div>

      {/*<Transition
        in={isExpanded}
        nodeRef={nodeRef}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        {state => {
          const classes =
            state === 'entering' || state === 'entered'
              ? 'message-body show'
              : 'message-body hide';
          console.log(classes);
          return (
            <div ref={nodeRef} className={classes}>
              {body}
            </div>
          );
        }}
      </Transition>*/}
      <CSSTransition
        nodeRef={nodeRef}
        in={isExpanded}
        timeout={800}
        classNames={{
          enterActive: 'show',
          enterDone: 'show',
          exitActive: 'hide',
          exitDone: 'hide',
        }}
        mountOnEnter
        unmountOnExit
      >
        <div ref={nodeRef} className='message-body'>
          {body}
        </div>
      </CSSTransition>
    </article>
  );
};

export default AccordionItem;
