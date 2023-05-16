import React from 'react';

import classNames from 'classnames';

interface TextProps {
  children: React.ReactNode;
  type?:
    | 'h1-bold'
    | 'h1-regular'
    | 'h2-bold'
    | 'h2-regular'
    | 'h3-bold'
    | 'h3-regular'
    | 'body-bold'
    | 'body-regular'
    | 'body-2-bold'
    | 'body-2-regular'
    | 'body-3-bold'
    | 'body-3-regular'
    | 'body-4-bold'
    | 'body-4-regular'
    | undefined;
  color?:
    | 'cwhite'
    | 'cblack'
    | 'primary-1'
    | 'primary-2'
    | 'primary-3'
    | 'primary-4'
    | 'primary-5'
    | 'secondary-1'
    | 'secondary-2'
    | 'secondary-3'
    | 'secondary-4'
    | 'secondary-5'
    | 'neutral-1'
    | 'neutral-2'
    | 'neutral-3'
    | 'neutral-4'
    | 'neutral-5'
    | 'neutral-6'
    | 'neutral-7'
    | 'link-1'
    | 'link-2'
    | 'link-3'
    | 'link-4'
    | 'link-5'
    | undefined;
  disabled?: boolean;
  state?: null | 'disable';
  className?: string;
  onClick?: () => void;
  element?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
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
