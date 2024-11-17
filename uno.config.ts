import { defineConfig } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['./templates/**/*.html', './src/main.ts'],
  },
});
