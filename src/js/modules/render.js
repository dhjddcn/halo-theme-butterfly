/**
 * @date: 2024/2/25
 * @author: 小红
 * @fileName: pagination
 * @Description: 渲染html
 */
import $ from 'jquery';
import Clipboard from 'clipboard';
import {isBool} from '../core/_util';
import tocBot from 'tocbot';

export default class Render {
  dom = $('article.render'); // 文章渲染区域
  className = []; // 默认单行复制
  lightDom = document.querySelector('link[data-code=light]'); // 亮色代码主题
  darkDom = document.querySelector('link[data-code=dark]'); // 暗色代码主题

  constructor(App) {
    if(!App) return;
    this.attrs = App.useConfig.attrs;
    this.conf = App.useConfig.base.render;

    // h1~h6标题图标
    if(this.conf['enable_h_icon']) this.className.push('enable_h_icon');

    //  代码块
    if(this.conf['enable_code']) {
      this.className.push('single_code_select');

      // 是否显示行号
      if(this.conf['enable_code_line']) this.className.push('line-numbers');

      this.dom.addClass(this.className.join(' '));

      //重新渲染代码块
      Prism.highlightAll();

      // 初始化代码主题
      this.setCodeTheme(App.useTheme.getMode());

      //主题切换，代码块切换
      App.useTheme.change((mode) => this.setCodeTheme(mode));

      // 初始化代码块
      this.setCodeBlock();
    }
    else {
      this.dom.addClass(this.className.join(' '));
    }

    this.setTocBot(App.useScroll); // 目录
  }

  /**
   * 切换代码主题
   * @param mode
   */
  setCodeTheme(mode) {
    if(!this.lightDom && !this.darkDom) return;

    this.lightDom.disabled = mode === 'dark';

    this.darkDom.disabled = mode === 'light';
  }

  /**
   * 代码块
   */
  setCodeBlock() {
    const pres = this.dom.find('pre');
    pres.each((index, dom) => {
      const pre = $(dom);

      // 代码块工具栏
      const toolbar = pre.next('.toolbar');

      if(toolbar) {
        //标题
        if(this.conf['enable_code_title']) {
          toolbar.addClass('enable-title');
        }

        // 分割线
        if(this.conf['enable_code_hr']) {
          toolbar.addClass('enable-hr');
        }

        // 自定义设置
        this.setCustomSettings(toolbar, pre);
      }
    });
  }

  /**
   * 代码块工具栏-自定义设置
   */
  setCustomSettings(toolbar, pre) {
    toolbar.append(`<div class="custom-item"></div>`);

    const customItem = toolbar.find('.custom-item');

    // 代码块复制
    if(this.conf['enable_code_copy'] && isBool(this.attrs?.['enable_code_copy'])) {
      customItem.append('<i class="fas fa-paste code-copy"></i>');
      customItem.find('.code-copy').on('click', function(e) {
        const text = pre.children('code[class*=\'language-\']').text();
        const clipboard = new Clipboard(this, {text: () => text});

        clipboard.on('success', () => {
          console.log('已复制'); // todo msg 提示插件未编写 
          alert('已复制');
          clipboard.destroy();
        });

        clipboard.on('error', () => {
          clipboard.destroy();
        });

        clipboard['onClick'](e);
      });
    }

    // 代码块展开
    if(this.conf['enable_code_expander']) {
      customItem.append('<i class="fa-sharp fa-solid fa-caret-down code-expander"></i>');

      customItem.find('.code-expander').on('click', function() {
        pre.children('code').toggle();
        toolbar.toggleClass('enable-expander');
      });
    }

  }

  /**
   * 设置目录
   */
  setTocBot(useScroll) {
    tocBot.init({
      contentSelector: 'article.render',
      tocSelector: '.toc',
      headingSelector: 'h1, h2, h3, h4, h5, h6',
      hasInnerContainers: true,
      scrollSmooth: true,
      includeTitleTags: true,
      scrollSmoothDuration: 280,
      throttleTimeout: 30,
      headingsOffset: 80, // 目录中高亮的偏移值，和scrollSmoothOffset有关联
      scrollSmoothOffset: -80, // 屏幕滚动的偏移值（这里和导航条固定也有关联）
      fixedSidebarOffset: 'auto',
      disableTocScrollSync: false,
      onClick: function(e) {
        e.preventDefault();
      },
      scrollEndCallback: function(e) {
      },
    });

    const isSticky = $('.aside .is-sticky');

    // toc fixed
    useScroll.change((max, num, scrollTop) => {
      if(scrollTop < max) return;
      if(num <= scrollTop) {
        isSticky.css('top', '');
      }
      else {
        isSticky.css('top', '70px');
      }
    });
  }
}
