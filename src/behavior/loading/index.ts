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
//
//
// const Loading = {
//   circle,
//   hourglass,
//   cross_line,
//   dot,
// };
//
// const type: LoadingFn = window.__BUTTERFLY_CONFIG.common.loading;
//
//
// window.addEventListener('load', () => loading?.stop());

export default class Loading {
  #parent: HTMLElement | null;

  #wrapper: HTMLElement | null;

  public constructor(options: LoadingOptions) {
    // this.#parent = document.querySelector(selector);
    //
    // }
    //
    //
    // this.#wrapper = this.#parent?.querySelector('.loading-wrapper') as HTMLElement | null;
    //
    // this.#parent.classList.add('loading-parent');
    // if (!this.#wrapper) this.#createWrapper();
  }

  // /**
  //  * 创建loading的wrapper
  //  * @private
  //  */
  // #createWrapper() {
  //   this.#wrapper = document.createElement('div');
  //   this.#wrapper.className = 'loading-wrapper';
  //   this.#parent?.appendChild(this.#wrapper);
  //
  //   this.#createSpinner();
  // }
  //
  // #createSpinner() {
  //   const spinner = document.createElement('div');
  //   spinner.className = 'loading-spinner';
  //   spinner.innerHTML = `·...·`;
  //   this.#wrapper?.appendChild(spinner);
  // }
  //
  public start() {
    // window.__BUTTERFLY_CONFIG.common.loading
  }

  stop() {
    console.log('stop loading');
  }
}
