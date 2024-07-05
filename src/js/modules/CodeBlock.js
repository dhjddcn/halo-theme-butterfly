/**
 * @date: 2024/2/25
 * @author: 小红
 * @fileName: codeBlock
 * @Description: 代码块
 */
import $ from 'jquery';
import Clipboard from 'clipboard';
import {useInsertStyle, useToBool} from '../core/_util';

export default class codeBlock {
  name = 'Code';
  
  #renderDom = $('article.render'); // 文章渲染区域
  
  #conf = MainApp.conf.code;
  
  #attrs = MainApp.conf.attrs;
  
  constructor() {
    if(this.#conf.enable_code){
      this.#addCss();
      this.#code();
      this.#codeToolbar();
    }
  }

  /**
   * 添加样式
   */
  #addCss(){
    const cssStr = `.render code[class*=language-] {opacity: 0;transition: opacity .3s;}.render pre[class*=language-]:before, .render pre[class*=language-]:after {animation-name: fa-spin;animation-duration: var(--fa-animation-duration, 2s);animation-iteration-count: var(--fa-animation-iteration-count, infinite);animation-timing-function: var(--fa-animation-timing, linear);animation-direction: var(--fa-animation-direction, normal);animation-delay: var(--fa-animation-delay, 0s);font-family: "Font Awesome 6 Duotone";font-weight: 900;letter-spacing: normal;-webkit-font-smoothing: antialiased;display: var(--fa-display, inline-block);font-style: normal;font-variant: normal;line-height: 1;text-rendering: auto;font-size: 30px;width: 33px;height: 33px;position: absolute;top: 50%;left: 50%;right: 0;bottom: 0;z-index: 88;transform: translate(-50%, -50%);}.render pre[class*=language-]:before {color: var(--fa-primary-color, inherit);opacity: var(--fa-primary-opacity, 1);content: "\\e1d4";}.render pre[class*=language-]:after {content: "\\e1d4\\e1d4";opacity: var(--fa-secondary-opacity, 0.4);color: var(--fa-secondary-color, inherit);}.render pre[class*=language-].code-success:before, .render pre[class*=language-].code-success:after {display: none;}.render pre[class*=language-].code-success code {opacity: 1;}.render .code-toolbar {margin: 12px 0;overflow: hidden;box-shadow: var(--code-toolbar-box-shadow);border-radius: 5px;}.render .code-toolbar:before {content: "";position: absolute;top: 9px;left: 12px;z-index: 1;width: 12px;height: 12px;border-radius: 50%;background-color: #fc625d;box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;}.render .code-toolbar .toolbar {position: absolute;pointer-events: none;opacity: 1;left: 0;right: 0;top: 0;z-index: unset;height: 30px;line-height: 30px;text-align: center;}.render .code-toolbar .toolbar-item:first-child {display: none;}.render .code-toolbar .toolbar-item:first-child span {background-color: transparent;box-shadow: none;}.render .code-toolbar .toolbar .custom-item {position: absolute;top: 0;user-select: none;font-size: 1rem;right: 12px;color: #999;pointer-events: all;}.render .code-toolbar .toolbar .custom-item > i {cursor: var(--cursor-pointer);margin-left: 15px;transition: transform 0.2s;}.render .code-toolbar .toolbar .custom-item > i:hover {filter: brightness(1.2);}.render .code-toolbar .toolbar .custom-item > i.code-copy {font-size: .9rem;}.render .code-toolbar .toolbar.enable-expander i.code-expander {transform: rotate(90deg);}.render .code-toolbar .toolbar.enable-title .toolbar-item:first-child {display: block;}.render .code-toolbar .toolbar.enable-hr {border-bottom: 1px solid #b2a8a84d;}.render .code-toolbar pre[class*=language-] {position: relative;margin: 0;padding: 30px 0 0;overflow: hidden;white-space: pre;text-shadow: none;border-radius: 5px;}.render .code-toolbar pre[class*=language-] .line-numbers-rows {border-right: none;left: 0;top: 0;bottom: 0;padding-top: 12px;}.render .code-toolbar pre[class*=language-] code[class*=language-] {display: block;margin-bottom: 0;overflow-x: auto;padding: 5px 18px 10px;border-radius: 0 0 8px 8px;text-shadow: none;}.render .code-toolbar pre[class*=language-] code[class*=language-]::-webkit-scrollbar {width: 5px;height: 5px;}.render .code-toolbar pre[class*=language-] code[class*=language-] .token.string, .render .code-toolbar pre[class*=language-] code[class*=language-] .style .token.string, .render .code-toolbar pre[class*=language-] code[class*=language-] .token.entity, .render .code-toolbar pre[class*=language-] code[class*=language-] .token.operator, .render .code-toolbar pre[class*=language-] code[class*=language-] .token.url {background-color: transparent;}.render .code-toolbar pre[class*=language-].line-numbers code[class*=language-] {padding: 10px 20px 10px 50px;}`;
    useInsertStyle(cssStr);
  }

  /**
   * 代码块基础设置
   */
  #code(){
    
    this.#renderDom.addClass('single_code_select');

    if(this.#conf.enable_code_line)  this.#renderDom.addClass('line-numbers');

    //重新渲染代码块
    Prism.highlightAll();

    // 初始化代码块
    this.#codeTheme(MainApp.action.theme.getMode());
    
    // 代码块主题切换
    MainApp.action.theme.change((mode) => this.#codeTheme(mode));
  }

  /**
   * 代码块浅色暗色主题
   * @param mode
   */
  #codeTheme(mode) {
    if(!codeLight || !codeDark) return;

    codeLight.disabled = mode === 'dark';

    codeDark.disabled = mode === 'light';
  }

  /**
   * 代码块工具栏
   */
  #codeToolbar() {
    const pres = this.#renderDom.find('pre');
    
    pres.each((index, dom) => {
      const pre = $(dom);

      // 代码块工具栏
      const toolbar = pre.next('.toolbar');

      if(toolbar) {
        //标题
        if(this.#conf['enable_code_title']) {
          toolbar.addClass('enable-title');
        }

        // 分割线
        if(this.#conf['enable_code_hr']) {
          toolbar.addClass('enable-hr');
        }

        // 自定义设置
        this.#codeToolbarCustom(toolbar, pre);
      }
    });
    
    setTimeout(() => pres.addClass('code-success'), 200);
  }

  /**
   * 代码块工具栏自定义
   * @param toolbar
   * @param pre
   */
  #codeToolbarCustom(toolbar, pre){
    toolbar.append(`<div class="custom-item"></div>`);

    const customItem = toolbar.find('.custom-item');

    // 代码块复制
    if(this.#conf['enable_code_copy'] && useToBool(this.#attrs?.['enable_code_copy'])) {
      customItem.append('<i class="fas fa-paste code-copy"></i>');
      customItem.find('.code-copy').on('click', (e) => {
        const text = pre.children('code[class*=\'language-\']').text();
        const clipboard = new Clipboard(e.target, {text: () => text});

        clipboard.on('success', () => {
          MainApp.action.message.info('复制成功~');
          clipboard.destroy();
        });

        clipboard.on('error', () => {
          clipboard.destroy();
        });

        clipboard['onClick'](e);
      });
    }

    // 代码块展开
    if(this.#conf['enable_code_expander']) {
      customItem.append('<i class="fa-sharp fa-solid fa-caret-down code-expander"></i>');

      customItem.find('.code-expander').on('click', function() {
        pre.children('code').toggle();
        toolbar.toggleClass('enable-expander');
      });
    }

  }
  
}
