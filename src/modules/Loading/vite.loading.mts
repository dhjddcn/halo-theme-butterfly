import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {readFileSync} from "node:fs";
import * as sass from 'sass';

export default defineConfig({
  plugins: [
    {
      name: 'scss-to-css',
      transform: async function (_, id) {
        if (id.includes('.scss')) {

          const scssContent = readFileSync(id.split('?raw')[0], 'utf-8');

          if (!scssContent) return '';

          // 编译 SCSS 为 CSS
          const result = sass.compileString(scssContent, {
            style: 'compressed',  // 或者 'compressed'
          });

          return {
            code: `export default ${JSON.stringify(result.css)}`,
            map: null,  // 如果需要 source map 可以加上
          };
        }
        return null;
      },
    }
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
        // outputStyle: 'none',  // 不生成 CSS 文件
      },
    },
  },
  build: {
    outDir: fileURLToPath(new URL('../../../templates/assets/dist', import.meta.url)), // 指定输出目录
    emptyOutDir: false, // 清空输出目录
    lib: {
      entry: path.resolve(__dirname, './src/Loading.ts'),
      name: 'loading',
      fileName: 'loading',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'loading.js',
      },
    },
  },
});
