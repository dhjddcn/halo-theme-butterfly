/**
 * @date: 2023/10/9
 * @author: 小红
 * @fileName: Index
 * @Description:核心
 */

import _message from "./_message";
import Jquery from "jquery";
import {throttle} from "./_util";

export default class Core {
  $ = Jquery;
  msg = new _message();
  theme = 'light';

  constructor() {
    this.#initThemeMode();
    this.#scroll();
    this.#backTop()
    this.#bars();
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
    const themeMode = ThemeConfig.style['mode'];
    let theme = localStorage.getItem('Index-data-theme') || 'light';

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
    localStorage.setItem('Index-data-theme', theme);
    this.themeChange(theme);
  }

  // 获取主题模式
  getThemeMode() {
    const rootTheme = document.documentElement.dataset.theme;
    const locDataTheme = localStorage.getItem('Index-data-theme');
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

    // 侧边小按钮组
    const sideBtn = this.$('.side-btn');

    // 导航栏
    const nav = this.$('.header > .nav');
    // 默认状态下大于56px时 add style
    // if (window.scrollY > maxNUm) nav.addClass('style');

    window.addEventListener('scroll', throttle(() => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop

      this.#nav(nav, [maxNUm, scrollNum, scrollTop]);

      // 用户模式下调用
      if (ThemeConfig.theme.mode === 'user') this.#sideBtn(sideBtn, [maxNUm, scrollNum, scrollTop]);

      scrollNum = scrollTop;
    }, 200));
  }

  // 侧边栏小按钮
  #sideBtn(dom, [maxNUm, scrollNum, scrollTop]) {
    if (scrollTop > maxNUm && scrollNum <= scrollTop) dom.addClass('active');

    if (scrollTop < maxNUm && scrollTop <= 2) dom.removeClass('active');
  }

  // 头部导航栏
  #nav(dom, [maxNUm, scrollNum, scrollTop]) {
    if (scrollTop > maxNUm) {
      dom.addClass('style');
      if (scrollNum <= scrollTop) {
        dom.removeClass('active')
      } else {
        dom.addClass('active')
      }
    } else {
      if (scrollTop === 0) dom.removeClass('active style');
    }
  }

  // 回到顶部
  #backTop() {
    this.$('button.back-top').on('click', () => {
      this.$('html,body').animate({scrollTop: 0}, 300);
    })
  }

  // 移动端侧边栏呼出图标
  #bars() {
    this.$('.nav a.bars').on('click', () => {
      // this.$('.side').toggleClass('active');
    })
  }
}