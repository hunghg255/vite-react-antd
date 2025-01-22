import React from 'react';

import { Form, Input } from 'antd';

import Button from '@/components/UI/Button/Button';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

export function Component() {
  return (
    <>
      <div className={styles.loginWrap}>
        <img alt="logo"
          src="/images/logo.png"
        />

        <Text className="text-center mb-20"
          element="h1"
          type="heading3-bold"
        >
          Quên mật khẩu
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

          <Button className="mb-20"
            htmlType="submit"
          >
            Đăng nhập
          </Button>

          {/* <Text type="heading5-regular" color="cblack" className="flex-center">
            <Link to="/sign-in">
              <Icon icon="t4font-ic-eva_arrow-ios-back-fill" />
              {' '}
              Quay lại đăng nhập
            </Link>
          </Text> */}
        </Form>
      </div>
    </>
  );
}
