/**
 * @date: 2024/2/25
 * @author: 小红
 * @fileName: Render
 * @Description: 渲染html
 */
import $ from 'jquery';
import {useDelay} from '../core/_util';
import tocBot from 'tocbot';

export default class Render {
  name = 'Render';
  
  #renderDom = $('article.render'); // 文章渲染区域

  #tocStickyDom = $('.aside .is-sticky');
  
  #conf = MainApp.conf.render;
  
  constructor() {
    this.#h()
    this.#tocBot()
    this.#copyRight()
  }

  /**
   * h标题
   */
  #h(){
    if(this.#conf.enable_h_icon) this.#renderDom.addClass('enable_h_icon');
  }

  /**
   * 设置目录
   */
  #tocBot(){
    tocBot.init({
      contentSelector: 'article.render',
      tocSelector: '.aside-toc > .toc',
      headingSelector: 'h1, h2, h3, h4, h5, h6',
      hasInnerContainers: true,
      scrollSmooth: true,
      includeTitleTags: true,
      scrollSmoothDuration: 280,
      throttleTimeout: 30,
      headingsOffset: 80, // 目录中高亮的偏移值，和scrollSmoothOffset有关联
      scrollSmoothOffset: -80, // 屏幕滚动的偏移值（这里和导航条固定也有关联）
      fixedSidebarOffset: 'auto',
      onClick: (e) => e.preventDefault(),
      scrollEndCallback: function(e) {
      },
    });

    MainApp.action.scroll.change((max, num, scrollTop) => {
      if(scrollTop < max || window.innerWidth <= 1100) return;
      if(num <= scrollTop) {
        this.#tocStickyDom.css('top', '');
      }
      else {
        this.#tocStickyDom.css('top', '70px');
      }
    });

    const toc = $('.aside-toc > .toc');

    if(!toc.html()) toc.html('暂无目录~');
  }

  /**
   * h5目录
   * @returns {Promise<void>}
   */
  async tocBotH5() {
    const adToc = this.#tocStickyDom.find('.aside-toc');

    adToc.toggle('fast');

    await useDelay(500);

    adToc.css('display') === 'none' && adToc.attr('style', '');
  }

  /**
   * 版权
   */
  #copyRight(){
    const a = $('.copy-right a.permalink');
    
    a.attr('href', window.location.href);
    
    a.html(decodeURI(window.location.href));
  }

  
}
