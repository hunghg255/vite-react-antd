// @ts-ignore
import React from 'react';

import classNames from 'classnames';

import { T4fontClassname } from '../../../../public/t4font/t4font.js';

export const Icon = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement> & { icon: T4fontClassname; className?: string }) => {
  // @ts-ignore
  return <i className={classNames(props.icon, className)} {...props} />;
};
