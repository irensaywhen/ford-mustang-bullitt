import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ModalContextProvider from './context/modal-context';
import MobileMenuContextProvider from './context/mobile-menu-context';
import DocsMenuContextProvider from './context/docs-menu-context';

import RouterWrapper from './common/hoc/RouterWrapper';
import LoadingIndicator from './common/UI/LoadingIndicator';
import routes from './routes';

function App() {
  const mainPages = Object.values(routes.main).map((routeData, index) => {
    return (
      <RouterWrapper
        key={index}
        path={routeData.path}
        component={routeData.Component}
        Layout={routeData.Layout}
        exact={routeData.exact}
      />
    );
  });
  return (
    <Router>
      <Suspense fallback={<LoadingIndicator />}>
        <ModalContextProvider>
          <DocsMenuContextProvider>
            <MobileMenuContextProvider>{mainPages}</MobileMenuContextProvider>
          </DocsMenuContextProvider>
        </ModalContextProvider>
      </Suspense>
    </Router>
  );
}

export default App;
