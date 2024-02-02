/* eslint-disable indent */
import React from 'react';

import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router';

import AppLayout from '@/layout/AppLayout/AppLayout';

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => <></> // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export const Route = createRootRoute({
  component: () => (
    <AppLayout>
      <Outlet />
      <ScrollRestoration />
      <TanStackRouterDevtools />
    </AppLayout>
  ),
});
