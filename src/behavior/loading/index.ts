/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Loading
 * @Description: 页面加载
 */

import './style.scss';
import { LoadingOptions } from './types';
import Spinner from './Spinner';

class Loading {
  #parent: HTMLElement | null;

  #wrapper: HTMLElement | null;

  #options: LoadingOptions | null;

  className: string;

  public constructor(options: LoadingOptions) {
    this.#parent = document.querySelector(options.el as string);

    if (!this.#parent) {
      throw new Error('el is not found');
    }

    this.#options = options;

    this.className = `loading-parent--relative ${this.#options?.fullscreen ? 'loading-parent--hidden' : ''}`;

    this.#parent.className = this.className;

    this.#wrapper = this.#parent?.querySelector('.loading-wrapper') as HTMLElement | null;

    if (!this.#wrapper) this.#createWrapper();
  }

  /**
   * 创建loading的wrapper
   * @private
   */
  #createWrapper() {
    this.#wrapper = document.createElement('div');
    this.#wrapper.className = `loading-wrapper ${this.#options?.fullscreen ? 'is-fullscreen' : ''}`;
    // const spinner = `<div class="loading-spinner"> ${(loadings as any)[type]()}</div>`;
    // this.#wrapper.innerHTML = spinner.get(window.__BUTTERFLY_CONFIG.common.loading);
    this.#parent?.appendChild(this.#wrapper);
  }

  public start(time: number) {
    if (!this.#parent) return;

    this.#parent.className = this.className;

    if (time) {
      setTimeout(() => {
        this.stop();
      }, time);
    }
  }

  public stop() {
    this.#parent?.classList.remove(...['loading-parent--relative', 'loading-parent--hidden']);
  }

  public destroy() {
    console.log('destroy loading');
  }
}

export default function createLoading(options: LoadingOptions) {
  const spinner = new Spinner();

  return new Loading(options);
}
