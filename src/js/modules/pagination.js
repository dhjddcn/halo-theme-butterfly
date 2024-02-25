/**
 * @date: 2024/2/25
 * @author: 小红
 * @fileName: pagination
 * @Description:生成页码
 */

import $ from 'jquery';


export default class Pagination {
  #dom = $('.pagination')

  constructor() {
    this.#init()
  }

  #init() {
    const [path, page, size, total, hasNext, hasPrevious, totalPages, nextUrl, prevUrl] = this.#dom.data('pgn').split('-');
    

    console.log(page);
  }

}
 
