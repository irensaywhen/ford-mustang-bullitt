import React, { useState } from 'react';

export const MobileMenuContext = React.createContext({
  isMobileMenuVisible: false,
  toggleMenuVisibility: () => {},
  closeMenu: () => {},
});

const MobileMenuContextProvider = ({ children }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMobileMenuVisible(isMenuVisible => !isMenuVisible);
  };

  const closeMenu = () => {
    if (isMobileMenuVisible) {
      setIsMobileMenuVisible(false);
    }
  };

  return (
    <MobileMenuContext.Provider
      value={{
        isMobileMenuVisible,
        toggleMenuVisibility,
        closeMenu,
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContextProvider;
