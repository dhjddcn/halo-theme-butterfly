/**
 * @date: 2023/10/8
 * @author: 小红
 * @fileName: index
 * @Description: 首页
 */
import $ from 'jquery';
import {App} from '../core/_decorator';
import Typed from 'typed.js';
import Pagination from '../modules/pagination';

@App([Pagination])
class Index {
  /**
   * 打字机
   */
  run_typewriter() {
    if(!this.useConfig.base.index['enable_above']) return;

    // 创建打字
    const useTyped = (strings) => {
      new Typed('.above-subtitle--text', {
        strings,
        startDelay: 300,
        typeSpeed: 200,
        loop: true,
        backSpeed: 50,
      });
    };

    // 自定义文字
    let text = this.useConfig.base.index['typewriter_custom_text']?.replaceAll('\n', '').split('|&|');

    if(!text || text.toString() === '') {
      text = ['请填写打字文案或者配置随机文案！'];
    }

    // 随机文字
    if(this.useConfig.base.index['enable_typewriter_random_text']) {
      $.ajax({
        url: this.useConfig.base.index['typewriter_random_url'],
        type: 'get',
        dataType: 'text',
        success: (res) => {
          useTyped([res]);
        },
        error: (err) => {
          useTyped(['获取随机文案失败，请检查API是否正常！']);
        },
      });
      return;
    }
    useTyped(text);
  }
}
