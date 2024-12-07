import {defineConfig} from 'vite';
import {fileURLToPath} from 'url';
import path from 'path';
import UnoCSS from 'unocss/vite';
import {getIconsCSS} from "@iconify/utils";
import {locate} from "@iconify/json";
import {readFile} from "node:fs/promises";
import fs from "node:fs";
import esbuild from "esbuild";
import fgb from "fast-glob";


/**
 * 生成完整 Iconify CSS
 * @param dir
 * @param force
 * @param icons
 * @constructor
 */
async function IconifyCss({force, icons}: { force?: boolean, icons: any }) {
  // 缓存文件路径   生成全量的 Iconify CSS  时间太长如果配置没有变化则不生成
  const cacheFilePath = path.resolve('./node_modules/.cache/vite-plugin-iconify', 'IconifyCssCache.json');


  // 生成缓存文件
  function genCacheFile(jsonData: object) {
    if (!fs.existsSync(path.dirname(cacheFilePath))) {
      fs.mkdirSync(path.dirname(cacheFilePath), {recursive: true});
    }
    if (jsonData) {
      fs.writeFileSync(cacheFilePath, JSON.stringify(jsonData));
    }
  }

  // 获取缓存文件
  function getCachedFile() {
    return fs.existsSync(cacheFilePath) ? fs.readFileSync(cacheFilePath, 'utf8') : '{}';
  }

  // 缓存是否一致
  function isCache() {
    return getCachedFile() === JSON.stringify(icons);
  }

  // 压缩 CSS
  async function compressCss(css: string) {
    const result = await esbuild.transform(css, {
      loader: 'css',
      minify: true,
    });
    return result.code;
  }

  // 生成 Iconify CSS
  async function genIconifyCss() {
    let cssText: string = '';

    for (const prefix in icons) {
      const iconSet = JSON.parse(await readFile(locate(prefix), 'utf8'));

      const v = (icons as any)[prefix];

      const css = getIconsCSS(iconSet, v === 'all' ? Object.keys(iconSet.icons) : v, {
        iconSelector: '.i-{prefix}-{name}',
        commonSelector: `[class^="i-${prefix}-"]`,
      });

      cssText += css;
    }

    const css = await compressCss(cssText);

    genCacheFile(icons);

    return css;
  }

  if (force || !isCache()) {
    return await genIconifyCss();
  }


  return null;
}

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
    // 生成 Iconify CSS
    {
      name: 'vite-plugin-Iconify',
      enforce: 'post',
      generateBundle: async (_options, _bundle: any) => {
        const css = await IconifyCss({
          force: false,
          icons: {
            mdi: 'all',
          }
        });

        if (css) {
          _bundle['iconify.css'] = {
            type: 'asset',
            fileName: 'iconify.css',
            source: css,
          }
        }
      }
    }
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
        assetFileNames: 'butterfly.css',
      },
    },
  },
});
