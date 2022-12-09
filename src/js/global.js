/**
 * @Description: 全局
 * @author: 小红
 * @date: 2022/12/6
 * @fileName: global
 */

class Global {
  constructor() {
    console.log('global');
  }
}


class Utils {
  static scrollNum = 0;

  static debounce(func, wait, immediate) {
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

  static throttle(func, wait, options) {
    let timeout, context, args
    let previous = 0
    if (!options) options = {}

    const later = function () {
      previous = options['leading'] === false ? 0 : new Date().getTime()
      timeout = null
      func.apply(context, args)
      if (!timeout) context = args = null
    }

    return function () {
      const now = new Date().getTime()
      if (!previous && options['leading'] === false) previous = now
      const remaining = wait - (now - previous)
      context = this
      args = arguments
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        func.apply(context, args)
        if (!timeout) context = args = null
      } else if (!timeout && options['leading'] !== false) {
        timeout = setTimeout(later, remaining)
      }
    }

  }

}


!(() => {
  document.addEventListener("DOMContentLoaded", () => window.globalclass = new Global())
})();