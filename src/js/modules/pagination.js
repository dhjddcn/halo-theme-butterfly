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
    this.#pgn = {
      path,
      nextUrl,
      prevUrl,
      hasPrevious: hasPrevious,
      hasNext: hasNext,
      page: Number(page),
      size: Number(size),
      total: Number(total),
      totalPages: Number(totalPages),
    };
    this.#createPage();
  }

  // 获取上一页
  #getPrevUrl() {
    return this.#pgn.hasPrevious == 'true' ? `<a class="page prev" rel="prev" href="${this.#pgn.prevUrl}"><i class="fas fa-chevron-left fa-fw"></i></a>` : '';
  }

  // 获取下一页
  #getNextUrl() {
    return this.#pgn.hasNext == 'true' ? `<a class="page next" rel="next" href="${this.#pgn.nextUrl}"><i class="fas fa-chevron-right fa-fw"></i></a>` : '';
  }

  // 获取页码
  #getPage() {
    const maxPagesToShow = 5; // 可见的最大页码数
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage, endPage;

    if (this.#pgn.totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = this.#pgn.totalPages;
    } else {
      if (this.#pgn.page <= halfMaxPagesToShow + 1) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (this.#pgn.page >= this.#pgn.totalPages - halfMaxPagesToShow) {
        startPage = this.#pgn.totalPages - maxPagesToShow + 1;
        endPage = this.#pgn.totalPages;
      } else {
        startPage = this.#pgn.page - halfMaxPagesToShow;
        endPage = this.#pgn.page + halfMaxPagesToShow;
      }
    }
    let html = '';

    for (let i = startPage; i <= endPage; i++) {
      html += `<a class="page${i == this.#pgn.page ? ' current' : ''}"  href="${this.#pgn.path}/page/${i}">${i}</a>`
    }

    return html
  }

  #createPage() {
    this.#dom.html(this.#getPrevUrl() + this.#getPage() + this.#getNextUrl());
  }
}
