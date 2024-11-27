/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Hourglass
 * @Description: 交叉线加载
 */

import { AbstractLoading } from './types';

export default class Hourglass implements AbstractLoading {
  constructor() {
    console.log('Hourglass');
  }

  start() {
    console.log('Hourglass');
  }

  destroy() {
    console.log('destroy Hourglass');
  }
}
