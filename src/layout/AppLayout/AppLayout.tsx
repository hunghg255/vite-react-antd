import React, { Suspense } from 'react';

import { useNavigate, useRouter } from '@tanstack/react-router';
import { useMount } from 'ahooks';

import { getAccessToken } from '@/store/auth/useAuth';
import { useProfile } from '@/store/profile/useProfile';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const router = useRouter();

  useProfile();

  useMount(() => {
    const isLogin = getAccessToken();
    if (!isLogin) {
      return navigate({
        to: '/sign-in',
      });
    }

    if (router.latestLocation.pathname === '/') {
      navigate({
        to: '/report',
      });
    }
  });

  return <Suspense fallback={undefined}>{children}</Suspense>;
};

export default AppLayout;
