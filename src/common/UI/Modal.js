import React, { useContext } from 'react';

import { ModalContext } from '../../context/modal-context';

const Modal = ({ children, hidePadding, transparentBackground }) => {
  const modalContext = useContext(ModalContext);

  const modalContentClasses = [
    'modal-content',
    !hidePadding ? 'p-4' : null,
    !transparentBackground ? 'has-background-light' : null,
  ];
  return modalContext.isModalVisible ? (
    <div className='modal is-flex is-flex-direction-column is-justify-content-center is-align-items-center'>
      <div className='modal-background' onClick={modalContext.hideModal}></div>
      <div className={modalContentClasses.join(' ')}>{children}</div>
      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={modalContext.hideModal}
      ></button>
    </div>
  ) : null;
};

export default Modal;
