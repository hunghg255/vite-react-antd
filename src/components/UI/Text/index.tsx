/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
  type?:
    | 'heading1-medium'
    | 'heading2-medium'
    | 'heading3-bold'
    | 'heading3-medium'
    | 'heading3-regular'
    | 'heading4-medium'
    | 'heading5-bold'
    | 'heading5-medium'
    | 'heading5-regular'
    | 'body-bold'
    | 'body-medium'
    | 'body-regular'
    | 'body-underline'
    | 'caption-regular'
    | (string & {});
  color?:
    | 'cwhite'
    | 'cblack'
    | 'primary-lighter'
    | 'primary-light'
    | 'primary-main'
    | 'primary-dark'
    | 'primary-darker'
    | 'secondary-lightest'
    | 'secondary-lighter'
    | 'secondary-light'
    | 'secondary-main'
    | 'secondary-dark'
    | 'neutral-white'
    | 'neutral-gray-2'
    | 'neutral-gray-3'
    | 'neutral-gray-4'
    | 'neutral-gray-5'
    | 'neutral-gray-6'
    | 'neutral-gray-7'
    | 'neutral-gray-8'
    | 'neutral-gray-9'
    | 'neutral-gray-10'
    | 'success-background'
    | 'success-hover'
    | 'success-main'
    | 'success-active'
    | 'warning-background'
    | 'warning-hover'
    | 'warning-main'
    | 'warning-active'
    | 'error-background'
    | 'error-hover'
    | 'error-main'
    | 'error-active'
    | 'link-1'
    | 'link-2'
    | 'link-3'
    | 'link-4'
    | 'link-5'
    | (string & {});
  disabled?: boolean;
  state?: null | 'disable';
  className?: string | (string & {});
  onClick?: () => void;
  element?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

const Text: React.FC<TextProps> = ({
  type,
  color,
  disabled = false,
  className = '',
  onClick = () => {},
  children,
  element = 'p',
}) => {
  const classes = classNames(type, color, { 'text-disable': disabled }, className);

  return React.createElement(
    element,
    {
      className: classes,
      onClick,
    },
    React.createElement(React.Fragment, undefined, children),
  );
};

export default Text;
