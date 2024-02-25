/**
 * @date: 2024/2/25
 * @author: 小红
 * @fileName: pagination
 * @Description:生成页码
 */

import $ from 'jquery';


export default class Pagination {
  #dom = $('.pagination');

  #pgn = {};

  constructor() {
    this.#init()
  }

  #init() {
    const [path, nextUrl, prevUrl, page, size, totalPages, total, hasPrevious, hasNext] = this.#dom.data('pgn').split('-');
    this.#pgn = {path, nextUrl, prevUrl, page, size, totalPages, total, hasPrevious, hasNext};
    this.#createPage();
  }

  #createPage() {
    if (this.#pgn.page > this.#pgn.totalPages) {
      return;
    }

    let page = '';
    let next = '';
    let prev = '';

    // 上一页
    if (this.#pgn.hasPrevious == 'true') {
      prev = `<a class="page prev" rel="prev" href="${this.#pgn.prevUrl}"><i class="fas fa-chevron-left fa-fw"></i></a>`;
    }
    // 下一页
    if (this.#pgn.hasNext == 'true') {
      next = `<a class="page next" rel="next" href="${this.#pgn.nextUrl}"><i class="fas fa-chevron-right fa-fw"></i></a>`;
    }

    for (let i = 1; i <= this.#pgn.totalPages; i++) {
      page += `<a class="page ${i == this.#pgn.page ? 'current' : ''}"  href="${this.#pgn.path}/page/${i}">${i}</a>`;
    }
    this.#dom.html(prev + page + next);
  }
}
 
