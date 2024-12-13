import { Suspense } from 'react';

import { useMount } from 'ahooks';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/constants/route.constant';
import { getAccessToken } from '@/store/auth/useAuth';
import { useProfile } from '@/store/profile/useProfile';

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  useProfile();

  useMount(() => {
    const isLogin = getAccessToken();
    if (!isLogin) {
      if (
        [ROUTE_PATH.FORGOT_PASSWORD, ROUTE_PATH.SIGN_IN].includes(
          location.pathname,
        )
      ) {
        return;
      }

      return navigate(ROUTE_PATH.SIGN_IN);
    }

    if (location.pathname === '/') {
      navigate(ROUTE_PATH.REPORT);
    }
  });

  return (
    <Suspense fallback={undefined}>
      <Outlet />
    </Suspense>
  );
}

export default AppLayout;
