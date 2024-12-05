/**
 * @date: 2024/12/5
 * @author: 小红
 * @fileName: template
 * @Description:模版
 */
import { Plugin } from 'vite';
import fgb from 'fast-glob';

export default function VTemplate(): Plugin {
  return {
    name: 'vite-plugin-template',
    async buildStart() {
      const files = await fgb(['./templates/**/*.html']);
      for (const file of files) {
        this.addWatchFile(file);
      }
    },
  };
}
