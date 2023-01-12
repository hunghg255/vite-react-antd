import fs from 'fs';
import { iconList } from 'react-icomoon';

import iconSet from '../src/components/UI/Icon/selection.json' assert { type: 'json' };

const getTemplate = () => {
  const names = iconList(iconSet);

  const template = `
    export default interface IIconProps {
      icon: ${names.map((name) => `'${name}'`).join(' | ')} | (string & {});
      color?: string;
      size?: string | number;
      className?: string;
      style?: React.CSSProperties;
      [name: string]: any;
    }
  `;

  return template;
};

const generate = (interfacePath) => {
  const template = getTemplate();

  fs.writeFileSync(interfacePath, template, 'utf8');
};

generate('src/components/UI/Icon/icon.interface.ts');
