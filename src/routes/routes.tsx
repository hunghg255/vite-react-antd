import React, { Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layout/AppLayout/AppLayout';
import AuthLayout from '@/layout/AuthLayout/AuthLayout';
import MainLayout from '@/layout/MainLayout/MainLayout';

import { ROUTE_PATH } from './route.constant';

const SignIn = React.lazy(() => import('@/pages/SignIn/SignIn'));
const ForgotPassword = React.lazy(() => import('@/pages/ForgotPassword/ForgotPassword'));

const Report = React.lazy(() => import('@/pages/Report/Report'));

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
          {
            path: ROUTE_PATH.FORGOT_PASSWORD,
            element: (
              <Suspense fallback={undefined}>
                <ForgotPassword />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTE_PATH.REPORT,
            element: (
              <Suspense fallback={undefined}>
                <Report />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
