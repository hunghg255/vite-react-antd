import { Suspense } from 'react';

import { Link } from '@tanstack/react-router';

const MainLayout = ({ children }: any) => {
  return (
    <Suspense fallback={undefined}>
      <div className='p-2 flex gap-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Home
        </Link>{' '}
        <Link to='/report' className='[&.active]:font-bold'>
          Report
        </Link>
        <Link to='/posts' className='[&.active]:font-bold'>
          Post
        </Link>
      </div>
      <hr />

      {children}
    </Suspense>
  );
};

export default MainLayout;
