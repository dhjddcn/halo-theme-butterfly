import {defineConfig} from 'vite';
import {fileURLToPath} from 'url';
import path from 'path';
export default defineConfig({
  plugins: [

  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
  build: {
    outDir: fileURLToPath(new URL('./templates/assets/dist', import.meta.url)), // 指定输出目录
    lib: {
      entry: path.resolve(__dirname, 'src/Loading/index.ts'),
      name: 'loading',
      fileName: 'loading',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'loading.js',
        assetFileNames: 'loading.css',
      },
    },
  },
});
