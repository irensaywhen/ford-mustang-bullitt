import React, { useState } from 'react';

export const ModalContext = React.createContext({
  isModalVisible: false,
  showModal: () => {},
  hideModal: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
