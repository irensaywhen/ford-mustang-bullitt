import Home from './home/Home';
import History from './history/History';
import About from './about/About';

const routes = {
  home: '/',
  history: '/articles/history',
  main: {
    home: {
      path: '/',
      Component: Home,
    },
    history: {
      path: '/history',
      Component: History,
    },
    about: {
      path: '/about',
      Component: About,
    },
  },
  dashboard: {
    index: '/dashboard',
    warningLights: '/dashboard/warning-lights',
    mainGauges: '/dashboard/main-gauges',
  },
  structure: {
    index: '/structure',
    body: '/body',
    steering: '/steering',
    braking: '/braking',
    transmission: '/transmission',
    engine: '/engine',
    chasis: '/chasis',
    electronics: '/electronic-systems',
    safety: '/safety',
  },
  about: '/about',
  contact: '/contact',
  articles: '/articles',
};

export default routes;
