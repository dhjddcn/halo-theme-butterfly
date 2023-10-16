/**
 * @date: 2023/10/8
 * @author: 小红
 * @fileName: index
 * @Description: 首页
 */
import Butterfly from "../modules/Butterfly";

class Index extends Butterfly {
  
  constructor() {
    super();
  }


}

document.addEventListener("DOMContentLoaded", () => window.butterfly = new Index())