/**
 * @date: 2023/10/8
 * @author: 小红
 * @fileName: index
 * @Description: 首页
 */
import Core from "../modules/Core";

class Index extends Core {
  constructor() {
    super();
  }


  themeChange(theme) {
    console.log('主题：' + theme);

  }
}

document.addEventListener("DOMContentLoaded", () => window.buy = new Index())