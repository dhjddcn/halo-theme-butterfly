import { defineConfig, presetTypography, transformerVariantGroup } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['./templates/**/*.html', './src/**/*.ts'],
  },

  /** presetIcons 支持iconify */
  presets: [
    // presetUno(),
    presetTypography(),
  ],
  /** 支持这样组合的写法 before:(bg-red w-6px h-6px rounded-full inline-block content-['']) */
  transformers: [transformerVariantGroup()],
  // 强制 UnoCSS 生成 `hidden` 类
  safelist: [],
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
