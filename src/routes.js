// Layouts
import MainLayout from './common/Layout/MainLayout';
import DocumentationLayout from './common/Layout/DocumentationLayout';

// Main Navigation
import Home from './home/Home';
import History from './history/History';
import About from './about/About';

// Structure
import StructureHome from './structure/StructureHome';
import CarBody from './structure/CarBody/CarBody';
import SteeringSystem from './structure/SteeringSystem';
import BrakingSystem from './structure/BrakingSystem';
import Transmission from './structure/transmission/Transmission';
import Engine from './structure/engine/Engine';
import Chasis from './structure/chasis/Chasis';
import ElectronicSystem from './structure/electronicSystems/ElectronicSystems';
import Safety from './structure/safety/Safety';

const routes = {
  main: {
    home: {
      path: '/',
      name: 'Главная',
      Component: Home,
      Layout: MainLayout,
      exact: true,
    },
    history: {
      path: '/history',
      name: 'История',
      Component: History,
      Layout: MainLayout,
      exact: true,
    },
    documentation: {
      path: '/structure',
      name: 'Документация',
      Component: StructureHome,
      Layout: DocumentationLayout,
      exact: false,
    },
    about: {
      path: '/about',
      name: 'О проекте',
      Component: About,
      Layout: MainLayout,
      exact: true,
    },
  },
  documentation: {
    body: {
      path: '/body',
      name: 'Кузов',
      Component: CarBody,
    },
    steering: {
      path: '/steering',
      name: 'Механизмы управления',
      Component: SteeringSystem,
    },
    braking: {
      path: '/braking',
      name: 'Тормозная система',
      Component: BrakingSystem,
    },
    transmission: {
      path: '/transmission',
      name: 'Трансмиссия',
      Component: Transmission,
    },
    engine: {
      path: '/engine',
      name: 'Двигатель',
      Component: Engine,
    },
    chasis: {
      path: '/chasis',
      name: 'Шасси',
      Component: Chasis,
    },
    electronics: {
      path: '/electronic-systems',
      name: 'Электрические системы',
      Component: ElectronicSystem,
    },
    safety: {
      path: '/safety',
      name: 'Безопасность',
      Component: Safety,
    },
  },
  dashboard: {
    index: '/dashboard',
    warningLights: '/dashboard/warning-lights',
    mainGauges: '/dashboard/main-gauges',
  },
};

export default routes;
