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

  #conf = MainApp.conf;

  constructor() {
    this.#h_icon();
    this.#domObserver();
    this.#tocBotH5();
    this.#copyRight();
  }

  /**
   * h标题图标
   */
  #h_icon() {
    if(this.#conf.enable_h_icon) this.#renderDom.addClass('enable_h_icon');
  }

  /**
   * 监听dom 处理目录
   */
  #domObserver() {
    const renderDom = document.querySelector('article.render');

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        if(entry.contentRect.height > 0) {
          this.#tocBot();
          observer.disconnect();
        }
      }
    });
    observer.observe(renderDom);
  }

  /**
   * 设置目录
   */
  #tocBot() {
    tocBot.init({
      contentSelector: 'article.render',
      tocSelector: '.aside-toc > .toc',
      headingSelector: 'h1,h2,h3,h4,h5,h6',
      hasInnerContainers: true,
      scrollSmooth: true,
      includeTitleTags: true,
      collapseDepth: this.#conf.toc_collapse_depth,
      scrollSmoothDuration: 280,
      throttleTimeout: 30,
      headingsOffset: 20, // 目录中高亮的偏移值，和scrollSmoothOffset有关联
      scrollSmoothOffset: -20, // 屏幕滚动的偏移值（这里和导航条固定也有关联）
      fixedSidebarOffset: 'auto',
      onClick: (e) => e.preventDefault(),
      scrollEndCallback: function(e) {
      },
    });

    MainApp.useScroll.change((max, num, scrollTop) => {
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
   */
  #tocBotH5() {
    const adeToc = this.#tocStickyDom.find('.aside-toc');

    const sideBtn = $('.side-btn');

    const tocBtn = $(`<button  class="button h5-toc" type="button"  title="文章目录" ><i class="fa-sharp fa-solid fa-list-tree"></i></button>`);

    sideBtn.prepend(tocBtn);

    tocBtn.on('click', async () => {
      adeToc.toggle('fast');

      await useDelay(500);

      adeToc.css('display') === 'none' && adeToc.attr('style', '');
    });
  }

  /**
   * 版权
   */
  #copyRight() {
    const copyRightDom = $('.copy-right');

    if(!copyRightDom.length) return;

    //
    // const a = $('.copy-right a.permalink');
    // console.log(a);
    //
    // a.attr('href', window.location.href);
    //
    // a.html(decodeURI(window.location.href));

    const html = `
        <i class="fa-solid fa-copyright"></i>

        <div class="author">
          <span class="name">文章作者：</span>
          <span class="text" >${this.#conf.display_name}</span>
        </div>

        <div class="url">
          <span class="name">本文链接：</span>
          <span class="text"><a class="permalink" target="_blank"></a></span>
        </div>

        <div class="declaration">
          <span class="name">版权声明：</span>
          <span class="text">本站所有文章除特别声明外，均采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a> 许可协议。转载请注明来自 @<a href="/" target="_blank" ></a>！</span>
        </div>
    `;

  }

}
