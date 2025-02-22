/**
 * @date: 2025/2/20
 * @author: 小红
 * @fileName: spinner
 * @Description: 加载动画
 */

/**
 * 圆形加载动画
 */
export class circle {
  getHtmlText(): string {
    return `<div class="loading-circle"></div>`;
  }

  getCssText(): string {
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
  }
}

/**
 * 沙漏加载动画
 */
export class hourglass {
  getHtmlText(): string {
    return `<div class="loading-hourglass"></div>`;
  }

  getCssText(): string {
    return `
  `;
  }
}

/**
 * 斜线加载动画
 */
export class crossLine {
  getHtmlText(): string {
    return `<div class="loading-hourglass"></div>`;
  }

  getCssText(): string {
    return `
  `;
  }
}

/**
 * 点加载动画
 */
export class dot {
  getHtmlText(): string {
    return `<div class="loading-hourglass"></div>`;
  }

  getCssText(): string {
    return `
  `;
  }
}
