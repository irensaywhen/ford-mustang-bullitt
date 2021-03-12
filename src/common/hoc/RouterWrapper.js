import React from 'react';
import { Route } from 'react-router-dom';

const RouterWrapper = ({ component: Component, Layout, exact, ...rest }) => {
  return (
    <Route
      {...rest}
      exact={exact}
      render={props => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouterWrapper;
