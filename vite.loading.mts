import {defineConfig} from 'vite';
import {fileURLToPath} from 'url';
import path from 'path';
// import * as sass from 'sass';


export default defineConfig({
  plugins: [
    {
      name: 'scss-to-css',
      transform: async function (code, id) {
        if (id.includes('.scss')) {

          const cleanedCode = code
            // 去掉 SCSS 注释
            .replace(/\/\*[\s\S]*?\*\//g, '')
            // 去掉换行符和回车符
            .replace(/\r\n|\n|\r/g, ' ')
            // 去掉多余的空格
            .replace(/\s+/g, ' ')
            // 提取实际的 SCSS 内容（去掉 export default 结构）
            .replace(/export default/, '')
            .replace(/"/g, '')
            .trim();

          console.log('1212    '  ,cleanedCode);
          return {
            // code: `export default ${JSON.stringify(result.css)}`,
            code: `export default ${cleanedCode}`,
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
        outputStyle: 'none',  // 不生成 CSS 文件
      },
    },
  },
  build: {
    outDir: fileURLToPath(new URL('./templates/assets/dist', import.meta.url)), // 指定输出目录
    emptyOutDir: false, // 清空输出目录
    lib: {
      entry: path.resolve(__dirname, 'src/plugins/Loading/index.ts'),
      name: 'loading',
      fileName: 'loading',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        entryFileNames: 'loading.js',
        // assetFileNames: 'loading.css',
      },
    },
  },
});
