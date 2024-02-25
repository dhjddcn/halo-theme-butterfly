/**
 * @date: 2023/10/8
 * @author: 小红
 * @fileName: index
 * @Description: 首页
 */
import Core from "../core";
import Typed from 'typed.js';
import $ from 'jquery';
import Pagination from '../modules/pagination'

class Index extends Core {
  usePagination = new Pagination();

  constructor() {
    super();
    this.typewriter();
  }

  // 打字机效果
  typewriter() {
    const dom = $('.header .above-subtitle--text');
    if (!dom.length) return;
    const text = dom.attr('data-typewriter').replaceAll('\n', '').split('|&|');
    new Typed('.above-subtitle--text', {
      strings: text,
      startDelay: 300,
      typeSpeed: 200,
      loop: true,
      backSpeed: 50,
    })
  }

  themeChange(theme) {
    console.log('主题：' + theme);
  }
}

document.addEventListener("DOMContentLoaded", () => window.buy = new Index())


