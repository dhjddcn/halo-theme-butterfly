/**
 * @date: 2024/12/1
 * @author: 小红
 * @fileName: vite-plugin-Iconify
 * @Description:图标打包插件
 */
import {Plugin} from 'vite';
import {readFile, writeFile} from 'node:fs/promises';
import {getIconsCSS} from '@iconify/utils';
import {locate} from '@iconify/json';
import esbuild from 'esbuild';
import * as fs from 'node:fs';
import path from 'path';
// all 代表所有图标
// ['home', 'account'] 代表指定图标
const icons = {
  mdi: 'all',
  // mdi: ['home', 'account'],
};

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
  return compressCss(cssText);
}

// 缓存文件路径
const cacheFilePath = path.resolve('./node_modules/.cache/vite-plugin-iconify', 'stringCache.json');

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

// 生成 CSS
async function genCss(dir: any) {
  const iconifyCss = await genIconifyCss();

  writeFile(`${dir}\\iconify.css`, iconifyCss, 'utf-8').then((_) => _);

  genCacheFile(icons);
}

export default function BuildIconify({force = false}: { force?: boolean }): Plugin {
  return {
    name: 'vite-plugin-Iconify',
    enforce: 'post',
    generateBundle: async (_, _bundle) => {

      if (force) {
        return await genCss(_.dir);
      }

      if (isCache()) {
        return;
      }

      await genCss(_.dir);
    },
  };
}
