/**
 * @date: 2024/7/18
 * @author: 小红
 * @fileName: dot
 * @Description:小圆点
 */

class Dot {
  cssText = `
  .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        height:100vh;
    }
    .dot {
      animation: rotate 1s infinite;
      height: 50px;
      width: 50px;
    }
    
    .dot:before,
    .dot:after {
      border-radius: 50%;
      content: '';
      display: block;
      height: 20px;
      width: 20px;
    }
    
    .dot:before {
      animation: ball1 1s infinite;
      background-color: #cb2025;
      box-shadow: 30px 0 0 #f8b334;
      margin-bottom: 10px;
    }
    
    .dot:after {
      animation: ball2 1s infinite;
      background-color: #00a096;
      box-shadow: 30px 0 0 #97bf0d;
    }
    
    @keyframes rotate {
      0% {
        -webkit-transform: rotate(0deg) scale(0.8);
        -moz-transform: rotate(0deg) scale(0.8);
      }
    
      50% {
        -webkit-transform: rotate(360deg) scale(1.2);
        -moz-transform: rotate(360deg) scale(1.2);
      }
    
      100% {
        -webkit-transform: rotate(720deg) scale(0.8);
        -moz-transform: rotate(720deg) scale(0.8);
      }
    }
    
    @keyframes ball1 {
      0% {
        box-shadow: 30px 0 0 #f8b334;
      }
    
      50% {
        box-shadow: 0 0 0 #f8b334;
        margin-bottom: 0;
        -webkit-transform: translate(15px,15px);
        -moz-transform: translate(15px, 15px);
      }
    
      100% {
        box-shadow: 30px 0 0 #f8b334;
        margin-bottom: 10px;
      }
    }
    
    @keyframes ball2 {
      0% {
        box-shadow: 30px 0 0 #97bf0d;
      }
    
      50% {
        box-shadow: 0 0 0 #97bf0d;
        margin-top: -20px;
        -webkit-transform: translate(15px,15px);
        -moz-transform: translate(15px, 15px);
      }
    
      100% {
        box-shadow: 30px 0 0 #97bf0d;
        margin-top: 0;
      }
    }
   `;
  style = document.createElement('style');
  container = document.createElement('div');

  constructor() {
    this.style.textContent = this.cssText;
    document.head.appendChild(this.style);
  }

  start() {
    this.container.className = 'loading-container';
    this.container.innerHTML = `<div class="dot"></div>`;
    document.body.appendChild(this.container);
  }

  destroy() {
    this.container.remove();
    this.style.remove();
    document.body.classList.remove('loading');
  }
}

const Loading = new Dot();

Loading.start();

window.addEventListener('load', () => Loading.destroy());


