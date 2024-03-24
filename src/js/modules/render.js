/**
 * @date: 2024/2/25
 * @author: 小红
 * @fileName: pagination
 * @Description: 渲染html
 */
import $ from 'jquery';
import Clipboard from 'clipboard';

export default class Render {

  #Theme = null;

  constructor(Theme) {
    this.#Theme = Theme;
    if (!Theme) return;
    this.useCodeBlock();
    this.#Theme.change((mode) => this.useSwitchCodeTheme(mode));
  }


  /**
   * 切换代码主题
   * @param mode
   */
  useSwitchCodeTheme(mode) {
    const light = document.querySelector('link[data-code=light]');

    const dark = document.querySelector('link[data-code=dark]');

    if (!dark && !light) return;

    light.disabled = mode === 'dark';
    dark.disabled = mode === 'light';
  }

  /**
   * 代码块
   */
  useCodeBlock() {
    this.useSwitchCodeTheme(this.#Theme.getMode());

    let dom = $('.render-html');
    const pres = dom.find('pre');
    if (!pres.length) return;

    const codeConfig = App.config.code;

    pres.each(function () {
      const pre = $(this);

      const toolbar = pre.next('.toolbar');

      if (toolbar) {
        toolbar.append(`<div class="custom-item"></div>`);

        const customItem = toolbar.find('.custom-item');

        //标题
        if (codeConfig['enable_title']) {
          toolbar.addClass('enable-title')
        }

        // 分割线
        if (codeConfig['enable_hr']) {
          toolbar.addClass('enable-hr')
        }

        // 代码块复制
        if (codeConfig['enable_copy']) {
          customItem.append('<i class="fas fa-paste code-copy"></i>');

          customItem.find('.code-copy').on('click', function (e) {
            const text = pre.children("code[class*='language-']").text();
            const clipboard = new Clipboard(this, {text: () => text});

            clipboard.on('success', () => {
              console.log("已复制"); // todo msg 提示插件未编写 
              alert("已复制");
              clipboard.destroy();
            });

            clipboard.on('error', () => {
              clipboard.destroy()
            })

            clipboard.onClick(e);
          })
        }

        // 代码块展开
        if (codeConfig['enable_expander']) {
          customItem.append('<i class="fa-sharp fa-solid fa-caret-down code-expander"></i>');

          customItem.find('.code-expander').on('click', function () {
            pre.children('code').toggle();
            toolbar.toggleClass('enable-expander');
          })
        }

      }

    })

  }


}
