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
      const ins = new target();
      const fns = Object.getOwnPropertyNames(ins.__proto__);
      // 运行实例方法
      for (let i = 0; i < fns.length; i++) fns[i].startsWith('run_') && ins[fns[i]]();
      // 实例化模块 
      for (let i = 0; i < modules.length; i++) {
        const module = new modules[i](app);
        Object.defineProperty(ins, `use${module.NAME}`, {value: module});
      }
      window.ByApp = ins;
    });
    return window.ByApp;
  };
}

/**
 * @desc: 模块
 * @param name
 * @returns {function(*): *}
 */
export function module(name) {
  return function(target) {
    Object.defineProperty(target.prototype, 'NAME', {value: name});
    return target;
  };
}

export function run(target, key, descriptor) {
  const fn = descriptor.value;
  descriptor.value = function() {
    fn.call(this);
    console.log(`run ${key}`);
  };
  return descriptor;
}