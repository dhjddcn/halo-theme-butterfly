/**
 * @Description: 全局
 * @author: 小红
 * @date: 2022/12/6
 * @fileName: globals
 */
import {throttle, switchCodeTheme, drawEcharts} from '../modules/utils.js'
import {createEvent} from '../modules/event.js'

class Global {
  constructor() {
    this.init();
    this.sidebar();
    this.scroll();
    this.runDay();
    createEvent();
  }

  //初始化一些配置
  init() {
    const html = $('html');

    // 移动端侧边栏开关
    $('.menu-item.toggle').on('click', () => {
      html.addClass('active-mask');
      this.switchSidebar(1);
    })

    // 图片加载
    window.lazyLoadInstance = new LazyLoad({elements_selector: 'img', threshold: 0, data_src: 'lazy-src'})

    // 夜间模式切换
    $('.adsorption .switch-model').on('click', () => {
      const locDataTheme = localStorage.getItem('Butterfly-data-theme') || 'light';
      
      const mode = locDataTheme === 'light' ? 'dark' : 'light';

      window.eventCore.emit('changeTheme', mode);
      
      if (locDataTheme === 'light') {
        // switchCodeTheme('dark');

        drawEcharts('dark', 1);

        $('html').attr('data-theme', 'dark');

        localStorage.setItem('Butterfly-data-theme', 'dark');

        window.dataTheme = 'dark';
      } else {
        // switchCodeTheme('light');

        drawEcharts('light', 1);

        $('html').attr('data-theme', 'light');

        localStorage.setItem('Butterfly-data-theme', 'light');

        window.dataTheme = 'light';
        
      }

    });


    // 返回顶部
    $('.adsorption .back-top').on('click', () => {
      $('html').animate({scrollTop: 0}, 300);
    });


    // 遮罩层
    $('.global-mask').on('click', () => {
      html.removeClass('active-mask');
      this.switchSidebar(0);
    })

  }

  /**
   * 1 开  0关 移动端侧边栏开关
   * @param tp
   */
  switchSidebar(tp) {
    const sidebar = $('.sidebar');

    if (tp === 1) {
      sidebar.css({"transform": "translate3d(-100%, 0, 0)"})
    } else {
      sidebar.css({"transform": "translate3d(0, 0, 0)"})
    }

  }

  sidebar() {
    const menus = $('.sidebar-menus .menu-item');

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
    const nav = $('.header .nav');
    const adsorption = $('.adsorption');
    const postSticky = $('.post .aside .post-sticky');
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

    window.addEventListener('scroll', throttle(fn, 200));
  }

  // 初始化运行时间
  runDay() {
    const dom = $('.aside-web-info .run-day');

    if (!dom) return;

    const dataRunDay = dom.attr('data-runday');

    if (!dataRunDay) return;

    const runDay = new Date();

    if (runDay.toString() === 'Invalid Date') {
      dom.html('<span style="color:#fd0000">建站时间配置错误</span>');
      return;
    }

    const date = runDay.getTime() - new Date(dataRunDay).getTime();

    const day = parseInt((date / (1000 * 24 * 60 * 60)).toString());

    dom.html(day + ' 天');
  }
}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.GlobalClass = new Global())
})();
