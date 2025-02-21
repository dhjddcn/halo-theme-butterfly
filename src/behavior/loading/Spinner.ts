/**
 * @date: 2025/2/20
 * @author: 小红
 * @fileName: spinner
 * @Description: 加载动画
 */

import { LoadingSpinner, LoadingType } from './types';
import { checkTag, createStyleTag } from '../../util';

/**
 * 圆形加载动画
 */
function circle(): LoadingSpinner {
  return {
    htmlText: `<div class="loading-circle"></div>`,
    cssText: `
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
  `,
  };
}

function hourglass(): LoadingSpinner {
  return {
    htmlText: ``,
    cssText: `  `,
  };
}

function crossLine(): LoadingSpinner {
  return {
    htmlText: ``,
    cssText: `  `,
  };
}

function dot(): LoadingSpinner {
  return {
    htmlText: ``,
    cssText: `  `,
  };
}

const modules: { [key in LoadingType]: () => LoadingSpinner } = {
  circle,
  hourglass,
  cross_line: crossLine,
  dot,
};

/**
 * 创建加载动画
 * @param type
 */
export default function createSpinner(type: LoadingType): string {
  const className = `loading-${type}`;

  const module: LoadingSpinner = modules[type]();

  if (!checkTag(className)) {
    createStyleTag(module.cssText, className);
  }

  return `<div class="loading-spinner">${module.htmlText}</div>`;
}
