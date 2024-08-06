/**
 * @date: 2024/8/6
 * @author: 小红
 * @fileName: Circle
 * @Description: 加载loading
 */

class Circle {
  cssText = `
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        height:100vh;
    }
     .loading-body {
          position: relative;
          border: 4px solid rgba(0, 0, 0, .3);
          border-left-color: transparent;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          animation: spin89345 1s linear infinite;
     }
      
     html[data-color-scheme="dark"] .loading-body {
          border: 4px solid rgba(118 ,104 ,104 , 0.3);
          border-left-color: rgb(225,225,225);
     }
      
     @keyframes spin89345 {
          0% {
            transform: rotate(0deg);
          }
        
          100% {
            transform: rotate(360deg);
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
    this.container.innerHTML = `<dvi class="loading-body"></dvi>`;
    document.body.appendChild(this.container);
  }

  destroy() {
    document.body.classList.remove('loading');
    this.container.remove();
    this.style.remove();
  }
}

const Loading = new Circle();

Loading.start();

window.addEventListener('load', () => Loading.destroy());
