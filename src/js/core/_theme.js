/**
 * @date: 2024/2/23
 * @author: 小红
 * @fileName: _theme
 * @Description: 主题切换
 */
import {useIsDaytime} from "./_util";

export default class Theme {
  mode = 'light';
  fn = null

  constructor() {
    this.#init();
  }

  // 初始化主题模式
  #init() {
    const themeMode = ThemeConfig.style['mode'];
    let theme = localStorage.getItem('Butterfly-data-theme') || 'light';

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
    localStorage.setItem('Butterfly-data-theme', theme);
    this.fn && this.fn(theme);
  }

  // 获取主题模式
  getMode() {
    const rootTheme = document.documentElement.dataset.theme;
    const locDataTheme = localStorage.getItem('Butterfly-data-theme');
    return this.mode || rootTheme || locDataTheme;
  }

  // 切换主题模式
  toggleMode() {
    this.setMode(this.mode === 'light' ? 'dark' : 'light')
  }

  // 主题模式切换回调
  change(fn) {
    this.fn = fn;
  }
}