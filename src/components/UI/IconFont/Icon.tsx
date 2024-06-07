// @ts-ignore
import React from 'react';

import classNames from 'classnames';

import { Ticon } from '../../../../public/svgtocss/icon-type';

export const Icon = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement> & { icon: Ticon; className?: string }) => {
  // @ts-ignore
  return <i className={classNames(props.icon, className)} {...props} />;
};
