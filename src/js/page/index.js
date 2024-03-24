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
import {run} from "../core/_util";


class Index extends Core {
  usePagination = new Pagination();

  constructor() {
    super();
    this.typewriter();
  }

  // 打字机效果
  typewriter() {

    // 创建打字
    const useTyped = (strings) => {
      if (!strings.length) return;

      new Typed('.above-subtitle--text', {
        strings,
        startDelay: 300,
        typeSpeed: 200,
        loop: true,
        backSpeed: 50,
      })
    }

    // 自定义
    const text = App.config.index.typewriter_custom_text?.replaceAll('\n', '').split('|&|');

    // 随机文字
    if (App.config.index.enable_typewriter_random_text) {
      $.ajax({
        url: App.config.index.typewriter_random_url,
        type: 'get',
        dataType: 'text',
        success: (res) => {
          useTyped([res]);
        },
        error: (err) => {
          useTyped(text);
        }
      });
      return;
    }
    useTyped(text);
  }
}

run(Index);
