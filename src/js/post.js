/**
 * @Author: 小红
 * @Date: 2023/1/4
 * @fileName: post
 * @Description: 文章 代码块
 */

class Post {
  constructor() {
    this.outDate();
    this.permalinkDecode();
    this.fancyBoxImg();
  }

  // 文章过期
  outDate() {
    const dom = GlobalClass.Butterfly.find('.post-outDate');

    if (!dom.length) return;

    const outDate = Number(dom.attr('data-outDate'));
    
    const publishTime = dom.attr('data-publishTime')

    let start = new Date(publishTime);
    
    let end = new Date();
    
    let days = Math.floor((end - start) / (24 * 3600 * 1000));
    
    if (days > outDate) {
      dom.html(`距离上次更新已经过了 ${days} 天，文中部分内容可能已经过时，如有疑问，请在下方留言。`);
      dom.removeClass('none')
    }
  }

  // dCodeURI
  permalinkDecode() {
    const dom = $('.copyRight .permalink');

    if (!dom.length) return;

    dom.html(decodeURIComponent(dom.html()));
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
          `<span class="block text-center w-100" data-fancybox="post" ></span>`
        )
      );
    });
  }


}


!(() => {
  document.addEventListener("DOMContentLoaded", () => window.PostClass = new Post())
})();