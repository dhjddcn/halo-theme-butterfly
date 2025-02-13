import {defineConfig} from 'vite';
import {fileURLToPath} from 'url';
import path from 'path';
import UnoCSS from 'unocss/vite';
import fgb from "fast-glob";



export default defineConfig({
  plugins: [
    UnoCSS(),
    // 监听 HTML 文件
    {
      name: 'vite-plugin-watch-html',
      async buildStart() {
        const files = await fgb(['./templates/**/*.html']);
        for (const file of files) {
          this.addWatchFile(file);
        }
      },
    },
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
    emptyOutDir: false, // 清空输出目录
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'butterfly',
      fileName: 'butterfly',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'butterfly.js',
        assetFileNames: 'butterfly.css',
      },
    },
  },
});
