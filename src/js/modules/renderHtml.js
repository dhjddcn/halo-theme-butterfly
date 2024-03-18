/**
 * @date: 2024/2/25
 * @author: 小红
 * @fileName: pagination
 * @Description: 渲染html
 */
import $ from 'jquery';

export default class RenderHtml {
  #useTheme = null

  constructor(useTheme) {
    this.#useTheme = useTheme;
    if (!useTheme) return;
    // this.useSwitchCodeTheme();
    this.useCodeBlock();
  }


  /**
   * 切换代码主题
   * @param mode
   */
  useSwitchCodeTheme(mode) {
    // console.log(mode);
    // console.log(this);
  }

  /**
   * 代码块
   */
  useCodeBlock() {
  }


}
