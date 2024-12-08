/**
 * @date: 2024/12/8
 * @author: 小红
 * @fileName: theme
 * @Description: 主题
 */
import { useIsDaytime } from '../util';

class Theme {
  #LOCALSTORAGE_KEY: string = 'data-color-scheme';
  #ATTR_KEY: string = 'colorScheme'; // 根元素主题属性
  mode: string = 'light'; // 主题模式

  // 初始化主题模式
  constructor() {
    const mes: any = {
      auto: useIsDaytime() ? 'light' : 'dark',
      user: localStorage.getItem(this.#LOCALSTORAGE_KEY) || 'light',
      light: 'light',
      dark: 'dark',
    };

    this.setMode(mes[window.__BUTTERFLY_CONFIG.common.mode]);
  }

  // 设置主题模式
  setMode(theme: string) {
    this.mode = theme;
    document.documentElement.dataset[this.#ATTR_KEY] = theme;
    localStorage.setItem(this.#LOCALSTORAGE_KEY, theme);

    // halo评论主题
    this.setHaloCommentTheme(theme);
    // 文章页面代码块主题
    this.setPostCodeTheme(theme);
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

  // 设置halo评论主题
  setHaloCommentTheme(theme: string) {
    const haloComment = document.querySelector('.theme-halo-comment #comment');

    if (!haloComment) return;

    const haloCommentWidget = haloComment.querySelector('div')?.shadowRoot?.querySelector('.halo-comment-widget');

    if (!haloCommentWidget) return;

    haloCommentWidget?.classList.remove('light', 'dark');

    haloCommentWidget?.classList.add(theme);
  }

  //设置文章页面代码块主题
  setPostCodeTheme(theme: string) {
    if (theme) {
    }
  }
}
export default new Theme();
