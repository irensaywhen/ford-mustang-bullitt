import React from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  NavLink,
} from 'react-router-dom';

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

  const tabsContent = tabs.map((tab, index) => (
    <Route
      key={index}
      path={`${path}/${tab.tabLink}`}
      component={tab.component}
    />
  ));
  return (
    <React.Fragment>
      <div className='tabs'>
        <ul>{tabsList}</ul>
      </div>
      <div>
        <Switch>{tabsContent}</Switch>
      </div>
    </React.Fragment>
  );
};

export default Tabs;
