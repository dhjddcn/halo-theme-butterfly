import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [
    UnoCSS(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  build: {
    outDir: fileURLToPath(new URL('./templates/assets/dist', import.meta.url)),
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'main',
      fileName: 'main',
      formats: ['iife'],
    },
  },
});
