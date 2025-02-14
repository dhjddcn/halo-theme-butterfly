/**
 * @date: 2024/12/8
 * @author: 小红
 * @fileName: theme
 * @Description: 主题
 */
import { useIsDaytime } from '../../util';
import { ATTR_KEY, LOCALSTORAGE_KEY, ThemeMode } from './types';

export default class Theme {
  #mode: string = ThemeMode.light; // 主题模式

  // 初始化主题模式
  constructor() {
    const mes: any = {
      auto: useIsDaytime() ? ThemeMode.light : ThemeMode.dark,
      user: localStorage.getItem(LOCALSTORAGE_KEY) || ThemeMode.light,
      light: ThemeMode.light,
      dark: ThemeMode.dark,
    };
    this.set(mes[window.__BUTTERFLY_CONFIG.common.mode]);
  }

  // 设置主题模式
  set(theme: string) {
    this.#mode = theme;

    document.documentElement.dataset[ATTR_KEY] = theme;
    localStorage.setItem(LOCALSTORAGE_KEY, theme);

    // halo评论主题
    this.setHaloCommentTheme(theme);
  }

  // 获取主题模式
  get() {
    const rootTheme = document.documentElement.dataset.theme;
    const locDataTheme = localStorage.getItem(LOCALSTORAGE_KEY);
    return this.#mode || rootTheme || locDataTheme;
  }

  // 切换主题模式
  toggle() {
    this.set(this.#mode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light);
  }

  // 设置halo评论主题
  setHaloCommentTheme(theme: string) {
    const haloComment = document.querySelector('.theme-halo-comment #comment');

    if (!haloComment) return;

    const haloCommentWidget = haloComment.querySelector('div')?.shadowRoot?.querySelector('.halo-comment-widget');

    if (!haloCommentWidget) return;

    haloCommentWidget?.classList.remove(ThemeMode.light, ThemeMode.dark);

    haloCommentWidget?.classList.add(theme);
  }
}
