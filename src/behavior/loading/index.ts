/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Loading
 * @Description: 页面加载
 */
import { LoadingOptions } from './types';
import './style.scss';
import Spinner from './Spinner';

class Loading {
  options: LoadingOptions;

  el: HTMLElement | null = null;

  public constructor(options: LoadingOptions) {
    console.log(options);
    this.options = options;
    this.#addRelative();
  }

  /**
   * 找到loading  添加 relative
   */
  #addRelative() {
    this.el = document.querySelector(this.options.el as string);

    if (!this.el) throw new Error('未找到loading el');

    const classList: string[] = ['loading-parent--relative'];

    if (this.options.fullscreen) {
      classList.push('loading-parent--hidden');
    }

    this.el.classList.add(...classList);

    this.#checkMask();
  }

  /**
   * 检查是否有loading mask 如果就就不需要创建
   */
  #checkMask() {
    let mask = document.querySelector('.loading-mask');

    if (mask) return;

    const classList: string[] = ['loading-mask'];

    if (this.options.fullscreen) {
      classList.push('is-fullscreen');
    }
    mask = document.createElement('div');

    const spinner = new Spinner(this.options.type);

    mask.innerHTML = spinner.getHtmlText();

    mask.classList.add(...classList);

    this.el?.appendChild(mask);
  }

  public start() {}

  public stop() {}
}

export default function (options?: LoadingOptions) {
  options = options || { el: 'body', fullscreen: true, type: window.__BUTTERFLY_CONFIG.common.loading };
  return new Loading(options);
}
