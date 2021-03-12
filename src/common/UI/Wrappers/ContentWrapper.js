import React, { useContext } from 'react';
import { MobileMenuContext } from '../../../context/mobile-menu-context';

const ContentWrapper = props => {
  const mobileMenuContext = useContext(MobileMenuContext);
  return (
    <div className='content-wrapper' onClick={mobileMenuContext.closeMenu}>
      {' '}
      {props.children}
    </div>
  );
};

export default ContentWrapper;
