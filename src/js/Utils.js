/**
 * @date: 2023/1/9
 * @author: 小红
 * @fileName: Utils
 * @Description: 工具
 */
export function debounce(func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export function throttle(func, wait, options) {
  let timeOut, context, args
  let previous = 0
  if (!options) options = {}

  const later = function () {
    previous = options['leading'] === false ? 0 : new Date().getTime()
    timeOut = null
    func.apply(context, args)
    context = args = null
  }

  return function () {
    const now = new Date().getTime()
    if (!previous && options['leading'] === false) previous = now
    const remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeOut) {
        clearTimeout(timeOut)
        timeOut = null
      }
      previous = now
      func.apply(context, args)
      if (!timeOut) context = args = null
    } else if (!timeOut && options['leading'] !== false) {
      timeOut = setTimeout(later, remaining)
    }
  }
}


/**
 * 代码块 功能
 * @param dom
 */
export function initCode(dom) {
  if (!ThemeConfig.code.enable) return;

  const codes = $(dom);

  if (!codes.length) return;

  codes.each(function () {
    const pre = $(this);

    const toolbar = pre.next('.toolbar');

    if (toolbar) {
      toolbar.append(`<div class="custom-item absolute top-0"></div>`);

      const customItem = toolbar.find('.custom-item');

      //标题
      if (ThemeConfig.code['enable_title']) {
        toolbar.addClass('c-title')
      }

      // 分割线
      if (ThemeConfig.code['enable_hr']) {
        toolbar.addClass('c-hr')
      }

      // 代码块复制
      if (ThemeConfig.code['enable_copy']) {
        customItem.append('<i class="fas fa-paste copy-button code-copy cursor-pointer"></i>');

        customItem.find('.code-copy').on('click', function (e) {
          const text = pre.children("code[class*='language-']").text();

          const clipboard = new ClipboardJS(this, {text: () => text});

          clipboard.on('success', () => {
            Qmsg.success("文章链接已复制");
            clipboard.destroy();
          });

          clipboard.on('error', () => {
            clipboard.destroy()
          })

          clipboard.onClick(e);
        })
      }

      // 代码块展开
      if (ThemeConfig.code['enable_expander']) {
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
 * 切换代码块主题
 * @param tp
 */
export function switchCodeTheme(tp) {
  const light = document.querySelector('link[data-code-theme=light]');

  const dark = document.querySelector('link[data-code-theme=dark]');

  if (!dark && !light) return;

  if (tp === 'light') {
    dark.disabled = true;
    light.disabled = false;
    return;
  }

  light.disabled = true;
  dark.disabled = false;
}


//
/**
 * 目录
 * @param tocSelector
 * @param contentSelector
 */
export function initToc(tocSelector, contentSelector) {
  window.tocbot.init({
    tocSelector,
    contentSelector,
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

// 创建dom
export function createDom() {

}

export function msg(msg, type = 'success') {

}
