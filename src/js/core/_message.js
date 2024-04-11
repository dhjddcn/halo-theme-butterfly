/**
 * @date: 2023/11/5
 * @author: 小红
 * @fileName: _message
 * @Description: 消息提示
 */

export default class Message {

  ins = null; // 实例

  constructor(config) {
    // if(this.ins) return this;
    //
    // this.createContainer();
    // this.createStyle();
    //
    // this.createWrapper();
  }

  /**
   * @description: 创建消息容器
   */
  createContainer() {
    const container = document.createElement('div');
    container.className = 'message-container';
    document.body.appendChild(container);
    this.ins = container;
  }

  /**
   * @description: 创建样式
   */
  createStyle() {
    const style = document.createElement('style');
    style.className = 'message-style';
    style.innerHTML = `
      .message-container {
        z-index: 6000;
        position: fixed;
        height: 0;
        overflow: visible;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 12px;
        left: 0;
        right: 0;
      }
      .message-wrapper {
        margin: 0 0 8px 0;
        z-index: 0;
        transform-origin: top center;
        display: flex;
      }
      
      .message{
          box-sizing: border-box;
          display: flex;
          align-items: center;
          transition: color .3s cubic-bezier(.4, 0, .2, 1), box-shadow .3s cubic-bezier(.4, 0, .2, 1), background-color .3s cubic-bezier(.4, 0, .2, 1), opacity .3s cubic-bezier(.4, 0, .2, 1), transform .3s cubic-bezier(.4, 0, .2, 1), margin-bottom .3s cubic-bezier(.4, 0, .2, 1);
          padding: 10px 20px;
          border-radius: 3;
          flex-wrap: nowrap;
          overflow: hidden;
          max-width: 720px;
          color: rgb(51, 54, 57);
          background-color: #fff;
          box-shadow: 0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05);
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * @description: 弹出消息
   * @param msg
   */
  createWrapper(msg) {
    const div = document.createElement('div');
    div.className = 'message-wrapper';
    div.innerHTML = `
                    <div class="message">1211221</div>
    `;
    this.ins.appendChild(div);
  }
}
 
 
