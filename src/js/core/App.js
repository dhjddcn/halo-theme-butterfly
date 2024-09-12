/**
 * @date: 2024/3/30
 * @author: 小红
 * @fileName: App
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
export default function App(modules = []) {
  return function(target) {
    Object.assign(window.MainApp, {
      useTheme: new Theme(), //主题
      useCommon: new Common(), // 公用逻辑
      useScroll: new Scroll(), //滚动导航侧边
      useMessage: new Message(), //滚动导航侧边
    });

    const ins = new target();

    const fns = Reflect.ownKeys(target.prototype);

    for (let i = 0; i < fns.length; i++) fns[i].startsWith('run_') && ins[fns[i]]();

    for (let i = 0; i < modules.length; i++) {

      let mods = modules[i];

      if(typeof mods === 'function' && mods.name) mods = new mods();

      window.MainApp.modules[mods.name] = mods;
    }

    useClearPage();

    return ins;
  };
}
