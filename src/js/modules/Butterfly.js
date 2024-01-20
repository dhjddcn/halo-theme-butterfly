/**
 * @date: 2023/10/9
 * @author: 小红
 * @fileName: Butterfly
 * @Description:核心
 */

import Message from "./Message";
import Jquery from "jquery";
import {throttle} from "./Utils";

export default class Butterfly {
  $ = Jquery;
  msg = new Message();
  theme = 'light';

  constructor() {
    this.#initThemeMode();
    this.#scroll()
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
    const themeMode = ThemeConfig.theme['mode'];
    let theme = localStorage.getItem('Butterfly-data-theme') || 'light';

    if (themeMode === 'auto') {
      theme = this.#isDaytime() ? 'light' : 'dark';
    } else if (themeMode === 'light' || themeMode === 'dark') {
      theme = themeMode;
    }

    this.setThemeMode(theme);
  }

  // 设置主题模式
  setThemeMode(theme) {
    this.theme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('Butterfly-data-theme', theme);
    this.themeChange(theme);
  }

  // 获取主题模式
  getThemeMode() {
    const rootTheme = document.documentElement.dataset.theme;
    const locDataTheme = localStorage.getItem('Butterfly-data-theme');
    return this.theme || rootTheme || locDataTheme;
  }

  // 切换主题模式
  toggleThemeMode() {
    this.setThemeMode(this.theme === 'light' ? 'dark' : 'light')
  }

  // 主题模式切换回调 可重写
  themeChange(theme) {
  }

  //滚动
  #scroll(e) {
    const maxNUm = 56;
    let scrollNum = 0;
    window.addEventListener('scroll', throttle(() => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop > maxNUm && scrollNum <= scrollTop) {
        // console.log('向下2', scrollTop)
      } else {
        // console.log('向上2', scrollTop)
      }
      

      this.#sideBtn([maxNUm, scrollNum, scrollTop]);
      scrollNum = scrollTop;
    }, 200));

  }

  // 头部导航栏
  #headerNav(e) {
  }

  // 侧边栏小按钮
  #sideBtn([maxNUm, scrollNum, scrollTop]) {
    let sideBtn;
    if (!sideBtn) sideBtn = this.$('.side-btn');

    if (scrollTop > maxNUm && scrollNum <= scrollTop) sideBtn.addClass('active');

    if (scrollTop < maxNUm && scrollTop <= 2) sideBtn.removeClass('active');
  }
}