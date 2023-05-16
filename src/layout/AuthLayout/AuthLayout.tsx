import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Suspense fallback={undefined}>
      <h1>Auth Header</h1>
      <Outlet />
    </Suspense>
  );
};

export default AuthLayout;
