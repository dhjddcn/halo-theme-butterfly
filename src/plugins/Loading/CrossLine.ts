/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Cross_line
 * @Description: 小圆点加载
 */

import { AbstractLoading } from './types';

export default class Cross_line implements AbstractLoading {
  constructor() {
    console.log('Cross_line');
  }

  start() {
    console.log('Cross_line');
  }

  destroy() {
    console.log('destroy Cross_line');
  }
}
