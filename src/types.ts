// 加载函数类型
export type LoadingFn = 'circle' | 'hourglass' | 'cross_line' | 'dot';

// 加载抽象类
export abstract class AbsLoading {
  #styleDom: HTMLStyleElement = document.createElement('style');

  #containerDom: HTMLDivElement = document.createElement('div');

  protected constructor(cssText: string) {
    this.#styleDom.textContent = cssText;
    document.head.appendChild(this.#styleDom);

    this.#containerDom.className = 'loading-container';
    this.#containerDom.innerHTML = `<dvi class="loading-body"></dvi>`;
  }

  // 开始加载
  public start() {
    document.head.appendChild(this.#styleDom);
    document.body.appendChild(this.#containerDom);
  }

  // 停止加载
  public stop() {
    this.#containerDom.remove();
    this.#styleDom.remove();
  }
}
