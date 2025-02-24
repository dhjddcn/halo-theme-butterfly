/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Loading
 * @Description: 页面加载
 */
import { LoadingOptions, LoadingSpinner } from './types';
import './style.scss';
import * as Spinner from './Spinner';
import { addClass, checkTag, createStyleTag, removeClass } from '../util';

class Loading {
  options: LoadingOptions;

  el: HTMLElement | null = null;

  classList: string[] = [];

  public constructor(options: LoadingOptions) {
    this.options = options;
    this.addRelative();
  }

  /**
   * 找到loading  添加 relative
   */
  private addRelative() {
    this.el = document.querySelector(this.options.el as string);

    if (!this.el) throw new Error('未找到loading el');

    this.classList = ['loading-parent--relative'];

    if (this.options.fullscreen) {
      this.classList.push('loading-parent--hidden');
    }

    this.el.classList.add(...this.classList);

    this.checkMask();
  }

  /**
   * 检查是否有loading mask 如果就就不需要创建
   */
  private checkMask() {
    let mask = this.el?.querySelector('.loading-mask');

    if (mask) return;

    const classList: string[] = ['loading-mask'];

    if (this.options.fullscreen) {
      classList.push('is-fullscreen');
    }
    mask = document.createElement('div');

    mask.innerHTML = this.createSpinner();

    mask.classList.add(...classList);

    this.el?.appendChild(mask);
  }

  private createSpinner() {
    const type = this.options.type || window.__BUTTERFLY_CONFIG.common.loading;

    const className = `loading-${type}`;

    const module: LoadingSpinner = new Spinner[type]();

    if (!checkTag(className)) {
      createStyleTag(module.getCssText(), className);
    }

    return `<div class="loading-spinner">${module.getHtmlText()}</div>`;
  }

  public start() {
    addClass(this.el as HTMLElement, ...this.classList);
  }

  public stop() {
    removeClass(this.el as HTMLElement, ...this.classList);
  }
}

export default function useLoading(options?: LoadingOptions) {
  options = options || { el: 'body', fullscreen: true };
  return new Loading(options);
}
