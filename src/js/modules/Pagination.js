/**
 * @date: 2024/2/25
 * @author: 小红
 * @fileName: pagination
 * @Description:页码
 */

import $ from 'jquery';

export default class Pagination {
  name = 'Pagination';
  
  #conf = {};

  constructor() {
    if(!MainApp.conf.pagination) return;

    this.#conf = MainApp.conf.pagination;

    if(this.#conf.page > this.#conf.totalPages) return;

    this.#createPage();
  }

  // 获取上一页
  #getPrevUrl() {
    return this.#conf.hasPrevious ? `<a class="page prev" rel="prev" aria-label="prev" href="${this.#conf.prevUrl}"><i class="fas fa-chevron-left fa-fw"></i></a>` : '';
  }

  // 获取下一页
  #getNextUrl() {
    return this.#conf.hasNext ? `<a class="page next" aria-label="next" href="${this.#conf.nextUrl}"><i class="fas fa-chevron-right fa-fw"></i></a>` : '';
  }

  // 获取路径
  #getPath() {
    const regex = /.*?(?=\/\d+)\//;

    if(this.#conf.hasNext) return this.#conf.nextUrl.match(regex)?.[0];

    if(this.#conf.hasPrevious) return this.#conf.prevUrl.match(regex)?.[0];

    return '/';
  }

  // 获取页码
  #getPage() {
    const {totalPages, page} = this.#conf;
    const path = this.#getPath();
    const maxPagesToShow = 5; // 可见的最大页码数
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage, endPage;

    if(totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    }
    else {
      if(page <= halfMaxPagesToShow + 1) {
        startPage = 1;
        endPage = maxPagesToShow;
      }
      else if(page >= totalPages - halfMaxPagesToShow) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      }
      else {
        startPage = page - halfMaxPagesToShow;
        endPage = page + halfMaxPagesToShow;
      }
    }
    let html = '';

    for (let i = startPage; i <= endPage; i++) {
      html += `<a class="page${i === page ? ' current' : ''}"  href="${path}${i}">${i}</a>`;
    }

    return html;
  }

  #createPage() {
    $('main.main  section.content').append(`<div class="pagination">${this.#getPrevUrl()}${this.#getPage()}${this.#getNextUrl()}</div>`);
  }
}
