/**
 * @date: 2023/10/9
 * @author: 小红
 * @fileName: Index
 * @Description:核心
 */

import $ from "jquery";
import Message from "./_message";
import LazyLoad from './_lazyLoad'
import Theme from './_theme';
import {useMask} from "./_util";;
import Scroll from "./_scroll";


export default class Core {
  useTheme = new Theme(); //主题
  useMessage = new Message(); //消息
  useScroll = new Scroll(); //滚动导航侧边
  useLazyLoad = new LazyLoad({elements_selector: 'img', threshold: 0, data_src: 'lazy-src'}); //图片懒加载

  constructor() {
    this.#bars();
  }


  //返回顶部
  backTop() {
    $('html,body').animate({scrollTop: 0}, 300);
  }

  // 移动端侧边栏呼出图标
  #bars() {
    const sideBar = $('.side-bar');
    $('.nav a.bars').click((e) => {
      e.preventDefault();
      sideBar.addClass('active');
      useMask(() => sideBar.removeClass('active'));
    });

    //  注册侧边菜单
    $('menu.bar').on('click', 'li.child', (event) => event.currentTarget.classList.toggle('active'));
  }
}