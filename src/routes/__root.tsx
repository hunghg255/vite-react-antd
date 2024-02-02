import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import AppLayout from '@/layout/AppLayout/AppLayout';

export const Route = createRootRoute({
  component: () => (
    <AppLayout>
      <Outlet />
      <ScrollRestoration />
      <TanStackRouterDevtools />
    </AppLayout>
  ),
});
