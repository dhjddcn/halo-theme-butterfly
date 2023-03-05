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
    this.pagination();
  }

  // 打字机文案内容获取
  typewriter(){
    const dom = $('.above-subtitle--text');
    if (!dom.length) return;
    const text = dom.attr('data-typewriter');
    if (text.includes("http")){
      $.ajax({
        type: 'GET',
        url: text,
        dataType: 'text',
        success (data) {
          typewriterImp(data);
        },
        error (jqXHR, textStatus, errorThrown) {
          // 错误信息处理
          console.error(textStatus, errorThrown)
        }
      })
    } else {
      typewriterImp(text);
    }
  }

  // 向下箭头滚动
  aboveDown() {
    const down = $(".above-down > i");
    if (!down.length) return;
    down.on('click', () => {
      $("body,html").animate({scrollTop: $("main").offset().top}, 500);
    });
  }

  // 分页
  pagination() {
  }
}

// 打字机效果实现
function typewriterImp(text) {
  const textArr = text.replaceAll('\n', '').split('&+&');
  let isLoopFlg = false;
  if (textArr.length > 1) isLoopFlg = true;
  new Typed('.above-subtitle--text', {
    strings: textArr,
    startDelay: 300,
    typeSpeed: 200,
    loop: isLoopFlg,
    backSpeed: 50,
  })
}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.IndexClass = new Index())
})();