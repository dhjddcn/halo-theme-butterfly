import {defineConfig} from 'vite';
import {fileURLToPath} from 'url';
import path from 'path';
import UnoCSS from 'unocss/vite';
import Autoprefixer from 'autoprefixer';
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
    postcss:{
      plugins: [
        Autoprefixer({
          overrideBrowserslist: ['> 0.5%', 'last 2 versions', 'not dead'], // 指定兼容的浏览器范围
        }),
      ]
    }
  },
  build: {
    outDir: fileURLToPath(new URL('./templates/assets', import.meta.url)), // 指定输出目录
    target: 'es2015', 
    emptyOutDir: false, // 清空输出目录
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: '__BUTTERFLY_MAIN',
      fileName: 'butterfly',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].js',
        assetFileNames: 'css/[name].[ext]',
      },
    },
  },
});
