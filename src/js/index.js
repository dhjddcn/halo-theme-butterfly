/**
 * @Description: 首页
 * @author: 小红
 * @date: 2022/11/23
 * @fileName: index
 */


class Index {
  constructor() {
    this.typewriter();
  }

  // 打字机效果
  typewriter() {
    const dom = $('.above-subtitle--text');
    if (!dom.length) return;
    const text = dom.attr('data-typewriter');
    const textArr = text.replaceAll('\n', '').split('|+|');
    new Typed('.above-subtitle--text', {
      strings: textArr,
      startDelay: 300,
      typeSpeed: 200,
      loop: true,
      backSpeed: 50,
    })

  }

}


!(() => {
  document.addEventListener("DOMContentLoaded", () => window.pageClass = new Index())
})();