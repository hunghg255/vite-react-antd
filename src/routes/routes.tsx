import React, { Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import AppLayout from '@/layout/AppLayout/AppLayout';
import AuthLayout from '@/layout/AuthLayout/AuthLayout';
import MainLayout from '@/layout/MainLayout/MainLayout';

import { ROUTE_PATH } from './route.constant';

const SignIn = React.lazy(() => import('@/pages/SignIn/SignIn'));
const Requirement = React.lazy(() => import('@/pages/Requirement/Requirement'));
const RequirementDetail = React.lazy(() => import('@/pages/Requirement/RequirementDetail'));
const Clients = React.lazy(() => import('@/pages/Clients/Clients'));
const ClientsDetail = React.lazy(() => import('@/pages/Clients/ClientsDetail'));
const CaseStudy = React.lazy(() => import('@/pages/CaseStudy/CaseStudy'));
const Notification = React.lazy(() => import('@/pages/Notification/Notification'));

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
          {
            path: ROUTE_PATH.REQUIREMENT_DETAIL,
            element: (
              <Suspense fallback={undefined}>
                <RequirementDetail />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.CLIENTS,
            element: (
              <Suspense fallback={undefined}>
                <Clients />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.CLIENTS_DETAIL,
            element: (
              <Suspense fallback={undefined}>
                <ClientsDetail />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.CASE_STUDY,
            element: (
              <Suspense fallback={undefined}>
                <CaseStudy />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.NOTIFICATION,
            element: (
              <Suspense fallback={undefined}>
                <Notification />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
