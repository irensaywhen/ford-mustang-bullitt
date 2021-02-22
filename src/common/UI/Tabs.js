import React from 'react';
import { Route, useRouteMatch, useLocation, NavLink } from 'react-router-dom';

import { CSSTransition } from 'react-transition-group';

const Tabs = ({ tabs }) => {
  const { path, url } = useRouteMatch();

  const location = useLocation();

  const tabsList = tabs.map((tab, index) => {
    const liClassName =
      location.pathname === `${url}/${tab.tabLink}` ? 'is-active' : null;
    return (
      <li key={index} className={liClassName}>
        <NavLink to={`${url}/${tab.tabLink}`}>{tab.tabName}</NavLink>
      </li>
    );
  });

  const tabsContent = tabs.map((tab, index) => {
    const { tabLink, Component } = tab;

    return (
      <Route key={index} path={`${path}/${tabLink}`}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames='tab-content'
            unmountOnExit
          >
            <div className='tab-content'>
              <Component />
            </div>
          </CSSTransition>
        )}
      </Route>
    );
  });
  return (
    <React.Fragment>
      <div className='tabs'>
        <ul>{tabsList}</ul>
      </div>
      <div className='is-relative'>{tabsContent}</div>
    </React.Fragment>
  );
};

export default Tabs;
