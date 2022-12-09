/**
 * @Description: 首页
 * @author: 小红
 * @date: 2022/11/23
 * @fileName: index
 */


class Index {
  constructor() {
    this.scroll();
  }

  // 滚动
  scroll() {
    let scrollNum = 0;
    let nav = $('.nav');

    const fn = () => {
      let scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 56) {

        if (scrollNum <= scrollTop) {
          // console.log('向下')
          if (nav.hasClass('visible')) {
            nav.addClass('hidden');
            nav.removeClass('visible');
          }

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
        }

      }
      scrollNum = scrollTop
    }

    window.addEventListener('scroll', Utils.throttle(fn, 150));
  }
}


!(() => {
  document.addEventListener("DOMContentLoaded", () => window.pageClass = new Index())
})();