/**
 * @date: 2023/3/13
 * @author: 小红
 * @fileName: renderHtml
 * @Description: 择渲染页面 md -> html
 */


// 使用 renderHtml模块
export const useRenderHtml = () => {
  useCodeBlock(); // 代码块功能
  useToc(); // 目录
  useHandleTable(); // 表格功能
  useSwitchCodeTheme(); // 切换代码主题
}


/**
 * 代码块 功能
 * @param selector
 */
export const useCodeBlock = (selector = '.render-html') => {
  let dom = $(selector);

  const pres = dom.find('pre');

  if (!pres.length) return;

  const codeConfig = PageConfig.code['realNode'];

  pres.each(function () {
    const pre = $(this);

    const toolbar = pre.next('.toolbar');

    if (toolbar) {
      toolbar.append(`<div class="custom-item absolute top-0"></div>`);

      const customItem = toolbar.find('.custom-item');

      //标题
      if (codeConfig['enable_title']) {
        toolbar.addClass('c-title')
      }

      // 分割线
      if (codeConfig['enable_hr']) {
        toolbar.addClass('c-hr')
      }

      // 代码块复制
      if (codeConfig['enable_copy']) {
        customItem.append('<i class="fas fa-paste copy-button code-copy cursor-pointer"></i>');

        customItem.find('.code-copy').on('click', function (e) {
          const text = pre.children("code[class*='language-']").text();

          const clipboard = new ClipboardJS(this, {text: () => text});

          clipboard.on('success', () => {
            Qmsg.success("已复制");
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
        customItem.append('<i class="fa-sharp fa-solid fa-caret-down code-expander cursor-pointer"></i>');

        customItem.find('.code-expander').on('click', function () {
          pre.children('code').toggle();
          toolbar.toggleClass('c-expander');
        })
      }

    }

  })
}


/**
 * 目录 功能
 * @param contentSelector 内容选择器
 * @param tocSelector 目录选择器
 */
export const useToc = (contentSelector = '.render-html', tocSelector = '.post-tocbot > .toc') => {
  window.tocbot.init({
    contentSelector,
    tocSelector,
    headingSelector: 'h1, h2, h3, h4, h5, h6',
    hasInnerContainers: true,
    scrollSmooth: true,
    includeTitleTags: true,
    scrollSmoothDuration: 280,
    throttleTimeout: 30,
    headingsOffset: 80, // 目录中高亮的偏移值，和scrollSmoothOffset有关联
    scrollSmoothOffset: -80, // 屏幕滚动的偏移值（这里和导航条固定也有关联）
    fixedSidebarOffset: "auto",
    disableTocScrollSync: false,
    onClick: function (e) {
      e.preventDefault();
    },
    scrollEndCallback: function (e) {
      // console.log(e);
      // window.tocPhase = null
    }
  });

  const toc = $(tocSelector);

  if (!toc.html()) {
    toc.html('暂无目录~');
  }
}


/**
 * 切换代码主题
 */
export const useSwitchCodeTheme = (mode = window.dataTheme) => {
  const light = document.querySelector('link[data-code-theme=light]');

  const dark = document.querySelector('link[data-code-theme=dark]');

  if (!dark && !light) return;

  if (mode === 'light') {
    dark.disabled = true;
    light.disabled = false;
  } else {
    light.disabled = true;
    dark.disabled = false;
  }

  window.eventCore.on('changeTheme', (mode) => useSwitchCodeTheme(mode));
}


/**
 * 处理表格功能
 */
export const useHandleTable = (selector = '.render-html table') => {
  const tables = $(selector);

  if (!tables.length) return;

  tables.each(function () {
    const table = $(this);
    table.wrap($(`<div class="render-table overflow-x-scroll"></div>`))
  });

}