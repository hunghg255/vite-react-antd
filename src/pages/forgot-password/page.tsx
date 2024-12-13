import React from 'react';

import { Form, Input } from 'antd';

import Button from '@/components/UI/Button/Button';
import Text from '@/components/UI/Text';

import styles from './index.module.scss';

export function Component() {
  return (
    <>
      <div className={styles.loginWrap}>
        <img src="/images/logo.png" alt="logo" />
        <Text type="heading3-bold" className="text-center mb-20" element="h1">
          Quên mật khẩu
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

          <Button htmlType="submit" className="mb-20">
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
