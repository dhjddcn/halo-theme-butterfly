/**
 * @date: 2023/10/9
 * @author: 小红
 * @fileName: Butterfly
 * @Description:核心
 */

import Message from "./Message";

export default class Butterfly {
  msg = new Message();

  constructor() {
    this.#initThemeMode();
  }

  #isDaytime() {
    const now = new Date();
    const currentHour = now.getHours();

    // 定义白天和夜晚的时间范围（可以根据需要调整）
    const daytimeStartHour = 6; // 早上6点
    const daytimeEndHour = 18;  // 晚上6点

    // 判断当前小时是否在白天时间范围内
    return currentHour >= daytimeStartHour && currentHour < daytimeEndHour;
  }

  // 初始化主题模式
  #initThemeMode() {
    let theme = localStorage.getItem('Butterfly-data-theme') || 'light';
    let mode = ThemeConfig.style['theme_mode'];
    switch (mode) {
      case 'auto':
        theme = this.#isDaytime() ? 'light' : 'dark';
        break;

      case 'user':
        break;

      default:
        theme = mode;
    }
  }

  // 设置主题模式
  setThemeMode(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('Butterfly-data-theme', theme);
    this.themeChange(theme);
  }

  // 主题模式切换
  themeChange(theme) {
  }

  // 获取主题模式
  getThemeMode() {
    const rootTheme = document.documentElement.dataset.theme;
    const locDataTheme = localStorage.getItem('Butterfly-data-theme');
    return rootTheme || locDataTheme;
  }

  // 切换主题模式
  toggleThemeMode() {
    this.setThemeMode(this.getThemeMode() === 'light' ? 'dark' : 'light')
  }

}