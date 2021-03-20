import React, { useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ModalContext } from '../../context/modal-context';

const Modal = ({ children, hidePadding, transparentBackground }) => {
  const modalContext = useContext(ModalContext);

  const nodeRef = useRef(null);

  const modalContentClasses = [
    'modal-content',
    !hidePadding ? 'p-4' : null,
    !transparentBackground ? 'has-background-light' : null,
  ];

  return (
    <CSSTransition
      in={modalContext.isModalVisible}
      timeout={200}
      nodeRef={nodeRef}
      classNames='modal-fade'
      mountOnEnter
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className='modal is-flex is-flex-direction-column is-justify-content-center is-align-items-center'
      >
        <div
          className='modal-background'
          onClick={modalContext.hideModal}
        ></div>

        <div className={modalContentClasses.join(' ')}>{children}</div>
        <button
          className='modal-close is-large'
          aria-label='close'
          onClick={modalContext.hideModal}
        ></button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
