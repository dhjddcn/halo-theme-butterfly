/**
 * @date: 2024/3/30
 * @author: 小红
 * @fileName: _decorator
 * @Description: 装饰器
 */

import Message from './_message';
import Theme from './theme';
import Scroll from './scroll';
import Common from './common';

/**
 * @desc: 注册应用
 * @returns function(*): *
 * @param modules
 */
export function App(modules) {
  return function(target) {
    Object.setPrototypeOf(target.prototype, {
      useConfig: window.ThemeConfig, //配置
      useTheme: new Theme(), //主题
      useCommon: new Common(), // 普通
      useScroll: new Scroll(), //滚动导航侧边
      useMessage: new Message(), //消息
    });
    const ins = new target();
    const fns = Object.getOwnPropertyNames(ins.__proto__);
    // 运行实例方法
    for (let i = 0; i < fns.length; i++) fns[i].startsWith('run_') && ins[fns[i]]();
    // 实例化模块 
    for (let i = 0; i < modules.length; i++) {
      Object.setPrototypeOf(modules[i].prototype, ins);
      new modules[i]();
    }
    window.ByApp = ins;
    return window.ByApp;
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