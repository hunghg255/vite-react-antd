import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import checker from 'vite-plugin-checker';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin('all'),
    //  resolve({ "react-codemirror2": `
    //       const UnControlled = {};
    //       export {
    //         UnControlled,
    //       }`
    //   }
    checker({
      typescript: true,
    }),
  ],
  optimizeDeps: {
    include: ['react'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  esbuild: {
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
