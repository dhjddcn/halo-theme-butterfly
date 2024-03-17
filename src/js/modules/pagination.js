/**
 * @date: 2024/2/25
 * @author: 小红
 * @fileName: pagination
 * @Description:生成页码
 */

import $ from 'jquery';

export default class Pagination {
  #dom = $('.pagination');
  #pgn = window.pgnInfo;

  constructor() {
    if (this.#pgn.page > this.#pgn.totalPages) return;
    this.#createPage();
  }

  // 获取上一页
  #getPrevUrl() {
    return this.#pgn.hasPrevious ? `<a class="page prev" rel="prev" href="${this.#pgn.prevUrl}"><i class="fas fa-chevron-left fa-fw"></i></a>` : '';
  }

  // 获取下一页
  #getNextUrl() {
    return this.#pgn.hasNext ? `<a class="page next" rel="next" href="${this.#pgn.nextUrl}"><i class="fas fa-chevron-right fa-fw"></i></a>` : '';
  }

  // 获取页码
  #getPage() {
    const {totalPages, page, path} = this.#pgn;
    const maxPagesToShow = 5; // 可见的最大页码数
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (page <= halfMaxPagesToShow + 1) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (page >= totalPages - halfMaxPagesToShow) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = page - halfMaxPagesToShow;
        endPage = page + halfMaxPagesToShow;
      }
    }
    let html = '';

    for (let i = startPage; i <= endPage; i++) {
      html += `<a class="page${i === page ? ' current' : ''}"  href="${path}/page/${i}">${i}</a>`
    }

    return html
  }

  #createPage() {
    this.#dom.html(this.#getPrevUrl() + this.#getPage() + this.#getNextUrl());
  }
}
