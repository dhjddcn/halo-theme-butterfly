/**
 * @date: 2025/3/12
 * @author: 小红
 * @fileName: index
 * @Description: 一些行为
 */

export default class Action {

  constructor() {
  }

  /**
   * 回到顶部
   */
  public backTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动
    });
  }
}