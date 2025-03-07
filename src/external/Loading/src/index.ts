/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Loading
 * @Description: 页面加载
 */
import * as Look from './Look';
import { addClass, checkTag, createStyleTag, removeClass } from '../../../util';
import styles from './style.scss?raw';

export type LoadingType = 'circle' | 'hourglass' | 'crossLine' | 'dot';

export interface LoadingOptions {
  text?: string;
  fullscreen?: boolean;
  type: LoadingType;
  el: string | HTMLElement;
}

class Loading {
  options: LoadingOptions = {} as LoadingOptions;

  #el: HTMLElement | null = document.body;

  #classList: string[] = [];

  public constructor(options?: LoadingOptions) {
    this.options = {
      ...this.options,
      ...(options || { el: 'body', fullscreen: true, type: window?.__BUTTERFLY_CONFIG?.loading?.type || 'circle' }),
    };
    this.#hasStyle();
    this.#setParentRelative();
  }

  /**
   * 检查是否有style 如果没有就创建
   * @private
   */
  #hasStyle() {
    const name = 'loading-style';

    if (checkTag(`.${name}`)) return;

    createStyleTag(styles, name);
  }

  /**
   *  设置 loading 父元素的定位
   * @private
   */
  #setParentRelative() {
    this.#el = document.querySelector(this.options.el as string);

    if (!this.#el) throw new Error('未找到loading el');

    this.#classList = ['loading-parent--relative'];

    if (this.options.fullscreen) {
      this.#classList.push('loading-parent--hidden');
    }

    this.start();

    this.#checkMask();
  }

  /**
   * 检查是否有loading mask 如果就就不需要创建
   * @private
   */
  #checkMask() {
    let mask = this.#el?.querySelector('.loading-mask');

    if (mask) return;

    const classList: string[] = ['loading-mask'];

    if (this.options.fullscreen) {
      classList.push('is-fullscreen');
    }

    mask = document.createElement('div');

    mask.innerHTML = this.#createSpinner();

    mask.classList.add(...classList);

    this.#el?.appendChild(mask);
  }

  /**
   * 创建 spinner
   * @private
   */
  #createSpinner() {
    return `<div class="loading-spinner">${Look[this.options.type]()}</div>`;
  }

  /**
   * 检查当前是否在加载中
   */
  #check() {
    return this.#el?.classList.contains('loading-parent--relative');
  }

  /**
   * 开始加载
   */
  public start() {
    if (this.#check()) return;
    addClass(this.#el as HTMLElement, ...this.#classList);
  }

  /**
   * 停止加载
   */
  public stop() {
    removeClass(this.#el as HTMLElement, ...this.#classList);
  }

  /**
   * 创建 loading
   * @param options
   */
  static createLoading(options: LoadingOptions) {
    return new Loading(options);
  }
}

const loading = new Loading();

window.addEventListener('load', () => setTimeout((_) => loading.stop(), 1000));

export default loading;
