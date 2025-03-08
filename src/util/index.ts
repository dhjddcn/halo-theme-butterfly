/**
 * @date: 2024/12/8
 * @author: 小红
 * @fileName: index
 * @Description: 工具
 */

/**
 * 判断白天还是夜晚
 * @returns {boolean}
 */
export function useIsDaytime(): boolean {
  const now = new Date();
  const currentHour = now.getHours();

  // 定义白天和夜晚的时间范围（可以根据需要调整）
  const daytimeStartHour = 6; // 早上6点
  const daytimeEndHour = 18; // 晚上6点

  // 判断当前小时是否在白天时间范围内
  return currentHour >= daytimeStartHour && currentHour < daytimeEndHour;
}

/**
 * 压缩 CSS
 * @param {string} css
 * @returns {string}
 */
export function compressCss(css: string): string {
  return css
    .replace(/\s+/g, ' ')
    .replace(/\s*([{};:])\s*/g, '$1')
    .trim();
}

/**
 * 创建 style 标签 添加到 head 中
 * @param {string} cssText
 * @param className
 */
export function createStyleTag(cssText: string, className: string) {
  const style = document.createElement('style');
  style.className = className;
  style.innerHTML = cssText;
  document.head.appendChild(style);
}

/**
 * 检查是否存在某一个标签
 * @param {string} className
 */
export function checkTag(className: string) {
  return document.querySelector(className);
}

/**
 * 检测元素是否有某个css类
 */
export function hasClass(el: HTMLElement, className: string): boolean {
  return el.classList.contains(className);
}

/**
 * 添加元素css类
 */
export function addClass(el: HTMLElement, ...className: (HTMLElement | string)[]) {
  const eCls = [...Array.from(el.classList), ...className];
  el.className = eCls.join(' ');
}

/**
 * 移除元素css类
 */
export function removeClass(el: HTMLElement, ...className: (HTMLElement | string)[]) {
  const cls = Array.from(el.classList);

  for (let i = 0; i < className.length; i++) {
    const index = cls.indexOf(className[i] as string);
    if (index > -1) {
      cls.splice(index, 1);
    }
  }
  if (cls.length === 0) {
    el.removeAttribute('class');
  } else {
    el.className = cls.join(' ');
  }
}

/**
 * 代数效应
 */
