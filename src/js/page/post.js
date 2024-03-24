/**
 * @date: 2024/3/17
 * @author: 小红
 * @fileName: post
 * @Description: 文章
 */

import Core from "../core";
import Render from "../modules/render";

class Post extends Core {
  useRender = new Render(this.useTheme);

  constructor() {
    super();
    // this.useRender.useSwitchCodeTheme(this.useTheme.getMode());
    // this.useTheme.change((mode) => this.useRender.useSwitchCodeTheme(mode));
  }

}

document.addEventListener("DOMContentLoaded", () => window.App.page = new Post())
