import React, { lazy } from 'react';

// Layouts
const MainLayout = lazy(() => import('./common/Layout/MainLayout'));
const DocumentationLayout = lazy(() =>
  import('./common/Layout/DocumentationLayout')
);

// Main Navigation
const Home = lazy(() => import('./Home/Home'));
const History = lazy(() => import('./history/History'));
const About = lazy(() => import('./about/About'));

// Structure
const StructureHome = lazy(() => import('./structure/StructureHome'));
const CarBody = lazy(() => import('./structure/CarBody/CarBody'));
const SteeringSystem = lazy(() =>
  import('./structure/SteeringSystem/SteeringSystem')
);
const BrakingSystem = lazy(() =>
  import('./structure/BrakingSystem/BrakingSystem')
);
const Transmission = lazy(() =>
  import('./structure/Transmission/Transmission')
);
const Engine = lazy(() => import('./structure/Engine/Engine'));
const Chasis = lazy(() => import('./structure/Chasis/Chasis'));
const ElectronicSystem = lazy(() =>
  import('./structure/ElectronicSystems/ElectronicSystems')
);
const Safety = lazy(() => import('./structure/Safety/Safety'));

// Dashboard
const Gauges = lazy(() => import('./Dashboard/Gauges'));
const WarningLights = lazy(() => import('./Dashboard/WarningLights'));

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
      description: `Характеристикикузова и неисправности, связанные с ним.`,
      icon: <span className='material-icons icon'>directions_car</span>,
      Component: CarBody,
    },
    steering: {
      path: '/steering',
      name: 'Механизмы управления',
      description: `Принцип работы, сравнение усилителей рулевого колеса и несправности
          механизмов управления.`,
      icon: (
        <span className='material-icons icon'>airline_seat_recline_normal</span>
      ),
      Component: SteeringSystem,
    },
    braking: {
      path: '/braking',
      name: 'Тормозная система',
      description: `Принцип работы тормозной системы и вакуумного усилителя,
          характеристики модели, основные несправности.`,
      icon: (
        <span className='material-icons icon'>airline_seat_legroom_extra</span>
      ),
      Component: BrakingSystem,
    },
    transmission: {
      path: '/transmission',
      name: 'Трансмиссия',
      description: `
      Принцип работы частей трансмиссии и связанные с ними неисправности, 
      подробное описание коробки передач. 
      `,
      icon: <i className='fas fa-cogs icon'></i>,
      Component: Transmission,
    },
    engine: {
      path: '/engine',
      name: 'Двигатель',
      description: `
      Характеристики и конфигурация двигателя двигателя, эксплуатация.
      `,
      icon: <i className='fas fa-oil-can icon'></i>,
      Component: Engine,
    },
    chasis: {
      path: '/chasis',
      name: 'Шасси',
      description: `
      Краткое описание частей шасси и неисправностей. Разбор маркировки шин,
      а также тонкостей замены и хранения шин.
      `,
      icon: <i className='fas fa-truck-monster icon'></i>,
      Component: Chasis,
    },
    electronics: {
      path: '/electronic-systems',
      name: 'Электрические системы',
      description: `
      Описание источников и потребителей тока. 
      Разбор последовательности шагов для заряда аккумуляторной батареи методом прикуривания. 
      Краткое описание предохранителей.
      `,
      icon: <span className='material-icons icon'>electrical_services</span>,
      Component: ElectronicSystem,
    },
    safety: {
      path: '/safety',
      name: 'Безопасность',
      description: `
      Описание активных и пассивных систем безопасности, присутствующих в данной модели.
      `,
      icon: <i className='fas fa-car-crash icon'></i>,
      Component: Safety,
    },
  },
  dashboard: {
    warningLights: {
      path: '/warning-lights',
      name: 'Индикаторы',
      description: `
      Описание значений и условий возникновения световых индикаторов, 
      указывающих на поломки или онформирующие водителя об особых условиях, 
      в которых находится автомобиль.
      `,
      icon: <span className='material-icons icon'>warning</span>,
      Component: WarningLights,
    },
    gauges: {
      path: '/gauges',
      name: 'Приборная панель',
      description: `
      Описание приборной панели, по которой можно получить информацию о текущей поездке и состоянии автомобиля.
      `,
      icon: <i className='fas fa-digital-tachograph icon'></i>,
      Component: Gauges,
    },
  },
};

export default routes;
