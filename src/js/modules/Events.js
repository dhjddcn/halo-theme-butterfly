/**
 * @date: 2023/10/8
 * @author: 小红
 * @fileName: Events
 * @Description: 主题模式
 */

class Events {
  constructor() {
    // 事件
    this.events = {};
  }

  //事件订阅
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  //事件发布
  emit(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach(cb => cb(...args));
  }

  //事件取消订阅
  off(eventName, callback) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
  }
}

export default Events;