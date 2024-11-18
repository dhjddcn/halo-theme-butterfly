import { defineConfig, presetTypography, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['./templates/**/*.html', './src/main.ts'],
  },
  presets: [presetUno(), presetTypography(), presetIcons()],
});
