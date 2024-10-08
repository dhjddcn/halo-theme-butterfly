/**
 * @date: 2023/10/9
 * @author: 小红
 * @fileName: Utils
 * @Description:工具
 */
import * as echarts from 'echarts/core';
import $ from 'jquery';

/**
 * 防抖
 * @param func
 * @param wait
 * @param immediate
 * @returns {(function(): void)|*}
 */
export function useDebounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if(!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
  };
}

/**
 * 节流
 * @param func
 * @param wait
 * @param options
 * @returns {(function(): void)|*}
 */
export function useThrottle(func, wait, options = {}) {
  let timeOut, context, args;
  let previous = 0;

  const later = function() {
    previous = options['leading'] === false ? 0 : new Date().getTime();
    timeOut = null;
    func.apply(context, args);
    context = args = null;
  };

  return function() {
    const now = new Date().getTime();
    if(!previous && options['leading'] === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if(remaining <= 0 || remaining > wait) {
      if(timeOut) {
        clearTimeout(timeOut);
        timeOut = null;
      }
      previous = now;
      func.apply(context, args);
      if(!timeOut) context = args = null;
    }
    else if(!timeOut && options['leading'] !== false) {
      timeOut = setTimeout(later, remaining);
    }
  };
}

/**
 * 禁用滚动
 * @param bool
 */
export function useDisableScroll(bool) {
  if(bool) {
    document.body.style.overflow = 'hidden';
  }
  else {
    document.body.removeAttribute('style');
  }
}

/**
 * 判断白天还是夜晚
 * @returns {boolean}
 */
export function useIsDaytime() {
  const now = new Date();
  const currentHour = now.getHours();

  // 定义白天和夜晚的时间范围（可以根据需要调整）
  const daytimeStartHour = 6; // 早上6点
  const daytimeEndHour = 18;  // 晚上6点

  // 判断当前小时是否在白天时间范围内
  return currentHour >= daytimeStartHour && currentHour < daytimeEndHour;
}

/**
 * 遮罩层
 * @param close
 */
export function useMask(close) {
  let dom = $('#Butterfly >  .mask');
  if(dom.length === 0) dom = $('<div class="mask"></div>').appendTo('#Butterfly');

  dom.fadeIn(400);

  useDisableScroll(true);

  dom.click(() => {
    useDisableScroll(false);
    dom.off('click').fadeOut(400);
    close();
  });
}

/**
 * 随机获取颜色值
 * @returns {string}
 */
export function useRandomColor() {
  const randomColor = Math.random() * (0xFFFFFF - 0x100000) + 0x100000;

  return '#' + ('00000' + (randomColor << 0).toString(16)).slice(-6);
}

/**
 * 插入style
 */
export function useInsertStyle(str) {
  const style = document.createElement('style');
  style.textContent = str;
  document.head.appendChild(style);
}

/**
 * 转为布尔值 判断是否为true
 */
export function useToBool(str) {
  return [true, 'true'].includes(str);
}

/**
 * 延迟
 * @param time
 * @returns {*}
 */
export function useDelay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

/**
 *  图表渲染 支持浅色暗色
 * @param dom
 * @param getOption
 */
export function useChart(dom, getOption) {
  const options = getOption();

  let es = null;

  const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
      const {width} = entry.contentRect;
      if(width > 0) {
        es = echarts.init(dom, MainApp.useTheme.getMode());
        es.setOption(options);
        observer.disconnect();
      }
    }
  });

  observer.observe(dom);

  MainApp.useTheme.change((mode) => {
    es?.dispose();
    es = echarts.init(dom, mode);
    es.setOption(options);
  });

  window.addEventListener('resize', useThrottle(() => {
    es.resize();
  }, 500));
}

/**
 * 清理页面
 */
export function useClearPage() {
  window.addEventListener('load', () => {
    const scripts = document.querySelectorAll('script');

    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      if(script.id.includes('Script')) script.remove();
    }
  });
}

/**
 * 获取url参数
 * @returns {{}}
 */
export function getQueryParams(search = window.location.search) {
  if(!search) return null;

  const queryStr = search.substring(1);

  const params = {};
  
  const pairs = queryStr.split('&');
  
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i];
    const kv = pair.split('=');
    params[kv[0]] = kv[1] || '';
  }
  
  return params;
}