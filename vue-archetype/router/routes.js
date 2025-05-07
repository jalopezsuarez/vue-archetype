import HomePage from '../pages/HomePage.js';
import AboutPage from '../pages/AboutPage.js';
import PostPage from '../pages/PostPage.js';

export const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/posts': PostPage
};

export function getComponentForRoute(route) {
  const component = routes[route];
  if (!component) {
    return {
      template: '<p>Página no encontrada</p>'
    };
  }
  return component;
}