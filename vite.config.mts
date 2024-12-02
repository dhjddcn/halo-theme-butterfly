import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import UnoCSS from 'unocss/vite';
import BuildIconify from './vite-plugin/Iconify';

export default defineConfig({
  plugins: [UnoCSS(), BuildIconify({force: true})],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  build: {
    outDir: fileURLToPath(new URL('./templates/assets/dist', import.meta.url)), // 指定输出目录
    emptyOutDir: false, // 清空输出目录
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'butterfly',
      fileName: 'butterfly',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'butterfly.css',
      },
    },
  },
});
