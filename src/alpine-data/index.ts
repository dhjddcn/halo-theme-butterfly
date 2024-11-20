/**
 * @date: 2024/11/19
 * @author: 小红
 * @fileName: index
 * @Description: 首页
 */

export default () => {
  return {
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  };
};
