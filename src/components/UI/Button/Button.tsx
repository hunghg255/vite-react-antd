import React, { MouseEvent } from 'react';

import classNames from 'classnames';

import Loading from '@/components/UI/Loading';

export interface ButtonProps {
  type?:
    | 'xhotel-primary'
    | 'xhotel-secondary'
    | 'xhotel-negative-primary'
    | 'xhotel-negative-secondary'
    | 'xhome-primary'
    | 'xhome-secondary'
    | 'xhome-negative-primary'
    | 'xhome-negative-secondary'
    | 'xhome-purple-primary'
    | 'xhome-purple-secondary'
    | 'xhome-purple-negative-primary'
    | 'xhome-purple-negative-secondary';

  size?: 'large' | 'medium';
  isFullWidth?: boolean;
  children: React.ReactNode | string;
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
  className?: string;
  onClick?: any;
  loading?: boolean;
  disabled?: boolean;
  htmlType?: 'button' | 'submit';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'medium',
  children,
  className,
  onClick,
  loading,
  disabled,
  prefix,
  suffix,
  isFullWidth,
  htmlType = 'button',
  style,
}) => {
  const classes = classNames(
    type,
    'button',
    className,
    { loading },
    { btnDisabled: disabled },
    { btnPrefix: !!prefix },
    { btnSuffix: !!suffix },
    { fullWidth: isFullWidth },
    { [size]: !!size },
  );

  const onClickBtn = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      className={classes}
      onClick={onClickBtn}
      type={disabled || loading ? 'button' : htmlType}
      style={style}
    >
      {prefix && prefix}

      {!loading && children}

      {suffix && suffix}

      {loading && <Loading />}
    </button>
  );
};

export default Button;
