import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Suspense fallback={null}>
      <h1>Main Header</h1>

      <Outlet />
    </Suspense>
  );
};

export default MainLayout;
