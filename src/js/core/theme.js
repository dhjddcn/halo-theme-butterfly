/**
 * @date: 2024/2/23
 * @author: 小红
 * @fileName: _theme
 * @Description: 主题切换
 */
import {useIsDaytime} from "./_util";
import useUniverse from "./_universe";

export default class Theme {
  #LOCALSTORAGE_KEY = 'Butterfly-data-theme';
  #CHANGE_FN = null;

  #useUniverse = new useUniverse()
  mode = 'light';

  // 初始化主题模式
  constructor() {
    const themeMode = byApp.config.style['mode'];
    let theme = localStorage.getItem(this.#LOCALSTORAGE_KEY) || 'light';

    if (themeMode === 'auto') {
      theme = useIsDaytime() ? 'light' : 'dark';
    } else if (themeMode === 'light' || themeMode === 'dark') {
      theme = themeMode;
    }

    this.setMode(theme);
  }

  // 设置主题模式
  setMode(theme) {
    this.mode = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(this.#LOCALSTORAGE_KEY, theme);
    // 绘制宇宙背景
    this.#useUniverse.draw(theme);
    this.#CHANGE_FN && this.#CHANGE_FN(theme);
  }

  // 获取主题模式
  getMode() {
    const rootTheme = document.documentElement.dataset.theme;
    const locDataTheme = localStorage.getItem(this.#LOCALSTORAGE_KEY);
    return this.mode || rootTheme || locDataTheme;
  }

  // 切换主题模式
  toggleMode() {
    this.setMode(this.mode === 'light' ? 'dark' : 'light')
  }

  // 主题模式切换回调
  change(fn) {
    this.#CHANGE_FN = fn;
  }
}