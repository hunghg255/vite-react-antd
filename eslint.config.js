import { basic, react } from '@hunghg255/eslint-config';

export default [
  ...basic(),
  ...react(),
  {
    ignores: ['dist/**/*.ts', 'dist/**', 'scripts/genColorCss.ts'],
  },
];
