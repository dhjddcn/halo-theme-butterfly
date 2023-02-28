/**
 * @Author: 小红
 * @Date: 2023/1/11
 * @fileName: single
 * @Description: 独立页面
 */
import {fancyBoxImg, initCode, switchCodeTheme} from "./Utils";


class Single {
  constructor() {
    $('.render-html').css({'visibility': 'visible'});
    
    switchCodeTheme(dataTheme);

    initCode('.render-html pre');

    fancyBoxImg('.render-html img');
  }

}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.SingleClass = new Single())
})();