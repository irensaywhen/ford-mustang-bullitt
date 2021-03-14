import { BrowserRouter as Router } from 'react-router-dom';

import ModalContextProvider from './context/modal-context';
import MobileMenuContextProvider from './context/mobile-menu-context';

import RouterWrapper from './common/hoc/RouterWrapper';
import routes from './routes';

const mapStyles = styles => ({
  transform: `translateX(${styles.offset}%)`,
  opacity: styles.opacity,
});

const transition = {
  atEnter: { offset: 100, opacity: 0 },
  atActive: { offset: 0, opacity: 1 },
  atLeave: { offset: -100, opacity: 0 },
};

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
      <ModalContextProvider>
        <MobileMenuContextProvider>
          {/*<Layout>
            <Route path={routes.about} component={About} />
            <Route path={routes.dashboard.mainGauges} component={MainGauges} />
            <Route
              path={routes.dashboard.warningLights}
              component={WarningLights}
            />
            <Route path={routes.dashboard.index} component={Dashboard} exact />
            <Route path={routes.history} component={History} />
            <Route path={routes.articles} exact component={Articles} />
            <Route
              path={routes.structure.index}
              component={StructureArticles}
              atEnter={transition.atEnter}
              atLeave={transition.atLeave}
              atActive={transition.atActive}
              mapStyles={mapStyles}
              runOnMount
            />
            <Route path={routes.home} exact component={Home} />
          </Layout>*/}
          {mainPages}
        </MobileMenuContextProvider>
      </ModalContextProvider>
    </Router>
  );
}

export default App;
