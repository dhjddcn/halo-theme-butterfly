/**
 * @date: 2024/3/17
 * @author: 小红
 * @fileName: post
 * @Description: 文章
 */

import App from '../core/App';
import codeBlock from '../modules/CodeBlock';
import Render from '../modules/Render';
import AmplifyImg from '../modules/AmplifyImg';

@App([Render, codeBlock, AmplifyImg])
class Post {
  run_meta() {
    const render = document.querySelector('article.render');
    const wordCount = document.querySelector('.wordCount >  span');
    const clock = document.querySelector('.clock >  span');

    wordCount.textContent = `字数总计 ${render.textContent.length} 字`;
    clock.textContent = `阅读时间 ${Math.ceil(render.textContent.length / 350)} 分钟`;

  }
}
