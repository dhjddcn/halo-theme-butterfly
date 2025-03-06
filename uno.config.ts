import { defineConfig, presetAttributify, presetTypography, presetUno, transformerVariantGroup } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['./templates/**/*.html', './src/**/*.ts'],
  },
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  presets: [presetUno(), presetTypography(), presetAttributify()],
  /** 支持这样组合的写法 before:(bg-red w-6px h-6px rounded-full inline-block content-['']) */
  transformers: [transformerVariantGroup()],
  // 注入css
  preflights: [],
  // 默认生成类名
  safelist: [],
  rules: [
    [
      /^transition-\[(.+)]$/,
      ([, value]) => ({
        transition: value.replace(/_/g, ' '), // 将 "_" 替换为 " "
      }),
    ],
  ],
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
    {
      'flex-center': 'flex items-center justify-center',
      'bg-ccr': 'bg-center bg-cover',
    },
  ],
});
