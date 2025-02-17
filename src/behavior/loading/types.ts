/**
 * @date: 2025/2/14
 * @author: 小红
 * @fileName: types
 * @Description: 类型
 */

// 加载函数类型
export type LoadingFn = 'circle' | 'hourglass' | 'cross_line' | 'dot';

// 加载抽象类
// export abstract class LoadingAbs {
//   #styleDom: HTMLStyleElement = document.createElement('style');
//
//   #wrapperDom: HTMLDivElement = document.createElement('div');
//
//   protected constructor(cssText: string) {
//     this.#styleDom.textContent = cssText;
//     document.head.appendChild(this.#styleDom);
//
//     this.#wrapperDom.className = 'loading-wrapper';
//     this.#wrapperDom.innerHTML = `<dvi class="loading-body"></dvi>`;
//   }
//
//   // 开始加载
//   public start() {
//     document.head.appendChild(this.#styleDom);
//     document.body.appendChild(this.#wrapperDom);
//   }
//
//   // 停止加载
//   public stop() {
//     this.#wrapperDom.remove();
//     this.#styleDom.remove();
//   }
// }
//
//

export interface LoadingOptions {
  text?: string;
  fullscreen?: boolean;
  el: string | HTMLElement;
  background?: string;
}
