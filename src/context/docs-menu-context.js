import React, { useState } from 'react';

export const DocsMenuContext = React.createContext({
  isDocsMenuVisible: false,
  toggleMenuVisibility: () => {},
  closeMenu: () => {},
});

const DocsMenuContextProvider = ({ children }) => {
  const [isDocsMenuVisible, setIsDocsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsDocsMenuVisible(isMenuVisible => !isMenuVisible);
  };

  const closeMenu = () => {
    if (isDocsMenuVisible) {
      setIsDocsMenuVisible(false);
    }
  };

  return (
    <DocsMenuContext.Provider
      value={{
        isDocsMenuVisible,
        toggleMenuVisibility,
        closeMenu,
      }}
    >
      {children}
    </DocsMenuContext.Provider>
  );
};

export default DocsMenuContextProvider;
