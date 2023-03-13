/**
 * @date: 2023/3/13
 * @author: 小红
 * @fileName: event
 * @Description: 订阅发布
 */


// js 事件订阅发布
export default class Event {
  constructor() {
    this.events = {};
  }

  // 订阅
  on(eventName, fn) {
    if (this.events[eventName]) return; // 已经订阅过了

    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    
    this.events[eventName].push(fn);
  }

  // 发布
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(fn => fn(...args));
    }
  }


  // 移除订阅
  off(eventName, fn) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(item => item !== fn);
    }
  }


  //检查是否有订阅
  has(eventName) {
    return !!this.events[eventName];
  }


  //获取订阅
  get(eventName) {
    return this.events[eventName];
  }

}

// 创建事件
export const createEvent = () => {
  window.eventCore = new Event();
}