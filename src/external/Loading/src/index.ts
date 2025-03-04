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
  options: LoadingOptions = { el: 'body', type: window.__BUTTERFLY_CONFIG.common.loading };

  #el: HTMLElement | null = 'body';

  #classList: string[] = [];

  public constructor(options?: LoadingOptions) {
    this.options = { ...this.options, ...options, fullscreen: options?.el === 'body' ? true : options?.fullscreen };
    console.log(this.options);
    // this.hasStyle();
    // this.addRelative();
  }

  /**
   * 检查是否有style 如果没有就创建
   * @private
   */
  private hasStyle() {
    const name = 'loading-style';

    if (checkTag(`.${name}`)) return;

    createStyleTag(styles, name);
  }

  /**
   * 找到 loading el 添加 relative
   */
  private addRelative() {
    this.#el = document.querySelector(this.options.el as string);

    if (!this.#el) throw new Error('未找到loading el');

    this.#classList = ['loading-parent--relative'];

    if (this.options.fullscreen) {
      this.#classList.push('loading-parent--hidden');
    }

    this.#el.classList.add(...this.#classList);

    this.checkMask();
  }

  /**
   * 检查是否有loading mask 如果就就不需要创建
   */
  private checkMask() {
    let mask = this.#el?.querySelector('.loading-mask');

    if (mask) return;

    const classList: string[] = ['loading-mask'];

    if (this.options.fullscreen) {
      classList.push('is-fullscreen');
    }
    mask = document.createElement('div');

    mask.innerHTML = this.createSpinner();

    mask.classList.add(...classList);

    this.#el?.appendChild(mask);
  }

  private createSpinner() {
    return `<div class="loading-spinner">${Look[this.options.type]()}</div>`;
  }

  public start() {
    addClass(this.#el as HTMLElement, ...this.#classList);
  }

  public stop() {
    removeClass(this.#el as HTMLElement, ...this.#classList);
  }
}

const ins = new Loading();

window.addEventListener('load', () => setTimeout((_) => ins.stop(), 1000));

export default {
  create: (options: LoadingOptions) => new Loading(options),
  ins,
};

export interface LoadingInstance {
  create: (options: LoadingOptions) => Loading;
  ins: Loading;
}
