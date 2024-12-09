import { defineConfig, presetAttributify, presetTypography, presetUno, transformerVariantGroup } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['./templates/**/*.html', './src/**/*.ts'],
  },
  theme: {
    breakpoints: {
      768: '768px', // 自定義斷點名稱
    },
  },
  presets: [presetUno(), presetTypography(), presetAttributify()],
  /** 支持这样组合的写法 before:(bg-red w-6px h-6px rounded-full inline-block content-['']) */
  transformers: [transformerVariantGroup()],
  // 注入css
  preflights: [],
  // 默认生成类名
  safelist: [],
  // 小点样式
  shortcuts: [
    {},
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
