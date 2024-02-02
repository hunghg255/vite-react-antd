import { createLazyFileRoute } from '@tanstack/react-router';

import AuthLayout from '@/layout/AuthLayout/AuthLayout';
import SignIn from '@/pages/SignIn/SignIn';

export const Route = createLazyFileRoute('/sign-in')({
  component: () => {
    return (
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    );
  },
});
