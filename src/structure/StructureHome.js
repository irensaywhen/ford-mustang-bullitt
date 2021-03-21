import React from 'react';
import { Route, useRouteMatch, Link } from 'react-router-dom';

import ScrollToTopOnMount from '../common/ScrollToTopOnMount';

import PageCard from './PageCard';
import Section from '../common/UI/Section';
import Block from '../common/UI/Wrappers/Block';
import NarrowContentWrapper from '../common/UI/Wrappers/NarrowContentWrapper';

// Text
import H2 from '../common/UI/Titles/H2';
import TextSemibold from '../common/UI/Text/TextSemibold';

// Hero
import Hero from '../common/UI/Hero/Hero';
import HeroTitle from '../common/UI/Hero/HeroTitle';
import HeroSubtitle from '../common/UI/Hero/HeroSubtitle';

import routes from '../routes';
import classes from '../assets/scss/pages/heroes.module.scss';

const StructureArticles = () => {
  const { path, url } = useRouteMatch();

  const documentationRoutes = Object.values(routes.documentation).map(
    (routeData, index) => {
      const Component = routeData.Component;
      return (
        <Route key={index} path={`${path}${routeData.path}`}>
          <ScrollToTopOnMount />
          <Component />
        </Route>
      );
    }
  );

  const documentationLinks = Object.values(routes.documentation).map(
    (routeData, index) => (
      <div
        key={index}
        className='page-card-wrapper column is-12 is-6-tablet is-4-desktop'
      >
        <Link to={`${url}${routeData.path}`}>
          <PageCard {...routeData} />
        </Link>
      </div>
    )
  );

  // const dashboardRoutes = Object.values(routes.dashboard).map(
  //   (routeData, index) => (
  //     <Route key={index} path={`${path}${routeData.path}`}>
  //       {({ match }) => {
  //         const Component = routeData.Component;
  //         return (
  //           <CSSTransition
  //             in={match != null}
  //             timeout={300}
  //             classNames='page'
  //             nodeRef={nodeRef}
  //             unmountOnExit
  //           >
  //             <div className='page' ref={nodeRef}>
  //               <Component {...routeData} />
  //             </div>
  //           </CSSTransition>
  //         );
  //       }}
  //     </Route>
  //   )
  // );
  const dashboardLinks = Object.values(routes.dashboard).map(
    (routeData, index) => (
      <div
        key={index}
        className='page-card-wrapper column is-12 is-6-tablet is-4-desktop'
      >
        <Link to={`${url}${routeData.path}`}>
          <PageCard {...routeData} />
        </Link>
      </div>
    )
  );
  return (
    <React.Fragment>
      {documentationRoutes}

      {/*dashboardRoutes*/}
      <Route path={routes.main.documentation.path} exact>
        <Hero
          className={[
            'is-halfheight',
            'has-text-centered',
            classes.HeroImage,
            classes.BrakingImage,
          ].join(' ')}
        >
          <Block>
            <HeroTitle>Ford Mustang Bullitt</HeroTitle>
          </Block>
          <Block>
            <HeroSubtitle>Устройство и эксплуатация автомобиля</HeroSubtitle>
          </Block>
        </Hero>
        <Section>
          <Block className='has-text-centered'>
            <H2>Устройство автомобиля</H2>
            <NarrowContentWrapper>
              <p>
                Описание принципов работы, эксплуатации и неисправностей
                различных элементов автомобиля, а также систем, специфичных для
                данной модели
              </p>
            </NarrowContentWrapper>
          </Block>

          <Block>
            <div className='columns is-multiline'>{documentationLinks}</div>
          </Block>

          <Block className='has-text-centered'>
            <H2>Приборная панель</H2>
            <NarrowContentWrapper>
              <p>
                Описание элементов приборной панели{' '}
                <TextSemibold>Ford Mustang Bullitt</TextSemibold> и световых
                индикаторов на ней.
              </p>
            </NarrowContentWrapper>
          </Block>

          <Block>
            <div className='columns is-multiline'>{dashboardLinks}</div>
          </Block>
        </Section>
      </Route>
    </React.Fragment>
  );
};

export default StructureArticles;
