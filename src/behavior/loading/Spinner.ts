import { compressCss } from '../../util';

/**
 * @date: 2025/2/20
 * @author: 小红
 * @fileName: spinner
 * @Description: 加载动画
 */
// import {createStyle} from "../../util";

export default class Spinner {
  #type = window.__BUTTERFLY_CONFIG.common.loading;

  constructor() {
    this.#hasStyle();
    console.log(this.#type);

    // return type
  }

  #hasStyle() {
    const className = `loading-${this.#type}`;

    let style = document.querySelector(`.${className}`);

    if (style) return;

    const css = `
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
      `;
    this.#createStyle(className, compressCss(css));

    // <div class="loading-circle"></div>
  }

  #createStyle(className: string, cssText: string) {
    const style = document.createElement('style');
    style.className = className;
    style.textContent = cssText;
    document.head.appendChild(style);
  }

  // get(type: string): string {
  //
  //   const sp = (this as any)[type]();
  //
  //   const className = `.loading-${type}`;
  //
  //   const style = document.querySelector(className) as HTMLStyleElement;
  //
  //   if (!style) {
  //     createStyle(``);
  //   }
  //
  //   return `<div class="loading-spinner"> ${(this as any)[type]()}</div>`
  // }
  //
  //
  // /**
  //  * 圆形加载动画
  //  */
  // circle() {
  //   return {
  //     htmlText: 11,
  //     cssText: 11
  //   }
  // }
}
