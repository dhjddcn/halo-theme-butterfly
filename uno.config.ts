import { defineConfig, presetTypography, presetUno, presetIcons, transformerVariantGroup } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['./templates/**/*.html', './src/main.ts'],
  },
  /** presetIcons 支持iconify */
  presets: [presetUno(), presetTypography(), presetIcons()],
  /** 支持这样组合的写法 before:(bg-red w-6px h-6px rounded-full inline-block content-['']) */
  transformers: [transformerVariantGroup()],
  // 小点样式
  shortcuts: [
    [
      /^dot-before-(.*)$/,
      ([, color]) => {
        return `before:(bg-${color} w-6px h-6px rounded-full inline-block content-[''] position-relative top-[-2px] mr-5px) `;
      },
    ],
    [
      /^dot-after-(.*)$/,
      ([, color]) => {
        return `before:(bg-${color} w-6px h-6px rounded-full inline-block content-[''] position-relative top-[-2px] ml-5px) `;
      },
    ],
  ],
});
