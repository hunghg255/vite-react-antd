import { Suspense } from 'react';

import styles from './index.module.scss';

const AuthLayout = ({ children }: any) => {
  return (
    <Suspense fallback={undefined}>
      <div className={styles.authLayout}>{children}</div>
    </Suspense>
  );
};

export default AuthLayout;
