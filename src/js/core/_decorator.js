/**
 * @date: 2024/3/30
 * @author: 小红
 * @fileName: _decorator
 * @Description: 装饰器
 */

import Application from './Application';

/**
 * @desc: 注册应用
 * @returns {*}
 * @param modules
 */
export function App(modules) {
  return function(target) {
    const app = new Application();
    Object.setPrototypeOf(target.prototype, app);
    const keys = Object.getOwnPropertyNames(target.prototype);
    for (let i = 0; i < keys.length; i++) keys[i].startsWith('run_') && target.prototype[keys[i]]();
    for (let i = 0; i < modules.length; i++) new modules[i](app);
    return target;
  };
}

/**
 * @desc: 注册模块
 * @returns {*}
 * @param name
 */
export function module(name) {
  return function(target) {
    target.prototype.name = name;
    return target;
  };
}

