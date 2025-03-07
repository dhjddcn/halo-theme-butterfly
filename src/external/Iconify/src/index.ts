/**
 * @date: 2025/3/6
 * @author: 小红
 * @fileName: index
 * @Description: iconify
 */

import { getIconsCSS } from '@iconify/utils';
import { locate } from '@iconify/json';
import { readFile } from 'node:fs/promises';
import esbuild from 'esbuild';
import { fileURLToPath } from 'node:url';
import { writeFileSync } from 'node:fs';
import path from 'path';
import * as fs from 'node:fs';

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

const cssName = fileURLToPath(new URL('../../../../templates/assets/css/iconify.css', import.meta.url));

const dir = path.dirname(cssName);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(cssName, { recursive: true }); // recursive: true 会递归创建所有缺失的目录
}

await IconifyCss({
  mdi: 'all',
}).then((css) => {
  // 写入 CSS 文件 distPath 文件名 iconify.css
  writeFileSync(cssName, css);
});
