import * as path from 'node:path';

import react from '@vitejs/plugin-react';
import pages from 'react-generate-pages';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import ConsoleDebug from 'vite-console-debug/vite';
import Printer from 'vite-host-qrcode/vite';
import MinifyCssModule from 'vite-minify-css-module/vite';
import checker from 'vite-plugin-checker';
import EnvironmentPlugin from 'vite-plugin-environment';
// import webfontDownload from 'vite-plugin-webfont-dl';
import ResizeImage from 'vite-plugin-resize-image/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode !== 'production';
  const isAnalyze = mode === 'analyze';

  return {
    plugins: [
      react(),
      pages(),
      EnvironmentPlugin('all'),
      checker({
        typescript: true,
      }),
      Printer({
        info: [
          ({ bold, cyan, green }) => {
            return {
              text: `  ${green('➜')}  ${bold('Font Icon:')} ${bold(
                cyan('http://localhost:4005/public/t4font/index.html'),
              )}`,
            };
          },
        ],
      }),
      ResizeImage({
        mode: 'sharp',
        cache: false,
        compress: {
          jpg: {
            quality: 70,
          },
          jpeg: {
            quality: 70,
          },
          png: {
            quality: 70,
          },
          webp: {
            quality: 70,
          },
        },
        conversion: [
          { from: 'jpeg', to: 'webp' },
          { from: 'png', to: 'webp' },
          { from: 'JPG', to: 'jpeg' },
        ],
      }),
      // webfontDownload({ }),
      MinifyCssModule(),
      ConsoleDebug({
        noConsole: !isDev,
      }),
      {
        ...visualizer(),
        apply: 'build',
      },
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
      rollupOptions: {
        output: {
          manualChunks: {
            antd: ['antd'],
          },
        },
      },
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    esbuild: {
      sourcemap: isDev,
    },
    server: {
      port: 4005,
    },
    preview: {
      port: 4005,
    },
  };
});
