/**
 * @date: 2025/2/20
 * @author: 小红
 * @fileName: Look
 * @Description: 加载动画
 */

/**
 * 圆形加载动画
 */
export function circle() {
  return `<div class="loading-circle"></div>`;
}

/**
 * 沙漏加载动画
 */
export function hourglass() {
  return `<div class="loading-hourglass"></div>`;
}

/**
 * 交叉线加载动画
 */
export function crossLine() {
  return `<div class="loading-crossLine"> <svg xmlns="http://www.w3.org/2000/svg" height="128px" width="256px" viewBox="0 0 256 128" class="loading-crossLine-svg"> <defs> <linearGradient y2="0" x2="1" y1="0" x1="0" id="grad1"> <stop stop-color="#5ebd3e" offset="0%"></stop> <stop stop-color="#ffb900" offset="33%"></stop> <stop stop-color="#f78200" offset="67%"></stop> <stop stop-color="#e23838" offset="100%"></stop> </linearGradient> <linearGradient y2="0" x2="0" y1="0" x1="1" id="grad2"> <stop stop-color="#e23838" offset="0%"></stop> <stop stop-color="#973999" offset="33%"></stop> <stop stop-color="#009cdf" offset="67%"></stop> <stop stop-color="#5ebd3e" offset="100%"></stop> </linearGradient> </defs> <g stroke-width="16" stroke-linecap="round" fill="none"> <g stroke="#ddd" class="loading-crossLine__track"> <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"></path> <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"></path> </g> <g stroke-dasharray="180 656"> <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" stroke-dashoffset="0" stroke="url(#grad1)" class="loading-crossLine__worm1"></path> <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" stroke-dashoffset="358" stroke="url(#grad2)" class="loading-crossLine__worm2"></path> </g> </g> </svg></div>`;
}

/**
 * 点加载动画
 */
export function dot() {
  return `<div class="loading-dot"></div>`;
}
