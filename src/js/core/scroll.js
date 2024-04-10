/**
 * @date: 2024/2/23
 * @author: 小红
 * @fileName: naveScroll
 * @Description: 滚动触发导航侧边的一些事件
 */
import $ from 'jquery';
import {useThrottle} from './_util';

export default class Scroll {
  #CHANGE_FN = null; // 回调
  #sideBtnDom = $('#Butterfly > .side-btn');
  #navDom = $('.header > .nav');
  #max = 56; // 最大值
  #num = 0; // 上一次滚动值

  // 初始化
  constructor(config) {
    window.addEventListener('scroll', useThrottle(() => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;

      // 激活头部导航栏
      this.#activeNav(scrollTop);

      // 激活侧边按钮
      this.#activeBtn(scrollTop);

      this.#CHANGE_FN && this.#CHANGE_FN(this.#max, this.#num, scrollTop);
      this.#num = scrollTop;
    }, 200));
  }

  // 激活头部导航栏
  #activeNav(scrollTop) {
    if(scrollTop > this.#max) {
      this.#navDom.addClass('style');
      if(this.#num <= scrollTop) {
        this.#navDom.removeClass('active');
      }
      else {
        this.#navDom.addClass('active');
      }
    }
    else {
      if(scrollTop === 0) this.#navDom.removeClass('active style');
    }
  }

  // 激活侧边按钮
  #activeBtn(scrollTop) {
    // 滚动到顶部取消按钮
    if(scrollTop < this.#max && scrollTop <= 2) this.#sideBtnDom.removeClass('active');

    // 向下滚动激活侧边按钮
    if(scrollTop > this.#max && this.#num <= scrollTop) this.#sideBtnDom.addClass('active');
  }

  /**
   *  回调
   */
  change(fn) {
    this.#CHANGE_FN = fn;
  }

}
 
 

