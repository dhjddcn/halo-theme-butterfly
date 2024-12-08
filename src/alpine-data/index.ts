/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: index
 * @Description: Alpinejs 数据绑定
 */

import Alpine from 'alpinejs';

const modules = import.meta.glob('./*.ts', { eager: true });

for (let key in modules) {
  const module = modules[key];

  const moduleName = key.replace('./', '').replace('.ts', '');

  Alpine.data(moduleName, (module as any).default);
}
window.Alpine = Alpine;

Alpine.start();
