/**
 * @date: 2024/3/2
 * @author: 小红
 * @fileName: _aside
 * @Description:common
 */
import $ from 'jquery';
import {useMask} from './_util';
import LazyLoad from './_lazyLoad';

export default class Common {

  #conf = window.ThemeConfig.base;

  constructor() {
    this.#createSingleAction(); //创建单一行为事件

    if(this.#conf.aside['enable'] && this.#conf.aside['enable_webInfo']) this.#runDay(); //站点运行时间
  }

  // 站点运行时间
  #runDay() {
    const dom = $('.main > .aside .aside-webInfo .run-day');

    if(!dom.length) return;

    const siteDate = new Date(dom.attr('data-date'));

    if(siteDate.toString() === 'Invalid Date') return;

    const currentDate = new Date();

    const date = currentDate.getTime() - siteDate.getTime();

    const day = parseInt((date / (1000 * 24 * 60 * 60)).toString());

    dom.html(day + ' 天');
  }

  /**
   * 创建单一行为事件
   */
  #createSingleAction() {
    //图片懒加载
    new LazyLoad({
      elements_selector: 'img', threshold: 0, data_src: 'lazy-src',
    });

    //移动端侧边栏呼出图标
    const sideBar = $('.side-bar');
    $('.nav a.bars').click((e) => {
      e.preventDefault();
      sideBar.addClass('active');
      useMask(() => sideBar.removeClass('active'));
    });

    //移动端侧边栏侧边菜单
    $('menu.bar').on('click', 'li.child', (event) => event.currentTarget.classList.toggle('active'));
  }

  //返回顶部
  backTop() {
    $('html,body').animate({scrollTop: 0}, 300);
  }
}
 
 
