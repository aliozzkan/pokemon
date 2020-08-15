import { lazy } from 'react';
import { Route } from 'react-router-dom';

export const routers = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: lazy(() => import('@/pages/Home')),
    route: Route,
  },
  {
    path: '/pokemon',
    exact: true,
    name: 'List',
    component: lazy(() => import('@/pages/List')),
    route: Route,
  },
  {
    path: '/pokemon/:name',
    exact: true,
    name: 'Detail',
    component: lazy(() => import('@/pages/Detail')),
    route: Route,
  },
  {
    path: '',
    exact: true,
    name: '',
    component: lazy(() => import('@/pages/NotFound')),
    route: Route,
  },
];
