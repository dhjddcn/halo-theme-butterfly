/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Dot
 * @Description: 小圆点加载
 */

import { AbstractLoading } from './types';

export default class Dot implements AbstractLoading {
  constructor() {
    console.log('Dot');
  }

  start() {
    console.log('Dot');
  }

  destroy() {
    console.log('destroy Dot');
  }
}
