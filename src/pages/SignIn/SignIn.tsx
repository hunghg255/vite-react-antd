import { Helmet } from 'react-helmet';

import Text from '@/components/UI/Text';
// import { useAuth } from '@/store/auth/useAuth';

import styles from './index.module.scss';

const SignIn = () => {
  return (
    <>
      <Helmet>
        <title>Sign In 1</title>
      </Helmet>

      <h1>{process.env.TITLE}</h1>

      <div className={styles.loginWrap}>
        <img src='/svg/logo.svg' alt='logo' />
        <Text type='heading3-bold' className='text-center mb-20' element='h1'>
          Đăng nhập vào IC Publisher 11
        </Text>
      </div>
    </>
  );
};

export default SignIn;
