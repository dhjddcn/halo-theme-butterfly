/**
 * @date: 2025/3/6
 * @author: 小红
 * @fileName: Iconify
 * @Description: 生成图标
 */
import esbuild from 'esbuild';
import { readFile } from 'node:fs/promises';
import { locate } from '@iconify/json';
import { getIconsCSS } from '@iconify/utils';
import { Plugin } from 'vite';

let cssText = '';

/**
 * 生成 Iconify CSS
 * @param icons
 * @constructor
 */
async function IconifyCss(icons: any) {
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

    return await compressCss(cssText);
  }

  return await genIconifyCss();
}

export default function Iconify(opts: any): Plugin {
  return {
    name: 'vite-plugin-Iconify',
    enforce: 'post',
    generateBundle: async (_, _bundle) => {
      if (!cssText) {
        cssText = await IconifyCss(opts);
      }

      for (const fileName in _bundle) {
        const asset = _bundle[fileName];

        // 检查是否是 CSS 文件
        if (fileName.endsWith('.css') && asset.type === 'asset') {
          asset.source += cssText;
        }
      }
    },
  };
}
