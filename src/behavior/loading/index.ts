/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Loading
 * @Description: 页面加载
 */

// import dot from './Dot';
// import circle from './Circle';
// import hourglass from './Hourglass';
// import cross_line from './CrossLine';
// import {LoadingAbs, LoadingFn} from "./types";
import './style.scss';
import { LoadingOptions } from './types';

class Loading {
  #parent: HTMLElement | null;

  #wrapper: HTMLElement | null;

  #options: LoadingOptions | null;

  public constructor(options: LoadingOptions) {
    this.#options = options;

    this.#parent = document.querySelector(options.el as string);
    this.#parent?.classList.add('loading-parent--relative', 'loading-parent--hidden');

    this.#wrapper = this.#parent?.querySelector('.loading-wrapper') as HTMLElement | null;

    if (!this.#wrapper) this.#createWrapper();
  }

  /**
   * 创建loading的wrapper
   * @private
   */
  #createWrapper() {
    const spinner = `<div class="loading-spinner"> <div class="circle"></div> </div>`;
    this.#wrapper = document.createElement('div');
    this.#wrapper.className = `loading-wrapper ${this.#options?.fullscreen ? 'is-fullscreen' : ''}`;
    this.#wrapper.style.background = this.#options?.background || '';
    this.#wrapper.innerHTML = spinner;
    this.#parent?.appendChild(this.#wrapper);
  }

  public start() {}

  public stop() {
    console.log('stop loading');
  }

  public destroy() {
    console.log('destroy loading');
  }
}

export default function createLoading(options: LoadingOptions) {
  return new Loading(options);
}
