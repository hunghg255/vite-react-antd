import { createLazyFileRoute } from '@tanstack/react-router';

import MainLayout from '@/layout/MainLayout/MainLayout';
import Report from '@/pages/Report/Report';

export const Route = createLazyFileRoute('/report')({
  component: () => {
    return (
      <MainLayout>
        <Report />
      </MainLayout>
    );
  },
});
