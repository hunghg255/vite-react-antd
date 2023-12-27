// @ts-ignore
import React from 'react';

import classNames from 'classnames';

export const Icon = ({
  className = '',
  ...props
}: React.SVGProps<SVGSVGElement> & { icon: any; className?: string }) => {
  // @ts-ignore
  return <i className={classNames(props.icon, className)} {...props} />;
};
