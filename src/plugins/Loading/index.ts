/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Loading
 * @Description: 页面加载
 */

import dot from './Dot';
import circle from './Circle';
import hourglass from './Hourglass';
import cross_line from './CrossLine';

const Loading = {
  circle,
  hourglass,
  cross_line,
  dot,
};

if (Loading[window.__BUTTERFLY_CONFIG.common.loading]) {
  const loading = new Loading[window.__BUTTERFLY_CONFIG.common.loading]();
  console.log(loading);
  window.addEventListener('load', () => loading.destroy());
}
