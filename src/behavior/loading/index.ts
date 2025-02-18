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
import { compressCss } from '../../util';

const loadings = {
  /**
   * 圆
   */
  circle: () =>
    compressCss(`
       <style>
          @keyframes circleSpin {
              0% {
                  transform: rotate(0deg);
              }
              to {
                  transform: rotate(360deg);
              }
          }
          .loading-circle {
              position: relative;
              border: 4px solid rgba(0, 0, 0, 0.3);
              border-left-color: transparent;
              border-radius: 50%;
              width: 36px;
              height: 36px;
              animation: circleSpin 1s linear infinite;
          }
       </style>
    
       <div class="loading-circle"></div> 
    `),
};

class Loading {
  #parent: HTMLElement | null;

  #wrapper: HTMLElement | null;

  #options: LoadingOptions | null;

  #className: string;

  public constructor(options: LoadingOptions) {
    this.#parent = document.querySelector(options.el as string);

    if (!this.#parent) {
      throw new Error('el is not found');
    }

    this.#options = options;

    this.#className = `loading-parent--relative ${this.#options?.fullscreen ? 'loading-parent--hidden' : ''}`;

    this.#parent.className = this.#className;

    this.#wrapper = this.#parent?.querySelector('.loading-wrapper') as HTMLElement | null;

    if (!this.#wrapper) this.#createWrapper();
  }

  /**
   * 创建loading的wrapper
   * @private
   */
  #createWrapper() {
    const type = window.__BUTTERFLY_CONFIG.common.loading;
    const spinner = `<div class="loading-spinner"> ${(loadings as any)[type]()}</div>`;
    this.#wrapper = document.createElement('div');
    this.#wrapper.className = `loading-wrapper ${this.#options?.fullscreen ? 'is-fullscreen' : ''}`;
    this.#wrapper.innerHTML = spinner;
    this.#parent?.appendChild(this.#wrapper);
  }

  public start(time: number) {
    if (!this.#parent) return;

    this.#parent.className = this.#className;

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
  return new Loading(options);
}
