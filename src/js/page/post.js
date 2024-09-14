/**
 * @date: 2024/3/17
 * @author: 小红
 * @fileName: post
 * @Description: 文章
 */

import $ from 'jquery';
import App from '../core/App';
import codeBlock from '../modules/CodeBlock';
import Render from '../modules/Render';
import AmplifyImg from '../modules/AmplifyImg';

@App([Render, codeBlock, AmplifyImg])
class Post {
  run_meta() {
    const render = document.querySelector('article.render');
    const wordCount = document.querySelector('.wordCount >  span');
    const clock = document.querySelector('.clock >  span');

    wordCount.textContent = `字数总计 ${render.textContent.length} 字`;
    clock.textContent = `阅读时间 ${Math.ceil(render.textContent.length / 500)} 分钟`;
  }

  /**
   * 处理声明问题
   */
  run_statement() {
    const statementDom = $('.statement');

    if(!statementDom.length) return;

    // 处理url
    const urlDom = statementDom.find('.url .text a');

    urlDom.attr('href', window.location.href);

    urlDom.text(decodeURI(window.location.href));

    // 处理版权
    const CC_BY_NC_SA_4 = 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans';

    const copyright = MainApp.conf.custom_copy_right?.replace(/\{\$author}/g, MainApp.conf.contributor.name).replace(/\{\$CC_BY_NC_SA_4\.0}/g, CC_BY_NC_SA_4);

    statementDom.find('.copyright .text').html(copyright);
    
  }
}
