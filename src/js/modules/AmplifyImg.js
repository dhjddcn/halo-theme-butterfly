/**
 * @date: 2024/7/4
 * @author: 小红
 * @fileName: AmplifyImg
 * @Description: 图片放大
 */
import {Fancybox} from '@fancyapps/ui';
import $ from 'jquery';
import {useInsertStyle} from '../core/_util';
import fancyBoxCss from '@fancyapps/ui/dist/fancybox/fancybox.css';

export default class AmplifyImg {
  name = 'AmplifyImg';

  constructor() {
    this.#addCss();
    this.#fBox();
  }

  #addCss() {
    let cssStr = ``;
    cssStr += fancyBoxCss.toString();
    useInsertStyle(cssStr);
  }

  #fBox() {
    const imgs = $('.main >.content img');

    imgs.each(function() {
      const $this = $(this);
      $this.wrap($(`<span data-fancybox="fancyBoxImg" href="${$this.attr('src')}"></span>`));
    });

    Fancybox.bind(
      '[data-fancybox="fancyBoxImg"]',
      {
        Toolbar: {
          display: {
            left: ['infobar'],
            middle: [
              'zoomIn',
              'zoomOut',
              'toggle1to1',
              'rotateCCW',
              'rotateCW',
              'flipX',
              'flipY',
            ],
            right: ['slideshow', 'thumbs', 'close'],
          },
        },
      });
  }
}
