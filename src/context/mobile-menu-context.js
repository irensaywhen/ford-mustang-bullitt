import React, { useState } from 'react';

export const MobileMenuContext = React.createContext({
  isMobileMenuVisible: false,
  toggleMenuVisibility: () => {},
});

const MobileMenuContextProvider = ({ children }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    console.log('Toggling');
    setIsMobileMenuVisible(isMenuVisible => !isMenuVisible);
  };

  return (
    <MobileMenuContext.Provider
      value={{
        isMobileMenuVisible,
        toggleMenuVisibility,
      }}
    >
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuContextProvider;
