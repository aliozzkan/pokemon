import { lazy } from 'react';
import { Route } from 'react-router-dom';

export const routers = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: lazy(() => import('@/pages/Home')),
    route: Route,
    layout: 'main',
  },
  {
    path: '/detail',
    exact: true,
    name: 'Detail',
    component: lazy(() => import('@/pages/Detail')),
    route: Route,
    layout: 'main',
  },
];
