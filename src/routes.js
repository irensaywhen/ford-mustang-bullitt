import Home from './home/Home';
import History from './history/History';
import About from './about/About';
import StructureHome from './structure/StructureHome';

const routes = {
  home: '/',
  history: '/articles/history',
  main: {
    home: {
      path: '/',
      name: 'Главная',
      Component: Home,
    },
    history: {
      path: '/history',
      name: 'История',
      Component: History,
    },
    about: {
      path: '/about',
      name: 'О проекте',
      Component: About,
    },
  },
  dashboard: {
    index: '/dashboard',
    warningLights: '/dashboard/warning-lights',
    mainGauges: '/dashboard/main-gauges',
  },
  structure: {
    index: {
      path: '/structure',
      name: 'Устройство',
      Component: StructureHome,
    },
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
