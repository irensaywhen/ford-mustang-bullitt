import Layout from './common/Layout/Layout';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import ModalContextProvider from './context/modal-context';
import MobileMenuContextProvider from './context/mobile-menu-context';

import routes from './routes';
import Home from './home/Home';
import History from './history/History';
import Dashboard from './dashboard/Dashboard';
import MainGauges from './dashboard/MainGauges';
import WarningLights from './dashboard/WarningLights';
import About from './about/About';
import Contact from './contact/Contact';
import Articles from './articles/Articles';
import StructureArticles from './structure/StructureArticles';

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
  return (
    <Router>
      <ModalContextProvider>
        <MobileMenuContextProvider>
          <Layout>
            {/*<Switch>*/}
            <Route path={routes.contact} component={Contact} />
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
            {/*</Switch>*/}
          </Layout>
        </MobileMenuContextProvider>
      </ModalContextProvider>
    </Router>
  );
}

export default App;
