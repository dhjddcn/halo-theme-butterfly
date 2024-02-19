/**
 * @date: 2023/10/9
 * @author: 小红
 * @fileName: Index
 * @Description:核心
 */

import Message from "./_message";
import Jquery from "jquery";
import LazyLoad from './_lazyLoad'
import {useDisableScroll, useThrottle} from "./_util";

export default class Core {
  $ = Jquery;
  msg = new Message();
  theme = 'light';
  constructor() {
    this.#initThemeMode();
    this.#scroll();
    this.#imgLazyLoad();
    this.#backTop()
    this.#bars();
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
    let theme = localStorage.getItem('Butterfly-data-theme') || 'light';

    if (themeMode === 'auto') {
      theme = this.#isDaytime() ? 'light' : 'dark';
    } else if (themeMode === 'light' || themeMode === 'dark') {
      theme = themeMode;
    }

    this.setThemeMode(theme);
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

    window.addEventListener('scroll', useThrottle(() => {
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


  // 侧边栏菜单
  #sideMenu() {
    this.$('menu.bar').children('li.child').each((i, el) => {
      const child = this.$(el);
      child.on('click', () => child.toggleClass('active'));
    });
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
    this.$('button.back-top').click(() => this.$('html,body').animate({scrollTop: 0}, 300));
  }

  //  遮罩
  #mask(close) {
    let dom = this.$('#Butterfly >  .mask');
    if (dom.length === 0) dom = this.$('<div class="mask"></div>').appendTo('#Butterfly');

    dom.fadeIn(400);

    useDisableScroll(true);

    dom.click(() => {
      useDisableScroll(false);
      dom.off('click').fadeOut(400);
      close();
    })
  }

  // 移动端侧边栏呼出图标
  #bars() {
    const sideBar = this.$('.side-bar');
    this.$('.nav a.bars').click((e) => {
      e.preventDefault();
      sideBar.addClass('active');

      this.#mask(() => sideBar.removeClass('active'));
    });

    //  注册侧边菜单
    this.#sideMenu();
  }

  #imgLazyLoad() {
    new LazyLoad({elements_selector: 'img', threshold: 0, data_src: 'lazy-src'})
  }

}