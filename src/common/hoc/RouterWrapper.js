import React from 'react';
import { Route } from 'react-router-dom';

const RouterWrapper = ({ component: Component, Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default RouterWrapper;
