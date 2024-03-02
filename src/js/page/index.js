/**
 * @date: 2023/10/8
 * @author: 小红
 * @fileName: index
 * @Description: 首页
 */
import Core from "../core";
import Typed from 'typed.js';
import $ from 'jquery';
import Pagination from '../modules/pagination';
import {useRandomColor} from '../core/_util'

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
}

document.addEventListener("DOMContentLoaded", () => window.App.page = new Index())
