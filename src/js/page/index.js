/**
 * @date: 2023/10/8
 * @author: 小红
 * @fileName: index
 * @Description: 首页
 */
import $ from 'jquery';
import {run} from '../core/_util';
import {App} from '../core/_decorator';
import Typed from 'typed.js';
import Pagination from '../modules/pagination';

@App([Pagination])
class Index {

  constructor() {
    this.typewriter();
  }

  // 打字机效果
  typewriter() {
    // 创建打字
    const useTyped = (strings) => {
      if(!strings.length) return;

      new Typed('.above-subtitle--text', {
        strings,
        startDelay: 300,
        typeSpeed: 200,
        loop: true,
        backSpeed: 50,
      });
    };

    // 自定义
    const text = byApp.config.index.typewriter_custom_text?.replaceAll('\n', '').split('|&|');

    // 随机文字
    if(byApp.config.index.enable_typewriter_random_text) {
      $.ajax({
        url: byApp.config.index.typewriter_random_url,
        type: 'get',
        dataType: 'text',
        success: (res) => {
          useTyped([res]);
        },
        error: (err) => {
          useTyped(text);
        },
      });
      return;
    }
    useTyped(text);
  }
}
run(Index);