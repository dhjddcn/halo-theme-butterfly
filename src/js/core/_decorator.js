/**
 * @date: 2024/3/30
 * @author: 小红
 * @fileName: _decorator
 * @Description: 装饰器
 */

import Application from './Application';

/**
 * @desc: 注册应用
 * @returns function(*): *
 * @param modules
 */
export function App(modules) {
  return function(target) {
    document.addEventListener('DOMContentLoaded', () => {
      const app = new Application();
      Object.setPrototypeOf(target.prototype, app);
      Object.defineProperty(target.prototype, 'modules', {value: modules});
      const ins = new target();
      const fns = Object.getOwnPropertyNames(ins.__proto__);
      // 运行实例方法
      for (let i = 0; i < fns.length; i++) fns[i].startsWith('run_') && ins[fns[i]]();
      // 运行模块
      for (let i = 0; i < ins.modules.length; i++) new ins.modules[i](app);
      window.ByApp = ins;
    });
    return window.ByApp;
  };
}

  