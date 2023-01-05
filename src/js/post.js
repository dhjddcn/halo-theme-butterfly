/**
 * @Author: 小红
 * @Date: 2023/1/4
 * @fileName: post
 * @Description: 文章 代码块
 */

class Post {
  constructor() {
    console.log('post');
    this.fancyBoxImg();
  }

  // 放大镜图片
  fancyBoxImg() {
    const dom = $('.render-html img');

    if (!dom.length) return;

    dom.each(function () {
      const $this = $(this);
      $this.attr('width', '');
      $this.attr('height', '');
      $this.wrap(
        $(
          `<a class="block" data-fancybox="butterfly" href="${ $this.attr(
            "src"
          ) }"></a>`
        )
      );
    });

   
  }


}


!(() => {
  document.addEventListener("DOMContentLoaded", () => window.PostClass = new Post())
})();