/**
 * @Description: 全局
 * @author: 小红
 * @date: 2022/12/6
 * @fileName: global
 */


class Utils {
  static debounce(func, wait, immediate) {
    let timeout
    return function () {
      const context = this
      const args = arguments
      const later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  static throttle(func, wait, options) {
    let timeOut, context, args
    let previous = 0
    if (!options) options = {}

    const later = function () {
      previous = options['leading'] === false ? 0 : new Date().getTime()
      timeOut = null
      func.apply(context, args)
      context = args = null
    }

    return function () {
      const now = new Date().getTime()
      if (!previous && options['leading'] === false) previous = now
      const remaining = wait - (now - previous)
      context = this
      args = arguments
      if (remaining <= 0 || remaining > wait) {
        if (timeOut) {
          clearTimeout(timeOut)
          timeOut = null
        }
        previous = now
        func.apply(context, args)
        if (!timeOut) context = args = null
      } else if (!timeOut && options['leading'] !== false) {
        timeOut = setTimeout(later, remaining)
      }
    }

  }
}

class Global {
  constructor() {
    // console.log('global');
    this.html = $('html');
    this.body = $('body');
    this.Butterfly = $('#Butterfly');
    this.Header = this.Butterfly.find('.header');
    this.init();
    this.pjax();
    this.nav();
    this.scroll();
    this.runDay();
    this.adsorption();
  }

  //初始化一些配置
  init() {
    //主题模式
    const locDataTheme = localStorage.getItem('Butterfly-data-theme');

    if (locDataTheme) this.html.attr('data-theme', locDataTheme);


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

  // 滚动
  scroll() {
    const nav = this.Header.find('.nav');
    const adsorption = this.Butterfly.children('.adsorption');
    let scrollNum = 0;

    const fn = () => {
      let scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 56) {

        if (scrollNum <= scrollTop) {
          // console.log('向下')
          if (nav.hasClass('visible')) {
            nav.addClass('hidden');
            nav.removeClass('visible');
          }

          if (!adsorption.hasClass('active')) adsorption.addClass('active');

        } else {
          // console.log('向上')
          if (!nav.hasClass('visible')) {
            nav.addClass('visible');
            nav.removeClass('hidden');
          }

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

    window.addEventListener('scroll', Utils.throttle(fn, 150));
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
        this.html.attr('data-theme', 'dark');
        localStorage.setItem('Butterfly-data-theme', 'dark');
        this.starrySky('open'); // 开启星空背景
      } else {
        this.html.attr('data-theme', 'light');
        localStorage.setItem('Butterfly-data-theme', 'light');
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
