/**
 * @date: 2024/3/17
 * @author: 小红
 * @fileName: post
 * @Description: 文章
 */

import {App} from '../core/_decorator';
import {run} from '../core/_util';
import Render from "../modules/render";



@App([Render])
class Post  {

  constructor() {
    // this.useRender.useSwitchCodeTheme(this.useTheme.getMode());
    // this.useTheme.change((mode) => this.useRender.useSwitchCodeTheme(mode));
  }
}

run(Post);