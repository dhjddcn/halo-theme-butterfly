/**
 * @date: 2024/2/23
 * @author: 小红
 * @fileName: _theme
 * @Description: 主题切换
 */
import {useIsDaytime} from './_util';

export default class Theme {
  #LOCALSTORAGE_KEY = 'data-color-scheme';
  #ATTR_KEY = 'colorScheme'; // 根元素主题属性
  #CHANGE_FN = null; // 主题切换回调
  mode = 'light'; // 主题模式

  // 初始化主题模式
  constructor() {
    window.addEventListener('load', () => {
      const mes = {
        auto: () => useIsDaytime() ? 'light' : 'dark',
        user: () => localStorage.getItem(this.#LOCALSTORAGE_KEY) || 'light',
        light: () => 'light',
        dark: () => 'dark',
      };
      this.setMode(mes[MainApp.conf.style_mode]());
    });
  }

  // 设置主题模式
  setMode(theme) {
    this.mode = theme;
    document.documentElement.dataset[this.#ATTR_KEY] = theme;
    localStorage.setItem(this.#LOCALSTORAGE_KEY, theme);
    this.#CHANGE_FN && this.#CHANGE_FN(theme);

    // halo评论主题
    this.setHaloCommentTheme(theme);
  }

  // 获取主题模式
  getMode() {
    const rootTheme = document.documentElement.dataset.theme;
    const locDataTheme = localStorage.getItem(this.#LOCALSTORAGE_KEY);
    return this.mode || rootTheme || locDataTheme;
  }

  // 切换主题模式
  toggleMode() {
    this.setMode(this.mode === 'light' ? 'dark' : 'light');
  }

  // 主题模式切换回调
  change(fn) {
    this.#CHANGE_FN = fn;
  }

  // 设置halo评论主题
  setHaloCommentTheme(theme) {
    const haloComment = document.querySelector('.theme-halo-comment #comment');

    if(!haloComment) return;

    const haloCommentWidget = haloComment.querySelector('div')?.shadowRoot?.querySelector('.halo-comment-widget');

    haloCommentWidget.classList.remove('light', 'dark');
    
    haloCommentWidget.classList.add(theme);
  }

}