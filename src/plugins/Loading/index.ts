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
import { LoadingType } from './types';

const Loading = {
  circle,
  hourglass,
  cross_line,
  dot,
};
((type: LoadingType) => {
  if (!Loading[type]) return;
  const loading = new Loading[type]();
  window.addEventListener('load', () => loading.destroy());
})(window.__BUTTERFLY_CONFIG.common.loading);
