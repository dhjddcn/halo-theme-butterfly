/**
 * @date: 2023/10/9
 * @author: 小红
 * @fileName: Base
 * @Description:基础类
 */
import Events from "./Events";

export default class Base {

  constructor() {
    this.useEvent = new Events();
    this.useThemeMode = this.#themeMode();
  }


  // 获取主题模式
  getDataTheme(type = 'theme') {
    let locDataTheme = localStorage.getItem('Butterfly-data-theme');

    if (type === 'theme') return locDataTheme;

    return locDataTheme === 'light' ? 'dark' : 'light';
  }

  // 设置主题模式
  #setDataTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('Butterfly-data-theme', theme);
    this.useEvent.emit('themeChange', theme);
  }

  // 白天 ro 夜晚
  #isDaytime() {
    const now = new Date();
    const currentHour = now.getHours();

    // 定义白天和夜晚的时间范围（可以根据需要调整）
    const daytimeStartHour = 6; // 早上6点
    const daytimeEndHour = 18;  // 晚上6点

    // 判断当前小时是否在白天时间范围内
    return currentHour >= daytimeStartHour && currentHour < daytimeEndHour;
  }

  // 主题模式 
  #themeMode() {
    // config
    let theme = this.getDataTheme() || 'light';
    let mode = document.documentElement.dataset.mode;

    // 自动模式
    if (mode === 'auto') {
      theme = this.#isDaytime() ? 'light' : 'dark';
    } else if (['dark', 'light'].includes(mode)) {
      theme = mode;
    }

    this.#setDataTheme(theme);
    // 切换
    const toggle = () => this.#setDataTheme(this.getDataTheme('toggle'));

    return {
      toggle
    }
  }
}