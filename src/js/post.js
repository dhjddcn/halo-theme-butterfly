/**
 * @Author: 小红
 * @Date: 2023/1/4
 * @fileName: post
 * @Description: 文章 代码块
 */
import {fancyBoxImg, initCode, initToc, switchCodeTheme} from './Utils.js'


class Post {
  constructor() {
    switchCodeTheme(dataTheme);

    initCode('.render-html pre');

    initToc('.post-tocbot > .toc', '.render-html');

    if (ThemeConfig.post['out_date'] > 0) this.outDate();

    fancyBoxImg('.render-html img');

    this.copyPermalink();

    this.copyRightPermalinkDecode();

    this.showTocbot();
  }

  // 
  // console.log(GlobalClass.getLink);


  // 文章过期
  outDate() {
    const dom = $('.post-outDate');

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
  copyRightPermalinkDecode() {
    const dom = $('.post-copyRight .permalink');

    if (!dom.length) return;

    dom.html(decodeURIComponent(dom.html()));
  }

  // 放大镜图片
  copyPermalink() {
    const dom = $('.post-support .share .copy-permalink');

    if (!dom.length) return;

    dom.on('click', function (e) {
      const clipboard = new ClipboardJS(this, {text: () => location.href});

      clipboard.on('success', () => {
        Qmsg.success("已复制");
        clipboard.destroy();
      });

      clipboard.on('error', () => {
        clipboard.destroy()
      })

      clipboard.onClick(e);
    })
  }

  // 移动端显示目录
  showTocbot() {
    const dom = $('.adsorption  .show-tocbot');

    if (!dom.length) return;

    dom.on('click', function () {

      const postTocbot = $('.aside  .post-tocbot');

      if (postTocbot.attr('style')) {
        postTocbot.css({'animation': 'toc-close .2s'});

        setTimeout(() => {
          postTocbot.attr('style', '');
        }, 100);

        return;

      }

      $('.main').css({'animation': 'none'});

      postTocbot.css({
        'display': 'block',
        'animation': 'toc-open .3s'
      });
    });

  }
}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.PostClass = new Post())
})();