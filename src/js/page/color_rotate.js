/**
 * @date: 2023/1/15
 * @author: 小红
 * @fileName: color_rotate
 * @Description: 彩色旋转加载loading
 */

class ColorRotate {
  cssText = `.loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width:100vw;
        height:100vh;
    }
    .loading-body {
       position: relative;
       width: 2.5em;
       height: 2.5em;
       transform: rotate(165deg);
    }

    .loading-body:before, .loading-body:after {
       content: "";
       position: absolute;
       top: 50%;
       left: 50%;
       display: block;
       width: 0.5em;
       height: 0.5em;
       border-radius: 0.25em;
       transform: translate(-50%, -50%);
    }
    
    .loading-body:before {
        animation: before8 2s infinite;
    }

    .loading-body:after {
     animation: after6 2s infinite;
    }
    
    @keyframes before8 {
     0% {
      width: 0.5em;
      box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
     }
    
     35% {
      width: 2.5em;
      box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
     }
    
     70% {
      width: 0.5em;
      box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
     }
    
     100% {
      box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
     }
    }
    
    @keyframes after6 {
     0% {
      height: 0.5em;
      box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
     }
    
     35% {
      height: 2.5em;
      box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
     }
    
     70% {
      height: 0.5em;
      box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
     }
    
     100% {
      box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
     }
    }`;
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

const Loading = new ColorRotate();

document.addEventListener('DOMContentLoaded', () => Loading.start());

window.addEventListener('load', () => Loading.destroy());

