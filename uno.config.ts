import { defineConfig, presetUno } from 'unocss';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  content: {
    filesystem: ['./templates/**/*.html', './src/main.ts'],
  },
  presets: [
    presetUno(),
    presetIcons({
      // scale: 1.2, // 图标的缩放比例
      // extraProperties: {
      //   'display': 'inline-block',
      //   'vertical-align': 'middle', // 图标对齐方式
      // },
    }),
  ],
});
