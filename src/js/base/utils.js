/**
 * @date: 2023/1/9
 * @author: 小红
 * @fileName: Utils
 * @Description: 工具
 */
/**
 * 防抖
 * @param func
 * @param wait
 * @param immediate
 * @returns {(function(): void)|*}
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

/**
 * 节流
 * @param func
 * @param wait
 * @param options
 * @returns {(function(): void)|*}
 */
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
 * 数据平铺
 * @param data
 * @param key
 */
export function dataFlat(data, key) {
  return data.reduce(function deep(con, item) {
    if (item[key] && item[key].length) item[key].reduce(deep, con);
    con.push(item);
    return con;
  }, []);
}

/**
 *
 * @param theme
 * @param tp 0 初始化  1 重新绘制
 */
export function drawEcharts(theme, tp = 0) {

  if (!window?.drawEchartsDom) return;

  let chart = window.echarts.init(window.drawEchartsDom, theme);

  if (tp === 1) {
    chart.dispose();
    chart = window.echarts.init(window.drawEchartsDom, theme);
  }
  chart.setOption(window.drawEchartsOption);

  window.addEventListener("resize", (() => chart.resize()));
}

/**
 * 放大图片
 * @param selector
 */
export const useFancyBoxImg = (selector = '.render-html img') => {
  const dom = $(selector);

  if (!dom.length) return;

  dom.each(function () {
    const $this = $(this);

    // $this.attr('width', '');

    // $this.attr('height', '');

    $this.wrap($(`<span class="block text-center w-100" data-fancybox="fancyBoxImg" href="${$this.attr("src")}" ></span>`));
  });
}


