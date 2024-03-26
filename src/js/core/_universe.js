/**
 * @date: 2024/3/26
 * @author: 小红
 * @fileName: _universe
 * @Description: 暗黑宇宙背景
 */

export default class Universe {
  #canvas; // canvas

  constructor() {
    // this.#createCanvas()
  }

  #createCanvas() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    canvas.style.background = 'red'
    this.#canvas = canvas;
    document.body.appendChild(this.#canvas);
  }

  draw(mode) {
    // console.log(mode);
  }


}



