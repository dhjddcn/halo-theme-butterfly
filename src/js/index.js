/**
 * @Description: 首页
 * @author: 小红
 * @date: 2022/11/23
 * @fileName: index
 */


class Index {
  constructor() {
    this.typewriter();
    this.aboveDown();
  }

  // 打字机效果
  typewriter() {
    const dom = $('.above-subtitle--text');
    if (!dom.length) return;
    const text = dom.attr('data-typewriter');
    const textArr = text.replaceAll('\n', '').split('&+&');
    new Typed('.above-subtitle--text', {
      strings: textArr,
      startDelay: 300,
      typeSpeed: 200,
      loop: true,
      backSpeed: 50,
    })
  }

  // 向下箭头滚动
  aboveDown() {
    const down = $(".above-down > i");
    if (!down.length) return;
    down.on('click', () => {
      $( "body,html" ).animate( { scrollTop: $( "main" ).offset().top }, 500 );
    });
  }
}


!(() => {
  document.addEventListener("DOMContentLoaded", () => window.IndexClass = new Index())
})();