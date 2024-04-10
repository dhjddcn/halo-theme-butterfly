/**
 * @date: 2023/11/5
 * @author: 小红
 * @fileName: _message
 * @Description: 消息提示
 */

export default class Message {

  ins = null; // 实例

  constructor(config) {
    this.ins = document.createElement('div');
    this.ins.className = 'message-container';
    document.body.appendChild(this.ins);
  }

  /**
   * @description: 弹出消息
   * @param msg
   */
  createWrapper(msg) {
    const div = document.createElement('div');
    div.className = 'message-wrapper';
    div.innerHTML = `<div class=""></div>`;
  }

}
 
 
