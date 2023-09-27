import React, { Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layout/AppLayout/AppLayout';
import AuthLayout from '@/layout/AuthLayout/AuthLayout';
import MainLayout from '@/layout/MainLayout/MainLayout';

import { ROUTE_PATH } from './route.constant';

const SignIn = React.lazy(() => import('@/pages/SignIn/SignIn'));
const Requirement = React.lazy(() => import('@/pages/Requirement/Requirement'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTE_PATH.SIGN_IN,
            element: (
              <Suspense fallback={undefined}>
                <SignIn />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTE_PATH.REQUIREMENT,
            element: (
              <Suspense fallback={undefined}>
                <Requirement />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
