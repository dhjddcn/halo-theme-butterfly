/**
 * @date: 2025/2/14
 * @author: 小红
 * @fileName: types
 * @Description: 类型
 */

// 加载函数类型
export type LoadingType = 'circle' | 'hourglass' | 'cross_line' | 'dot';

export interface LoadingOptions {
  text?: string;
  fullscreen?: boolean;
  el: string | HTMLElement;
  type: LoadingType;
}

export interface LoadingSpinner {
  getCssText: () => string;
  getHtmlText: () => string;
}
