/**
 * @date: 2025/2/14
 * @author: 小红
 * @fileName: types
 * @Description: 类型
 */

// 主题模式
export enum ThemeMode {
  auto = 'auto',
  user = 'user',
  light = 'light',
  dark = 'dark',
}

// 本地存储key
export const LOCALSTORAGE_KEY: string = 'data-color-scheme';

// 根元素主题属性
export const ATTR_KEY: string = 'colorScheme';
