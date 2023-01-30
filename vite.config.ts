import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import checker from 'vite-plugin-checker';
import * as path from 'path';
import { antdDayjs } from 'antd-dayjs-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode !== 'production';
  const isAnalyze = mode === 'analyze';

  return {
    plugins: [
      react(),
      antdDayjs(),
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
    css: {
      devSourcemap: isDev,
    },
    optimizeDeps: {
      include: ['react'],
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/],
      },
      sourcemap: isAnalyze,
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    esbuild: {
      sourcemap: isDev,
    },
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
  };
});
