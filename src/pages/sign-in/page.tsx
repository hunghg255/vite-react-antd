import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import Button from '@/components/UI/Button/Button';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

// import { useAuth } from '@/store/auth/useAuth';

export function Component() {
  return (
    <>
      <h1>
        {process.env.TITLE}
      </h1>

      <div className={styles.loginWrap}>
        <img alt="logo"
          src="/images/logo.png"
        />

        <Text
          className="text-center mb-20"
          element="h1"
          type="heading3-bold"
        >
          Đăng nhập vào IC Publisher
        </Text>

        <Form layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập email',
              },
              {
                type: 'email',
                message: 'Email không hợp lệ',
              },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
              {
                min: 6,
                message: 'Mật khẩu phải có ít nhất 6 ký tự',
              },
            ]}
          >
            <Input placeholder="Mật khẩu" />
          </Form.Item>

          <Text
            className="mb-20 text-right"
            color="primary-100"
            type="heading1-extra-bold"
          >
            <Link to="/forgot-password">
              Quên mật khẩu?
            </Link>
          </Text>

          <Button htmlType="submit">
            Đăng nhập
          </Button>
        </Form>
      </div>
    </>
  );
}
