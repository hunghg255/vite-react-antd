import React from 'react';

import classNames from 'classnames';

import Loading from '@/components/UI/Loading';

export interface ButtonProps {
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode | string;
  className?: string;
  onClick?: any;
  loading?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  children,
  className,
  onClick,
  loading,
  disabled,
  htmlType = 'button',
}) => {
  const classes = classNames(
    type,
    className,
    { btnLoading: loading },
    { btnDisabled: disabled },
    { [size]: !!size },
  );

  const onClickBtn = () => {
    if (disabled || loading) {
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={classes} onClick={onClickBtn} type={htmlType}>
      {children}

      {loading && <Loading />}
    </button>
  );
};

export default Button;
