/**
 * @date: 2023/11/5
 * @author: 小红
 * @fileName: _message
 * @Description: 消息提示
 */

export default class Message {

  #container = null; //消息容器

  //svg 图标
  #svgs = {
    info: `<svg viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g fill-rule="nonzero"><path  fill="#2080f0" d="M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"></path></g></g></svg>`,
    error: `<svg viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g fill-rule="nonzero"><path fill="#d03050" d="M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"></path></g></g></svg>`,
  };

  /**
   * @description: 创建消息容器
   */
  constructor() {

  }

  #createContainer() {
    this.#container = document.createElement('div');
    this.#container.className = 'message-container';
    document.body.appendChild( this.#container);
  }

  /**
   * @description: 创建消息包装器
   * @param type 类型
   * @param msg 消息
   * @param duration 持续时间
   */
  #createWrapper(type, msg, duration) {
    if(!this.#container) this.#createContainer();
    const wrapper = document.createElement('div');
    wrapper.className = `message-wrapper ${type} animate__animated animate__fadeInDown animate__faster`;
    wrapper.innerHTML = `<div class="message-item">${this.#svgs[type]}<div class="message-text">${msg}</div></div>`;
    this.#container.appendChild(wrapper);
    this.#removeWrapper(wrapper, duration);
  }

  /**
   * @description 移除消息包装器
   * @param wrapper
   * @param duration
   */
  #removeWrapper(wrapper, duration = 3000) {
    setTimeout(() => {
      wrapper.classList.remove('animate__fadeInDown', 'animate__faster');
      wrapper.classList.add('animate__fadeOutUp', 'animate__faster');
      setTimeout(() => wrapper.remove(), 800);
    }, duration);
  }

  /**
   * @description: 消息提示
   * @param msg
   * @param duration
   */
  info(msg, duration) {
    this.#createWrapper('info', msg, duration);
  }

  /**
   * @description: 错误提示
   * @param msg
   * @param duration
   */
  error(msg, duration) {
    this.#createWrapper('error', msg, duration);
  }
}
 
 
