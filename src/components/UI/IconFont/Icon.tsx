import React from 'react';

// @ts-ignore
import { T4fontClassname } from '../../../../public/t4font/t4font.js';

export const Icon = (props: React.SVGProps<SVGSVGElement> & { iconName: T4fontClassname }) => {
  // @ts-ignore
  return <i className={`${props.iconName}`} {...props} />;
};
