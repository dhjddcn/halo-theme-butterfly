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

// 代码块
// <i className="fa-solid fa-sort-down"></i>
export function initCode(dom) {
  const codes = $(dom);

  if (!codes.length) return;

  codes.each(function () {
    const t = $(this);

    const toolbar = t.next('.toolbar');

    const enable_expander = true;

    const enable_copy = true;

    if (toolbar) {
      toolbar.append(`<div class="custom-item absolute top-0"></div>`);

      const customItem = toolbar.find('.custom-item');

      if (enable_expander) {
        customItem.append('<i class="fa-sharp fa-solid fa-caret-down code-expander cursor-pointer"></i>');

        customItem.find('.code-expander').on('click', function () {
          t.children('code').toggle(100);
        })
      }

      if (enable_copy) {
        customItem.append('<i class="fa-solid fa-book-copy code-copy cursor-pointer"></i>');

        customItem.find('.code-copy').on('click', function (e) {
          const text = t.children("code[class*='language-']").text();

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

      // toolbar.find('.custom-item').on('delegate', '.code-expander', function () {
      //   console.log(1111);
      // })

      // if (enable_expander) {
      //   t.find('.toolbar .code-expander').on('click', () => {
      //     console.log(1111);
      //   })
      //
      // }


    }


  })
}

// 创建dom
export function createDom() {

}

export function msg(msg, type = 'success') {

}
