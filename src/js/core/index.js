/**
 * @date: 2024/3/30
 * @author: 小红
 * @fileName: index
 * @Description: 注册应用
 */

import {useClearPage} from '../core/_util';
import Message from './_message';
import Theme from './theme';
import Scroll from './scroll';
import Common from './common';

/**
 * @desc: 注册应用
 * @returns function(*): *
 * @param modules
 */
export function App(modules = []) {
  return function(target) {
    Object.assign(window.MainApp.action,{
      theme: new Theme(), //主题
      common: new Common(), // 公用逻辑
      scroll: new Scroll(), //滚动导航侧边
      message: new Message(), //滚动导航侧边
      modules: [],
    })
    
    const ins = new target();

    const fns = Reflect.ownKeys(target.prototype);

    for (let i = 0; i < fns.length; i++) fns[i].startsWith('run_') && ins[fns[i]]();

    for (let i = 0; i < modules.length; i++) {
      Reflect.setPrototypeOf(modules[i].prototype, ins);
      window.MainApp.action.modules.push(new modules[i]());
    }

    useClearPage();
    
    return ins;
  };
}
