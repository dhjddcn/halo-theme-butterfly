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
        url: this.useConfig.base.index['typewriter_random_api'],
        type: 'get',
        success: (response) => {
          // 文本情况
          if(typeof response === 'string') {
            return useTyped([response]);
          }

          if(!this.useConfig.base.index['typewriter_api_value_format']) {
            return useTyped(['随机文案API返回数据格式为JSON，请配置取值格式！']);
          }

          //json 情况
          const text =  this.useConfig.base.index['typewriter_api_value_format'].split('.').reduce((o, i) => o[i], response);  
          useTyped([text]);
        },
        error: (err) => {
          useTyped(['获取随机文案失败，请检查API是否正常！']);
        },
      });
      return;
    }
    
    // 其他情况
    useTyped(text);
  }
}
