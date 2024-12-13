import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import Button from '@/components/UI/Button/Button';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

// import { useAuth } from '@/store/auth/useAuth';

export function Component() {
  return (
    <>
      <h1>{process.env.TITLE}</h1>

      <div className={styles.loginWrap}>
        <img src="/images/logo.png" alt="logo" />
        <Text type="heading3-bold" className="text-center mb-20" element="h1">
          Đăng nhập vào IC Publisher
        </Text>
        <Form layout="vertical">
          <Form.Item
            name="email"
            label="Email"
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
            name="password"
            label="Mật khẩu"
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
            type="heading1-extra-bold"
            color="primary-100"
            className="mb-20 text-right"
          >
            <Link to="/forgot-password">Quên mật khẩu?</Link>
          </Text>

          <Button htmlType="submit">Đăng nhập</Button>
        </Form>
      </div>
    </>
  );
}
