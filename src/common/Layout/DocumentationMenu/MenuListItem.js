import React, { useContext } from 'react';

import { DocsMenuContext } from '../../../context/docs-menu-context';

const MenuListItem = props => {
  const docsMenuContext = useContext(DocsMenuContext);
  return (
    <li onClick={docsMenuContext.toggleMenuVisibility}>{props.children}</li>
  );
};

export default MenuListItem;
