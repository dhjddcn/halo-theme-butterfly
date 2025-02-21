/**
 * @date: 2025/2/20
 * @author: 小红
 * @fileName: spinner
 * @Description: 加载动画
 */
// import {createStyle} from "../../util";

// export default class Spinner {
//   type: LoadingType;
//
//   constructor(type: LoadingType) {
//     this.type = type;
//     this.#hasStyle();
//   }
//
//   get(): string {
//     return `<div class="loading-circle"></div>`;
//   }
//
//   #hasStyle() {
//     const className = `loading-${this.type}`;
//
//     let style = document.querySelector(`.${className}`);
//
//     if (style) return;
//
//     const cssText = `
//           @keyframes circleSpin {
//               0% {
//                   transform: rotate(0deg);
//               }
//               to {
//                   transform: rotate(360deg);
//               }
//           }
//           .loading-circle {
//               position: relative;
//               border: 4px solid rgba(0, 0, 0, 0.3);
//               border-left-color: transparent;
//               border-radius: 50%;
//               width: 36px;
//               height: 36px;
//               animation: circleSpin 1s linear infinite;
//           }
//       `;
//
//     style = document.createElement('style');
//     style.className = className;
//     style.innerHTML = compressCss(cssText);
//     document.head.appendChild(style);
//   }
//
//
//   circle() {
//     return {
//       htmlText: 11,
//       cssText: 11
//     }
//   }
// }
import { LoadingSpinner, LoadingType } from './types';
import { compressCss } from '../../util';

/**
 * 圆形加载动画
 */
function circle(): LoadingSpinner {
  const getCssText = () => {
    return `
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
  };
  const getHtmlText = () => {
    return `<div class="loading-circle"></div>`;
  };

  return { getHtmlText, getCssText };
}

//
// export default {
//   circle
// }
// return `<div class="loading-spinner"></div>`

export default class Spinner {
  const = `<div class="loading-spinner"></div>`;

  constructor(type: LoadingType) {
    const spinner = (this as any)[type]();
    this.#hasStyle(spinner);
  }

  #hasStyle(spinner) {
    const className = `loading-${this.options.type}`;
    let style = document.querySelector(`.${className}`);
    if (style) return;
    style = document.createElement('style');
    style.className = className;
    style.innerHTML = compressCss(spinner.getCssText());
    document.head.appendChild(style);
  }

  public getCssText() {}

  public getHtmlText() {
    return '`<div class="loading-spinner"></div>`';
  }

  circle() {
    return {
      getCssText: () => {},
      getHtmlText: () => {},
    };
  }
}
