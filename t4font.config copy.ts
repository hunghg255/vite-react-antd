import { defineConfig } from 'csvg-to-font';

export default defineConfig({
  src: 'public/svgIcon', // svg path
  dist: 'public/t4font', // output path
  fontName: 't4font', // font name
  css: true, // Create CSS files.
  typescript: true,
});
