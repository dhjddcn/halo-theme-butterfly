/**
 * @date: 2024/3/17
 * @author: 小红
 * @fileName: post
 * @Description: 文章
 */

import Core from "../core";
import RenderHtml from "../modules/renderHtml";

class Post extends Core {
  useRenderHtml = new RenderHtml(this.useTheme);

  constructor() {
    super();
  }

}

document.addEventListener("DOMContentLoaded", () => window.App.page = new Post())
