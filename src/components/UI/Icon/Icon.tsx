import React from 'react';

import IcoMoon from 'react-icomoon';

import IIconProps from './icon.interface';
import iconSet from './selection.json';

const Icon = (props: IIconProps) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
