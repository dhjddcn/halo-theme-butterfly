/**
 * @date: 2023/7/10
 * @author: 小红
 * @fileName: global
 * @Description: 全局
 */

export default class Global {
  constructor() {
    // 事件
    this._Events = {};
    // 初始化主题模式
    this.SetTheme('init');
  }

  //事件订阅
  _on(eventName, callback) {
    if (!this._Events[eventName]) {
      this._Events[eventName] = [];
    }
    this._Events[eventName].push(callback);
  }

  //事件发布
  _emit(eventName, ...args) {
    if (!this._Events[eventName]) {
      return;
    }
    this._Events[eventName].forEach(cb => cb(...args));
  }

  //事件取消订阅
  _off(eventName, callback) {
    if (!this._Events[eventName]) {
      return;
    }
    this._Events[eventName] = this._Events[eventName].filter(cb => cb !== callback);
  }


  // 核心逻辑--------------


  // 显示是白天还是黑夜
  IsDay() {
    const now = new Date();
    const hour = now.getHours();
    return hour >= 6 && hour < 18;
  }

  // 设置主题模式  type init 初始化
  SetTheme(type) {
    const root = document.documentElement;
    const rootTheme = root.getAttribute('data-theme');
    let theme = 'light';


    // 初始化的时候
    if (type === 'init') {

      // 自动模式
      if (rootTheme === 'auto') theme = this.IsDay() ? 'light' : 'dark'

      // 用户模式
      else if (rootTheme === 'user') {
        theme = localStorage.getItem('Butterfly-data-theme') || 'light';
      }
      //指定模式
      else {
        theme = rootTheme;
      }

    } else {
      theme = rootTheme === 'light' ? 'dark' : 'light';
    }

    // 切换主题
    root.setAttribute('data-theme', theme);
    localStorage.setItem('Butterfly-data-theme', theme);
  }
}

