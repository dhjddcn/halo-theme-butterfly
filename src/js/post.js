/**
 * @Author: 小红
 * @Date: 2023/1/4
 * @fileName: post
 * @Description: 文章 代码块
 */

class Post {
  constructor() {
    this.outDate();
    this.initToc();
    this.copyRightPermalinkDecode();
    this.fancyBoxImg();
    this.copyPermalink();
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

  // 文章目录
  initToc() {
    window.tocbot.init({
      tocSelector: '.toc-bot > .toc',
      contentSelector: '.render-html',
      headingSelector: 'h1, h2, h3, h4, h5, h6',
      hasInnerContainers: true,
      scrollSmooth: true,
      includeTitleTags: true,
      scrollSmoothDuration: 280,
      throttleTimeout: 30,
      headingsOffset: 80, // 目录中高亮的偏移值，和scrollSmoothOffset有关联
      scrollSmoothOffset: -80, // 屏幕滚动的偏移值（这里和导航条固定也有关联）
      fixedSidebarOffset: "auto",
      disableTocScrollSync: false,
      onClick: function (e) {
        e.preventDefault();

      },
      scrollEndCallback: function (e) {
        // console.log(e);
        // window.tocPhase = null
      }
    });
  }

  // dCodeURI
  copyRightPermalinkDecode() {
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

      $this.wrap($(`<span class="block text-center w-100" data-fancybox="post" href="${$this.attr("src")}" ></span>`));
    });
  }

  copyPermalink() {
    const dom = $('.share .copy-permalink');

    if (!dom.length) return;

    dom.on('click', function (e) {
      const clipboard = new ClipboardJS(this, {text: () => location.href});
      
      clipboard.on('success',() => {
        Qmsg.success("文章链接已复制");
        clipboard.destroy();
      });
      
      clipboard.on('error',() =>{
        clipboard.destroy()
      })
      
      clipboard.onClick(e);
    })

  }

}


!(() => {
  document.addEventListener("DOMContentLoaded", () => window.PostClass = new Post())
})();