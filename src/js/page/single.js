/**
 * @Author: 小红
 * @Date: 2023/1/11
 * @fileName: single
 * @Description: 独立页面
 */
import {useFancyBoxImg} from "../base/utils";
import {useCodeBlock, useRenderHtml, useSwitchCodeTheme} from "../base/renderHtml";


class Single {
  constructor() {
    // 使用渲染 md -> html
    // useRenderHtml();

    // 代码块
    useCodeBlock();

    // 代码主题
    useSwitchCodeTheme();
    
    // 图片放大
    useFancyBoxImg();
  }

}

!(() => {
  document.addEventListener("DOMContentLoaded", () => window.SingleClass = new Single())
})();