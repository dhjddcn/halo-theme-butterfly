/**
 * @Description: 全局
 * @author: 小红
 * @date: 2022/12/6
 * @fileName: globals
 */
import {throttle, switchCodeTheme, drawEcharts} from './Utils.js'

class Global {
  constructor() {
    this.html = $('html');
    this.body = $('body');
    this.Butterfly = $('#Butterfly');
    this.Header = this.Butterfly.find('.header');
    this.init();
    this.pjax();
    this.nav();
    this.sidebar();
    this.scroll();
    this.runDay();
    this.adsorption()
  }

  //初始化一些配置
  init() {
    // //主题模式
    // const locDataTheme = localStorage.getItem('Butterfly-data-theme');
    //
    // if (locDataTheme) {
    //   this.html.attr('data-theme', locDataTheme);
    //   window.dataTheme = locDataTheme;
    // }

    // 图片加载
    window.lazyLoadInstance = new LazyLoad({
      elements_selector: 'img',
      threshold: 0,
      data_src: 'lazy-src'
    })

  }


  // 夜间模式星空背景
  starrySky(tp) {
  }

  pjax() {
    // $(document).pjax('[data-pjax] a, a[data-pjax]', '.pjax-content')
  }

  // 导航栏
  nav() {

  }

  sidebar() {
    const menus = this.body.find('.sidebar-menus .menu-item');

    if (!menus.length) return;

    menus.each(function () {
      const t = $(this);
      if (t.hasClass('relative')) {
        $(this).on('click', function () {
          $(this).toggleClass('active').children('.menu-child').stop().toggle("fast");
        })
      }
    })
  }

  // 滚动
  scroll() {
    const nav = this.Header.find('.nav');
    const adsorption = this.Butterfly.children('.adsorption');
    const postSticky = this.body.find('.post .aside .post-sticky');
    let scrollNum = 0;

    const fn = (e) => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop > 56) {
        if (scrollNum <= scrollTop) {
          // console.log('向下', scrollTop)

          if (nav.hasClass('visible')) {
            nav.addClass('hidden').removeClass('visible');
          }

          if (postSticky) postSticky.css('top', '');

          if (!adsorption.hasClass('active')) adsorption.addClass('active');

        } else {
          // console.log('向上', scrollTop)

          if (!nav.hasClass('visible')) {
            nav.addClass('visible').removeClass('hidden');
          }

          if (postSticky) postSticky.css('top', '70px');

        }

        if (!nav.hasClass('style')) nav.addClass('style');

      } else {
        if (scrollTop === 0) {
          nav.removeClass('style visible hidden');
          if (adsorption.hasClass('active')) adsorption.removeClass('active');
        }
      }
      scrollNum = scrollTop
    }

    window.addEventListener('scroll', throttle(fn, 150));
  }

  // 初始化运行时间
  runDay() {
    const dom = this.Butterfly.find('.run-day');

    if (!dom) return;

    const dataRunDay = dom.attr('data-runDay');

    if (!dataRunDay) return;

    const runDay = new Date();

    if (runDay.toString() === 'Invalid Date') {
      dom.html('<span style="color:#fd0000">建站时间配置错误</span>');
      return;
    }

    const date = new Date().getTime() - runDay.getTime();

    const day = parseInt((date / (1000 * 24 * 60 * 60)).toString());

    dom.html(day + ' 天');
  }

  //左右吸附小部件
  adsorption() {
    const adsorption = this.Butterfly.find('.adsorption');

    // 夜间模式切换
    adsorption.find('.switch-model').on('click', () => {

      const locDataTheme = localStorage.getItem('Butterfly-data-theme');

      if (locDataTheme === 'light') {
        switchCodeTheme('dark');

        drawEcharts('dark', 1)

        this.html.attr('data-theme', 'dark');

        localStorage.setItem('Butterfly-data-theme', 'dark');

        window.dataTheme = 'dark';

        this.starrySky('open'); // 开启星空背景
      } else {
        switchCodeTheme('light');

        drawEcharts('light', 1);

        this.html.attr('data-theme', 'light');

        localStorage.setItem('Butterfly-data-theme', 'light');

        window.dataTheme = 'light';

        this.starrySky('close') // 关闭星空背景
      }

    });


    // 返回顶部
    adsorption.find('.back-top').on('click', () => {
      this.html.animate({scrollTop: 0}, 300);
    });

  }


}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.GlobalClass = new Global())
})();
