/**
 * @date: 2024/2/23
 * @author: 小红
 * @fileName: naveScroll
 * @Description: 滚动触发导航侧边的一些事件
 */
import $ from 'jquery';
import {useThrottle} from "./_util";

export default class Scroll {

  #sideBtnDom = $('#Butterfly > .side-btn');
  #navDom = $('.header > .nav');

  constructor() {
    this.#init();
  }

  #init() {
    const maxNUm = 56; // 最大值
    let scrollNum = 0; // 当前值
    window.addEventListener('scroll', useThrottle(() => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop

      // 激活头部导航栏
      this.#activeNav([maxNUm, scrollNum, scrollTop]);

      // 激活侧边按钮
      this.#activeBtn([maxNUm, scrollNum, scrollTop]);

      scrollNum = scrollTop;
    }, 200));
  }

  // 激活头部导航栏
  #activeNav([maxNUm, scrollNum, scrollTop]) {
    if (scrollTop > maxNUm) {
      this.#navDom.addClass('style');
      if (scrollNum <= scrollTop) {
        this.#navDom.removeClass('active')
      } else {
        this.#navDom.addClass('active')
      }
    } else {
      if (scrollTop === 0) this.#navDom.removeClass('active style');
    }
  }

  // 激活侧边按钮
  #activeBtn([maxNUm, scrollNum, scrollTop]) {
    if (scrollTop > maxNUm && scrollNum <= scrollTop) this.#sideBtnDom.addClass('active');

    if (scrollTop < maxNUm && scrollTop <= 2) this.#sideBtnDom.removeClass('active');
  }

}
 
 

