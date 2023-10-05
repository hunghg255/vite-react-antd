import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import styles from './index.module.scss';

const AuthLayout = () => {
  return (
    <Suspense fallback={undefined}>
      <div className={styles.authLayout}>
        <Outlet />
      </div>
    </Suspense>
  );
};

export default AuthLayout;
