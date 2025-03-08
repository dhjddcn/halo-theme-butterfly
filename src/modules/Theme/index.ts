/**
 * @date: 2024/12/8
 * @author: 小红
 * @fileName: theme
 * @Description: 主题
 */
import { useIsDaytime } from '../../util';

// 主题模式
export enum THEME_MODE {
  auto = 'auto',
  user = 'user',
  light = 'light',
  dark = 'dark',
}

// 本地存储key
export const LOCALSTORAGE_KEY: string = 'data-color-scheme';

// 根元素主题属性
export const ATTR_KEY: string = 'colorScheme';

// 主题
export default class Theme {
  #mode: string = THEME_MODE.light; // 主题模式

  #changeCallback!: Function; // 切换主题回调

  #FNS: Record<THEME_MODE, () => THEME_MODE> = {
    auto: () => (useIsDaytime() ? THEME_MODE.light : THEME_MODE.dark),
    user: () => (localStorage.getItem(LOCALSTORAGE_KEY) as THEME_MODE) || THEME_MODE.light,
    light: () => THEME_MODE.light,
    dark: () => THEME_MODE.dark,
  };

  /**
   * 构造函数
   */
  public constructor() {
    const mode = this.#FNS[window.__BUTTERFLY_CONFIG.style.mode]();

    this.set(mode);
  }

  /**
   * 设置主题
   * @param theme
   */
  public set(theme: string) {
    document.documentElement.dataset[ATTR_KEY] = theme;
    localStorage.setItem(LOCALSTORAGE_KEY, theme);
    this.#mode = theme;

    this.#changeCallback && this.#changeCallback(theme);

    // halo评论主题
    this.setHaloCommentTheme(theme);
  }

  /**
   * 切换主题回调
   * @param fn
   */
  public change(fn: Function) {
    this.#changeCallback = fn;
  }

  /**
   * 获取主题
   */
  public get() {
    return this.#mode || document.documentElement.dataset.theme || localStorage.getItem(LOCALSTORAGE_KEY);
  }

  /**
   * 切换主题
   */
  public toggle() {
    this.set(this.#mode === THEME_MODE.light ? THEME_MODE.dark : THEME_MODE.light);
  }

  /**
   * 设置halo评论主题
   * @param theme
   */
  public setHaloCommentTheme(theme: string) {
    const haloComment = document.querySelector('.theme-halo-comment #comment');

    if (!haloComment) return;

    const haloCommentWidget = haloComment.querySelector('div')?.shadowRoot?.querySelector('.halo-comment-widget');

    if (!haloCommentWidget) return;

    haloCommentWidget?.classList.remove(THEME_MODE.light, THEME_MODE.dark);

    haloCommentWidget?.classList.add(theme);
  }
}
