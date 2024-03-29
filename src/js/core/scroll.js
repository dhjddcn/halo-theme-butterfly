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
  #max_num = 56; // 最大值
  #scroll_Num = 0; // 当前值

  // 初始化
  constructor() {
    window.addEventListener('scroll', useThrottle(() => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop

      // 激活头部导航栏
      this.#activeNav(scrollTop);

      // 激活侧边按钮
      this.#activeBtn(scrollTop);

      this.#scroll_Num = scrollTop;
    }, 200));
  }

  // 激活头部导航栏
  #activeNav(scrollTop) {
    if (scrollTop > this.#max_num) {
      this.#navDom.addClass('style');
      if (this.#scroll_Num <= scrollTop) {
        this.#navDom.removeClass('active')
      } else {
        this.#navDom.addClass('active')
      }
    } else {
      if (scrollTop === 0) this.#navDom.removeClass('active style');
    }
  }

  // 激活侧边按钮
  #activeBtn(scrollTop) {
    if (scrollTop > this.#max_num && this.#scroll_Num <= scrollTop) this.#sideBtnDom.addClass('active');

    if (scrollTop < this.#max_num && scrollTop <= 2) this.#sideBtnDom.removeClass('active');
  }

}
 
 

