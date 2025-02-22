/**
 * @date: 2025/2/14
 * @author: 小红
 * @fileName: types
 * @Description: 类型
 */

export type LoadingType = 'circle' | 'hourglass' | 'crossLine' | 'dot';

export interface LoadingOptions {
  text?: string;
  type?: LoadingType;
  fullscreen?: boolean;
  el: string | HTMLElement;
}

export interface LoadingSpinner {
  getHtmlText: () => string;
  getCssText: () => string;
}
