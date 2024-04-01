/**
 * @date: 2024/3/30
 * @author: 小红
 * @fileName: _decorator
 * @Description: 装饰器
 */

import {runInsFn, runModulesFn} from '../core/_util';
import Application from './Application';

/**
 * @desc: 注册应用
 * @returns {*}
 * @param modules
 */
export function App(modules) {
  return function(target) {
    document.addEventListener('DOMContentLoaded', () => {
      const app = new Application();
      Object.setPrototypeOf(target.prototype, app);
      const ins = new target();
      runInsFn(ins); // 运行实例方法
      runModulesFn(modules, app); // 运行模块
      window.ByApp = ins;
    });
    return window.ByApp;
  };
}

