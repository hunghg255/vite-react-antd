import React from 'react';

import classNames from 'classnames';

import type { Ticon } from '../../../../public/svgtocss/icon-type';

export function Icon({
  className = '',
  ...props
}: React.SVGProps<any> & { icon: Ticon; className?: string }) {
  return <i className={classNames(props.icon, className)} {...props} />;
}
