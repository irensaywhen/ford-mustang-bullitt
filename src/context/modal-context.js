import React, { useState } from 'react';

export const ModalContext = React.createContext({
  isModalVisible: false,
  modalContent: null,
  setModalContent: () => {},
  showModal: () => {},
  hideModal: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Show modal handler
  const showModal = () => {
    if (!isModalVisible) {
      setIsModalVisible(true);
    }
  };

  // Hide modal handler
  const hideModal = () => setIsModalVisible(false);

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        showModal,
        hideModal,
        modalContent,
        setModalContent,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
