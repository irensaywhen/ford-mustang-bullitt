import React from 'react';
import { Route } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount';

const RouterWrapper = ({ component: Component, Layout, exact, ...rest }) => {
  return (
    <Route
      {...rest}
      exact={exact}
      render={props => (
        <Layout {...props}>
          <ScrollToTopOnMount />
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouterWrapper;
